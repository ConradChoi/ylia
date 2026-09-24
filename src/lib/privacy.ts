/* ── 개인정보처리방침 본문 (개인정보보호법 제30조) ── */
export const PRIVACY_EFFECTIVE_DATE = "2026-09-24";

export interface PrivacySection {
  title: string;
  body: string[];
}

export interface PrivacyPolicy {
  title: string;
  intro: string;
  effective: string;
  sections: PrivacySection[];
  back: string;
}

export const PRIVACY_POLICY: { ko: PrivacyPolicy; en: PrivacyPolicy } = {
  ko: {
    title: "개인정보처리방침",
    intro:
      "주식회사 일리아(이하 \"회사\")는 「개인정보 보호법」에 따라 정보주체의 개인정보를 보호하고 이와 관련한 고충을 신속하고 원활하게 처리할 수 있도록 다음과 같이 개인정보처리방침을 수립·공개합니다.",
    effective: `시행일: ${PRIVACY_EFFECTIVE_DATE}`,
    back: "홈으로",
    sections: [
      {
        title: "1. 개인정보의 처리 목적",
        body: ["회사는 홈페이지 문의 접수 및 답변, 상담 진행을 위하여 개인정보를 처리합니다. 처리한 개인정보는 이 목적 외의 용도로 이용하지 않습니다."],
      },
      {
        title: "2. 처리하는 개인정보 항목",
        body: [
          "필수: 이름, 이메일, 문의 내용",
          "선택: 연락처, 회사명",
          "자동 수집: 접속 기록, 쿠키, 브라우저 정보 등 서비스 이용 과정에서 생성되는 정보(방문 통계 목적)",
        ],
      },
      {
        title: "3. 개인정보의 처리 및 보유 기간",
        body: ["문의 관련 개인정보는 문의 처리 완료 후 1년간 보관한 뒤 지체 없이 파기합니다. 다만 관계 법령에서 보존을 요구하는 경우 해당 기간 동안 보관합니다."],
      },
      {
        title: "4. 개인정보의 제3자 제공",
        body: ["회사는 정보주체의 동의 또는 법률의 특별한 규정이 있는 경우를 제외하고 개인정보를 제3자에게 제공하지 않습니다."],
      },
      {
        title: "5. 개인정보 처리의 위탁 및 국외 이전",
        body: [
          "회사는 원활한 업무 처리를 위하여 다음과 같이 개인정보 처리 업무를 위탁하고 있습니다.",
          "Google LLC (미국): 문의 내용 저장 및 관리(Google Workspace), 방문 통계 분석(Google Tag Manager/Analytics)",
          "Amazon Web Services, Inc.: 홈페이지 호스팅 및 운영",
          "국외 이전 항목: 이름, 이메일, 연락처, 회사명, 문의 내용 / 이전 시기 및 방법: 문의 제출 시 네트워크를 통한 전송 / 보유 기간: 3항과 같음",
          "국외 이전을 원하지 않는 경우 문의 폼 대신 이메일(info@ylia.io) 또는 전화로 문의하실 수 있습니다.",
        ],
      },
      {
        title: "6. 개인정보의 파기 절차 및 방법",
        body: ["보유 기간이 지나거나 처리 목적이 달성된 개인정보는 지체 없이 파기합니다. 전자적 파일은 복구할 수 없는 방법으로 삭제합니다."],
      },
      {
        title: "7. 정보주체의 권리와 행사 방법",
        body: ["정보주체는 회사에 대해 언제든지 개인정보 열람·정정·삭제·처리정지를 요구할 수 있으며, 아래 개인정보 보호책임자에게 이메일 또는 전화로 요청하시면 지체 없이 조치하겠습니다."],
      },
      {
        title: "8. 개인정보의 안전성 확보 조치",
        body: ["회사는 개인정보에 대한 접근 권한 제한, 전송 구간 암호화(HTTPS), 접근 계정 관리 등 안전성 확보에 필요한 조치를 하고 있습니다."],
      },
      {
        title: "9. 쿠키의 설치·운영 및 거부",
        body: ["회사는 방문 통계 분석을 위해 쿠키를 사용합니다. 정보주체는 웹 브라우저 설정을 통해 쿠키 저장을 거부할 수 있으며, 거부하더라도 홈페이지 이용에는 제한이 없습니다."],
      },
      {
        title: "10. 개인정보 보호책임자",
        body: ["성명: 최종훈 (대표이사)", "이메일: info@ylia.io", "연락처: +82-10-9025-5093"],
      },
      {
        title: "11. 권익침해 구제 방법",
        body: [
          "개인정보 침해에 대한 신고나 상담이 필요하신 경우 아래 기관에 문의하실 수 있습니다.",
          "개인정보분쟁조정위원회: 1833-6972 (www.kopico.go.kr)",
          "개인정보침해신고센터: 118 (privacy.kisa.or.kr)",
          "대검찰청: 1301 (www.spo.go.kr)",
          "경찰청: 182 (ecrm.police.go.kr)",
        ],
      },
      {
        title: "12. 개인정보처리방침의 변경",
        body: ["이 개인정보처리방침은 시행일부터 적용되며, 내용이 변경되는 경우 홈페이지를 통해 공지합니다."],
      },
    ],
  },
  en: {
    title: "Privacy Policy",
    intro:
      "YLIA Co., Ltd. (the \"Company\") establishes and discloses this Privacy Policy in accordance with the Personal Information Protection Act of the Republic of Korea to protect personal information and handle related concerns promptly.",
    effective: `Effective date: ${PRIVACY_EFFECTIVE_DATE}`,
    back: "Back to Home",
    sections: [
      {
        title: "1. Purpose of Processing",
        body: ["We process personal information to receive and respond to inquiries submitted through this website. It is not used for any other purpose."],
      },
      {
        title: "2. Information We Collect",
        body: [
          "Required: name, email, message",
          "Optional: phone number, company",
          "Automatically collected: access logs, cookies, and browser information (for visit statistics)",
        ],
      },
      {
        title: "3. Retention Period",
        body: ["Inquiry information is kept for 1 year after the inquiry is resolved and then deleted without delay, unless a longer period is required by law."],
      },
      {
        title: "4. Provision to Third Parties",
        body: ["We do not provide personal information to third parties except with your consent or as required by law."],
      },
      {
        title: "5. Outsourcing and Overseas Transfer",
        body: [
          "We entrust the following processing tasks:",
          "Google LLC (USA): storing and managing inquiries (Google Workspace), visit statistics (Google Tag Manager/Analytics)",
          "Amazon Web Services, Inc.: website hosting and operation",
          "Transferred items: name, email, phone, company, message / When and how: transmitted over the network when an inquiry is submitted / Retention: as in Section 3",
          "If you do not wish your information to be transferred overseas, you may contact us by email (info@ylia.io) or phone instead of the form.",
        ],
      },
      {
        title: "6. Destruction",
        body: ["Personal information is destroyed without delay once the retention period ends or the purpose is achieved. Electronic files are deleted in an unrecoverable manner."],
      },
      {
        title: "7. Your Rights",
        body: ["You may request access, correction, deletion, or suspension of processing of your personal information at any time by contacting the Privacy Officer below."],
      },
      {
        title: "8. Security Measures",
        body: ["We restrict access to personal information, encrypt data in transit (HTTPS), and manage access accounts."],
      },
      {
        title: "9. Cookies",
        body: ["We use cookies for visit statistics. You can refuse cookies in your browser settings without any restriction on using this website."],
      },
      {
        title: "10. Privacy Officer",
        body: ["Name: Choi Jonghoon (CEO)", "Email: info@ylia.io", "Phone: +82-10-9025-5093"],
      },
      {
        title: "11. Remedies",
        body: [
          "For reports or consultations regarding privacy infringement, you may contact:",
          "Personal Information Dispute Mediation Committee: +82-1833-6972 (www.kopico.go.kr)",
          "Personal Information Infringement Report Center: 118 (privacy.kisa.or.kr)",
        ],
      },
      {
        title: "12. Changes to This Policy",
        body: ["This policy applies from the effective date. Any changes will be announced on this website."],
      },
    ],
  },
};
