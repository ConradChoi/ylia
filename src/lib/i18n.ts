export type Language = "ko" | "en" | "zh" | "ja";

export interface FooterSection {
  title: string;
  links: string[];
}

export interface Translation {
  meta: { title: string; description: string; ogLocale: string };
  nav: { services: string; about: string; contact: string };
  cta: { inquiry: string };
  hero: {
    headline1: string;
    headline2: string;
    company: string;
    sub: string;
    cta_services: string;
    cta_contact: string;
  };
  trust: {
    metrics: Array<{ value: string; label: string }>;
  };
  services: {
    headline1: string;
    headline2: string;
    divisions: Array<{
      name: string;
      description: string;
      services: Array<{ name: string }>;
      visit: string;
    }>;
  };
  about: {
    headline: string;
    sub: string;
    values: Array<{ title: string; description: string }>;
  };
  contact: {
    headline: string;
    sub: string;
    info_title: string;
    fields: {
      name: { label: string; placeholder: string };
      email: { label: string; placeholder: string };
      phone: { label: string; placeholder: string };
      company: { label: string; placeholder: string };
      message: { label: string; placeholder: string };
    };
    consent: string;
    consent_notice: Array<{ label: string; value: string }>;
    consent_alert: string;
    submit: string;
    sending: string;
    success_title: string;
    success_sub: string;
    new_inquiry: string;
    error: string;
    info_labels: { email: string; phone: string; address: string; hours_title: string };
    address_value: string;
    hours: { weekday: string; weekend: string };
  };
  footer: {
    tagline: string;
    copyright: string;
    sections: FooterSection[];
    privacy: string;
    biz_labels: { company: string; ceo: string; reg_no: string; address: string; phone: string; email: string };
  };
}

/* 개인정보 수집·이용 고지 (개인정보보호법 제15조 제2항) */
const CONSENT_NOTICE = {
  ko: [
    { label: "수집 목적", value: "문의 접수 및 답변" },
    { label: "수집 항목", value: "(필수) 이름, 이메일, 문의 내용 / (선택) 연락처, 회사명" },
    { label: "보유 기간", value: "문의 처리 완료 후 1년간 보관 후 파기" },
    { label: "동의 거부", value: "동의를 거부할 수 있으며, 거부 시 문의 접수가 제한됩니다." },
  ],
  en: [
    { label: "Purpose", value: "Receiving and responding to your inquiry" },
    { label: "Items", value: "(Required) name, email, message / (Optional) phone, company" },
    { label: "Retention", value: "Deleted 1 year after the inquiry is resolved" },
    { label: "Refusal", value: "You may refuse, but we cannot accept the inquiry without consent." },
  ],
  zh: [
    { label: "收集目的", value: "受理并回复咨询" },
    { label: "收集项目", value: "（必填）姓名、邮箱、咨询内容 /（选填）电话、公司名称" },
    { label: "保存期限", value: "咨询处理完毕后保存1年，之后销毁" },
    { label: "拒绝同意", value: "您可以拒绝同意，但拒绝后将无法受理咨询。" },
  ],
  ja: [
    { label: "収集目的", value: "お問い合わせの受付および回答" },
    { label: "収集項目", value: "（必須）お名前、メールアドレス、お問い合わせ内容 /（任意）電話番号、会社名" },
    { label: "保有期間", value: "対応完了後1年間保管し、その後破棄" },
    { label: "同意の拒否", value: "同意を拒否できますが、その場合お問い合わせを受け付けできません。" },
  ],
};

const ko: Translation = {
  meta: {
    title: "주식회사 일리아 — 연결이 삶을 살아있게 합니다",
    description:
      "소상공인·개인·기업이 더 잘 살아갈 수 있도록 기술·교육·미디어·출판으로 연결을 만드는 회사입니다.",
    ogLocale: "ko_KR",
  },
  nav: { services: "서비스", about: "회사소개", contact: "문의" },
  cta: { inquiry: "문의하기" },
  hero: {
    headline1: "사람을 이해하고,",
    headline2: "사람을 키웁니다",
    company: "주식회사 일리아",
    sub: "AI 도형심리 검사와 평생교육으로 사람을 이해하고 성장시키며,\n국내외 공급사 연결로 비즈니스를 돕습니다.\n\nYour Life Is Alive",
    cta_services: "서비스 살펴보기",
    cta_contact: "문의하기",
  },
  trust: {
    metrics: [
      { value: "2,000개+", label: "등록 공급사" },
      { value: "6,165명+", label: "교육 이수자" },
      { value: "12,000건+", label: "검사 분석 완료" },
      { value: "3개 지역", label: "교육 운영 지역" },
    ],
  },
  services: {
    headline1: "기술·교육·미디어·출판으로",
    headline2: "연결을 만드는 회사",
    divisions: [
      {
        name: "기술 서비스",
        description: "데이터와 AI로 비즈니스를 연결합니다",
        services: [
          { name: "ShapeTest  AI 도형심리 검사" },
          { name: "SEEPN  공급사 검색 플랫폼" },
          { name: "FKP  해외 바이어-국내 공급사 연결" },
        ],
        visit: "방문하기",
      },
      {
        name: "바라 미디어",
        description: "지식·정보·교육으로 사람과 세상을 연결합니다",
        services: [
          { name: "바라 평생교육원  교육·자격·커뮤니티" },
          { name: "바라 뉴스  온라인 신문·미디어" },
        ],
        visit: "방문하기",
      },
      {
        name: "트루스앤미",
        description: "이야기의 힘으로 독자와 세상을 연결합니다",
        services: [
          { name: "도서 출판 및 기획" },
          { name: "콘텐츠 제작·배급" },
        ],
        visit: "방문하기",
      },
    ],
  },
  about: {
    headline: "우리는",
    sub: "소상공인·개인·기업이 더 잘 살아갈 수 있도록\n기술과 연결로 함께합니다",
    values: [
      { title: "연결", description: "소상공인·개인·기업이 연결될 때 더 잘 살아갈 수 있습니다." },
      { title: "혁신", description: "AI 기술로 일상의 문제를 새롭게 풀어나갑니다." },
      { title: "신뢰", description: "투명하고 신뢰할 수 있는 서비스를 만들어갑니다." },
      { title: "성장", description: "고객과 함께 배우고 성장하는 파트너입니다." },
    ],
  },
  contact: {
    headline: "문의",
    sub: "궁금한 점이 있으시면 언제든 연락주세요.\n영업일 기준 1일 이내 답변드리겠습니다.",
    info_title: "연락처 정보",
    fields: {
      name: { label: "이름", placeholder: "홍길동" },
      email: { label: "이메일", placeholder: "email@company.com" },
      phone: { label: "연락처", placeholder: "010-0000-0000" },
      company: { label: "회사명", placeholder: "주식회사 ○○" },
      message: { label: "문의 내용", placeholder: "문의 내용을 입력해주세요." },
    },
    consent: "문의를 위한 개인정보 수집 및 이용에 동의합니다.",
    consent_notice: CONSENT_NOTICE.ko,
    consent_alert: "개인정보 수집 및 이용에 동의해주세요.",
    submit: "문의 보내기",
    sending: "전송 중...",
    success_title: "문의가 접수되었습니다!",
    success_sub: "영업일 기준 1일 이내 답변드리겠습니다.",
    new_inquiry: "새 문의 작성",
    error: "전송에 실패했습니다. 잠시 후 다시 시도해주세요.",
    info_labels: { email: "이메일", phone: "전화번호", address: "주소", hours_title: "운영 시간" },
    address_value: "경기도 광명시 오리로 362 4층",
    hours: { weekday: "평일 09:00 - 18:00", weekend: "주말 휴무" },
  },
  footer: {
    tagline: "연결을 만드는 회사, 주식회사 일리아",
    copyright: "© 2026 주식회사 일리아. All rights reserved.",
    sections: [
      { title: "기술 서비스", links: ["ShapeTest", "SEEPN", "FKP"] },
      { title: "바라 미디어", links: ["바라 평생교육원", "바라 뉴스"] },
      { title: "트루스앤미", links: ["출판 서비스"] },
      { title: "회사", links: ["회사소개", "문의하기"] },
    ],
    privacy: "개인정보처리방침",
    biz_labels: { company: "상호", ceo: "대표자", reg_no: "사업자등록번호", address: "주소", phone: "연락처", email: "이메일" },
  },
};

const en: Translation = {
  meta: {
    title: "YLIA Co., Ltd. — Your Life Is Alive",
    description:
      "A company creating connections through technology, education, media, and publishing so small businesses, individuals, and enterprises can live better.",
    ogLocale: "en_US",
  },
  nav: { services: "Services", about: "About", contact: "Contact" },
  cta: { inquiry: "Inquire" },
  hero: {
    headline1: "Understanding people.",
    headline2: "Growing people.",
    company: "YLIA Co., Ltd.",
    sub: "AI shape-psychology assessment and lifelong education,\nplus supplier matching that connects businesses in Korea and worldwide.\n\nYour Life Is Alive",
    cta_services: "Explore Services",
    cta_contact: "Contact Us",
  },
  trust: {
    metrics: [
      { value: "2,000+", label: "Registered Suppliers" },
      { value: "6,165+", label: "Training Completions" },
      { value: "12,000+", label: "Assessments Completed" },
      { value: "3 Regions", label: "Education Regions" },
    ],
  },
  services: {
    headline1: "Tech · Education · Media · Publishing",
    headline2: "A company that creates connections",
    divisions: [
      {
        name: "Tech Services",
        description: "Connecting businesses through data and AI",
        services: [
          { name: "ShapeTest  AI Shape Psychology Test" },
          { name: "SEEPN  Supplier Search Platform" },
          { name: "FKP  Connecting Global Buyers with Korean Suppliers" },
        ],
        visit: "Visit",
      },
      {
        name: "BARA Media",
        description: "Connecting people and the world through knowledge, information, and education",
        services: [
          { name: "BARA Lifelong Education  Education · Certification · Community" },
          { name: "BARA News  Online Newspaper & Media" },
        ],
        visit: "Visit",
      },
      {
        name: "TRUTHNME",
        description: "Connecting readers and the world through the power of stories",
        services: [
          { name: "Book Publishing & Planning" },
          { name: "Content Production & Distribution" },
        ],
        visit: "Visit",
      },
    ],
  },
  about: {
    headline: "Who We Are",
    sub: "We stand alongside small businesses, individuals, and enterprises\nthrough technology and connection",
    values: [
      { title: "Connection", description: "When small businesses, individuals, and companies connect, life gets better." },
      { title: "Innovation", description: "We solve everyday problems in new ways with AI technology." },
      { title: "Trust", description: "We build transparent and trustworthy services." },
      { title: "Growth", description: "We are a partner that learns and grows together with our customers." },
    ],
  },
  contact: {
    headline: "Contact",
    sub: "Feel free to reach out anytime.\nWe will respond within 1 business day.",
    info_title: "Contact Information",
    fields: {
      name: { label: "Name", placeholder: "John Doe" },
      email: { label: "Email", placeholder: "email@company.com" },
      phone: { label: "Phone", placeholder: "+82-10-0000-0000" },
      company: { label: "Company", placeholder: "Company Name" },
      message: { label: "Message", placeholder: "Please enter your inquiry." },
    },
    consent: "I agree to the collection and use of personal information for inquiries.",
    consent_notice: CONSENT_NOTICE.en,
    consent_alert: "Please agree to the collection and use of personal information.",
    submit: "Send Inquiry",
    sending: "Sending...",
    success_title: "Your inquiry has been received!",
    success_sub: "We will respond within 1 business day.",
    new_inquiry: "New Inquiry",
    error: "Failed to send. Please try again later.",
    info_labels: { email: "Email", phone: "Phone", address: "Address", hours_title: "Business Hours" },
    address_value: "4F, 362 Ori-ro, Gwangmyeong-si, Gyeonggi-do, Republic of Korea",
    hours: { weekday: "Weekdays 09:00 - 18:00", weekend: "Closed on weekends" },
  },
  footer: {
    tagline: "A company that creates connections, YLIA Co., Ltd.",
    copyright: "© 2026 YLIA Co., Ltd. All rights reserved.",
    sections: [
      { title: "Tech Services", links: ["ShapeTest", "SEEPN", "FKP"] },
      { title: "BARA Media", links: ["BARA Lifelong Education", "BARA News"] },
      { title: "TRUTHNME", links: ["Publishing Services"] },
      { title: "Company", links: ["About", "Contact"] },
    ],
    privacy: "Privacy Policy",
    biz_labels: { company: "Company", ceo: "CEO", reg_no: "Business Reg. No.", address: "Address", phone: "Phone", email: "Email" },
  },
};

const zh: Translation = {
  meta: {
    title: "YLIA Co., Ltd. — 连接让生活充满活力",
    description:
      "一家通过技术、教育、媒体和出版为个体经营者、个人和企业创造连接，让他们生活得更好的公司。",
    ogLocale: "zh_CN",
  },
  nav: { services: "服务", about: "关于我们", contact: "联系" },
  cta: { inquiry: "联系我们" },
  hero: {
    headline1: "理解人，",
    headline2: "成就人。",
    company: "YLIA Co., Ltd.",
    sub: "以AI图形心理测试与终身教育理解人、成就人，\n并通过连接韩国与海外的供应商对接服务助力企业发展。\n\nYour Life Is Alive",
    cta_services: "探索服务",
    cta_contact: "联系我们",
  },
  trust: {
    metrics: [
      { value: "2,000家+", label: "注册供应商" },
      { value: "6,165名+", label: "培训完成人数" },
      { value: "12,000件+", label: "完成检测分析" },
      { value: "3个地区", label: "教育运营地区" },
    ],
  },
  services: {
    headline1: "技术·教育·媒体·出版",
    headline2: "创造连接的公司",
    divisions: [
      {
        name: "技术服务",
        description: "通过数据与AI连接商业",
        services: [
          { name: "ShapeTest  AI图形心理测试" },
          { name: "SEEPN  供应商搜索平台" },
          { name: "FKP  连接海外买家与韩国供应商" },
        ],
        visit: "访问",
      },
      {
        name: "BARA媒体",
        description: "通过知识、信息与教育连接人与世界",
        services: [
          { name: "BARA终身教育院  教育·资格·社区" },
          { name: "BARA新闻  在线报纸与媒体" },
        ],
        visit: "访问",
      },
      {
        name: "TRUTHNME",
        description: "通过故事的力量连接读者与世界",
        services: [
          { name: "图书出版与策划" },
          { name: "内容制作与发行" },
        ],
        visit: "访问",
      },
    ],
  },
  about: {
    headline: "我们是谁",
    sub: "帮助中小企业、个人与大企业更好地生活，\n通过技术与连接同行",
    values: [
      { title: "连接", description: "当中小企业、个人与企业相互连接时，生活会变得更好。" },
      { title: "创新", description: "我们用AI技术以全新方式解决日常问题。" },
      { title: "信任", description: "我们打造透明可信赖的服务。" },
      { title: "成长", description: "我们是与客户共同学习、共同成长的伙伴。" },
    ],
  },
  contact: {
    headline: "联系我们",
    sub: "如有任何疑问，请随时与我们联系。\n我们将在1个工作日内回复。",
    info_title: "联系信息",
    fields: {
      name: { label: "姓名", placeholder: "张伟" },
      email: { label: "邮箱", placeholder: "email@company.com" },
      phone: { label: "电话", placeholder: "+82-10-0000-0000" },
      company: { label: "公司名称", placeholder: "○○公司" },
      message: { label: "咨询内容", placeholder: "请输入您的咨询内容。" },
    },
    consent: "我同意为咨询目的收集和使用个人信息。",
    consent_notice: CONSENT_NOTICE.zh,
    consent_alert: "请同意收集和使用个人信息。",
    submit: "发送咨询",
    sending: "发送中...",
    success_title: "您的咨询已收到！",
    success_sub: "我们将在1个工作日内回复。",
    new_inquiry: "新咨询",
    error: "发送失败，请稍后再试。",
    info_labels: { email: "邮箱", phone: "电话", address: "地址", hours_title: "营业时间" },
    address_value: "京畿道光明市梧里路362, 4楼",
    hours: { weekday: "工作日 09:00 - 18:00", weekend: "周末休息" },
  },
  footer: {
    tagline: "创造连接的公司，YLIA Co., Ltd.",
    copyright: "© 2026 YLIA Co., Ltd. All rights reserved.",
    sections: [
      { title: "技术服务", links: ["ShapeTest", "SEEPN", "FKP"] },
      { title: "BARA媒体", links: ["BARA终身教育院", "BARA新闻"] },
      { title: "TRUTHNME", links: ["出版服务"] },
      { title: "公司", links: ["关于我们", "联系我们"] },
    ],
    privacy: "隐私政策",
    biz_labels: { company: "公司名称", ceo: "代表", reg_no: "营业执照号", address: "地址", phone: "电话", email: "邮箱" },
  },
};

const ja: Translation = {
  meta: {
    title: "YLIA Co., Ltd. — つながりが人生を生き生きとさせる",
    description:
      "小規模事業者・個人・企業がより良く生きられるよう、技術・教育・メディア・出版でつながりを作る会社です。",
    ogLocale: "ja_JP",
  },
  nav: { services: "サービス", about: "会社案内", contact: "お問い合わせ" },
  cta: { inquiry: "お問い合わせ" },
  hero: {
    headline1: "人を理解し、",
    headline2: "人を育てる。",
    company: "YLIA Co., Ltd.",
    sub: "AI図形心理検査と生涯教育で人を理解し成長を支え、\n国内外のサプライヤーマッチングでビジネスを後押しします。\n\nYour Life Is Alive",
    cta_services: "サービスを見る",
    cta_contact: "お問い合わせ",
  },
  trust: {
    metrics: [
      { value: "2,000社+", label: "登録サプライヤー" },
      { value: "6,165名+", label: "研修修了者" },
      { value: "12,000件+", label: "検査分析完了" },
      { value: "3地域", label: "教育運営地域" },
    ],
  },
  services: {
    headline1: "技術·教育·メディア·出版で",
    headline2: "つながりを創る会社",
    divisions: [
      {
        name: "テクノロジーサービス",
        description: "データとAIでビジネスをつなぎます",
        services: [
          { name: "ShapeTest  AI図形心理検査" },
          { name: "SEEPN  サプライヤー検索プラットフォーム" },
          { name: "FKP  海外バイヤーと韓国サプライヤーをつなぐ" },
        ],
        visit: "サイトへ",
      },
      {
        name: "BARAメディア",
        description: "知識・情報・教育で人と世界をつなぎます",
        services: [
          { name: "BARA 生涯学習院  教育・資格・コミュニティ" },
          { name: "BARA ニュース  オンライン新聞・メディア" },
        ],
        visit: "サイトへ",
      },
      {
        name: "TRUTHNME",
        description: "物語の力で読者と世界をつなぎます",
        services: [
          { name: "書籍出版・企画" },
          { name: "コンテンツ制作・配給" },
        ],
        visit: "サイトへ",
      },
    ],
  },
  about: {
    headline: "私たちは",
    sub: "中小企業・個人・企業がより豊かに生きられるよう、\n技術とつながりで共に歩みます",
    values: [
      { title: "つながり", description: "中小企業・個人・企業がつながるとき、より豊かな生活が実現します。" },
      { title: "革新", description: "AI技術で日常の課題を新しい方法で解決します。" },
      { title: "信頼", description: "透明で信頼できるサービスを作り続けます。" },
      { title: "成長", description: "お客様とともに学び、成長するパートナーです。" },
    ],
  },
  contact: {
    headline: "お問い合わせ",
    sub: "ご不明な点はお気軽にお問い合わせください。\n営業日1日以内にご返答いたします。",
    info_title: "連絡先情報",
    fields: {
      name: { label: "お名前", placeholder: "山田太郎" },
      email: { label: "メールアドレス", placeholder: "email@company.com" },
      phone: { label: "電話番号", placeholder: "+82-10-0000-0000" },
      company: { label: "会社名", placeholder: "株式会社○○" },
      message: { label: "お問い合わせ内容", placeholder: "お問い合わせ内容をご入力ください。" },
    },
    consent: "お問い合わせのための個人情報収集・利用に同意します。",
    consent_notice: CONSENT_NOTICE.ja,
    consent_alert: "個人情報収集・利用への同意が必要です。",
    submit: "送信する",
    sending: "送信中...",
    success_title: "お問い合わせを受け付けました！",
    success_sub: "営業日1日以内にご返答いたします。",
    new_inquiry: "新しいお問い合わせ",
    error: "送信に失敗しました。しばらくしてからお試しください。",
    info_labels: { email: "メールアドレス", phone: "電話番号", address: "住所", hours_title: "営業時間" },
    address_value: "京畿道光明市梧里路362, 4階",
    hours: { weekday: "平日 09:00 - 18:00", weekend: "土日祝休み" },
  },
  footer: {
    tagline: "つながりを創る会社、YLIA Co., Ltd.",
    copyright: "© 2026 YLIA Co., Ltd. All rights reserved.",
    sections: [
      { title: "テクノロジーサービス", links: ["ShapeTest", "SEEPN", "FKP"] },
      { title: "BARAメディア", links: ["BARA生涯学習院", "BARAニュース"] },
      { title: "TRUTHNME", links: ["出版サービス"] },
      { title: "会社", links: ["会社案内", "お問い合わせ"] },
    ],
    privacy: "プライバシーポリシー",
    biz_labels: { company: "商号", ceo: "代表者", reg_no: "事業者登録番号", address: "所在地", phone: "電話番号", email: "メール" },
  },
};

export const translations: Record<Language, Translation> = { ko, en, zh, ja };
