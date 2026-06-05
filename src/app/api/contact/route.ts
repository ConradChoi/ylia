import { NextRequest, NextResponse } from "next/server";

interface ContactPayload {
  name:    string;
  email:   string;
  phone?:  string;
  company?:string;
  message: string;
}

function validate(data: Partial<ContactPayload>): string | null {
  if (!data.name?.trim())    return "이름을 입력해주세요.";
  if (!data.email?.trim())   return "이메일을 입력해주세요.";
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) return "올바른 이메일 형식이 아닙니다.";
  if (!data.message?.trim()) return "문의 내용을 입력해주세요.";
  return null;
}

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();

    // 유효성 검사
    const error = validate(body);
    if (error) {
      return NextResponse.json({ success: false, message: error }, { status: 400 });
    }

    const endpoint = process.env.GAS_ENDPOINT;
    if (!endpoint) {
      console.error("[contact] GAS_ENDPOINT 환경변수가 설정되지 않았습니다.");
      return NextResponse.json({ success: false, message: "서버 설정 오류입니다." }, { status: 500 });
    }

    // consent 제외, language 추가 후 GAS로 전송
    const { consent: _consent, ...formData } = body;
    const payload: ContactPayload & { language: string } = {
      ...formData,
      language: "ko",
    };

    // 서버 측 GAS 호출 → CORS 없음
    const gasRes = await fetch(endpoint, {
      method:  "POST",
      headers: { "Content-Type": "application/json" },
      body:    JSON.stringify(payload),
    });

    const gasData = await gasRes.json().catch(() => ({ success: false }));

    if (!gasData.success) {
      console.error("[contact] GAS 오류:", gasData.message);
      return NextResponse.json(
        { success: false, message: "전송에 실패했습니다. 잠시 후 다시 시도해주세요." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "문의가 접수되었습니다." });

  } catch (err) {
    console.error("[contact] 예외:", err);
    return NextResponse.json(
      { success: false, message: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
