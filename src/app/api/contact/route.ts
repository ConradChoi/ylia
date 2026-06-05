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

    const error = validate(body);
    if (error) {
      return NextResponse.json({ success: false, message: error }, { status: 400 });
    }

    const endpoint = process.env.GAS_ENDPOINT;
    console.log("[contact] GAS_ENDPOINT 존재 여부:", !!endpoint);
    console.log("[contact] GAS_ENDPOINT 앞 30자:", endpoint?.slice(0, 30));

    if (!endpoint) {
      console.error("[contact] GAS_ENDPOINT 환경변수가 설정되지 않았습니다.");
      return NextResponse.json({ success: false, message: "서버 설정 오류입니다." }, { status: 500 });
    }

    const { consent: _consent, ...formData } = body;
    const payload: ContactPayload & { language: string } = {
      ...formData,
      language: "ko",
    };

    console.log("[contact] GAS 호출 시작");
    const gasRes = await fetch(endpoint, {
      method:   "POST",
      redirect: "follow",
      headers:  { "Content-Type": "application/json" },
      body:     JSON.stringify(payload),
    });

    console.log("[contact] GAS 응답 status:", gasRes.status);
    const rawText = await gasRes.text();
    console.log("[contact] GAS 응답 raw:", rawText.slice(0, 200));

    let gasData: { success: boolean; message?: string };
    try {
      gasData = JSON.parse(rawText);
    } catch {
      console.error("[contact] GAS 응답 JSON 파싱 실패:", rawText.slice(0, 200));
      return NextResponse.json(
        { success: false, message: "전송에 실패했습니다. 잠시 후 다시 시도해주세요." },
        { status: 502 }
      );
    }

    if (!gasData.success) {
      console.error("[contact] GAS 오류:", gasData.message);
      return NextResponse.json(
        { success: false, message: "전송에 실패했습니다. 잠시 후 다시 시도해주세요." },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true, message: "문의가 접수되었습니다." });

  } catch (err) {
    console.error("[contact] 예외 발생:", err);
    return NextResponse.json(
      { success: false, message: "서버 오류가 발생했습니다." },
      { status: 500 }
    );
  }
}
