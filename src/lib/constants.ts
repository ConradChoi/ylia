import type { ServiceDivision } from "@/types";

/* ── 사업 영역 (구조 데이터: id, badge, color, url) ── */
export const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: "tech",
    name: "기술 서비스",
    badge: "Tech Services",
    description: "",
    services: [
      { name: "ShapeTest  AI 도형심리 검사", url: "https://shapetest.app" },
      { name: "SEEPN  공급사 검색 플랫폼", url: "https://seepn.me" },
      { name: "FKP  해외 바이어-국내 공급사 연결", url: "https://findkoreanpartners.com" },
    ],
    color: "blue",
  },
  {
    id: "bara-media",
    name: "바라 미디어",
    badge: "BARA MEDIA",
    description: "",
    services: [
      { name: "바라 평생교육원  교육·자격·커뮤니티", url: "https://bara-edu.kr" },
      { name: "바라 뉴스  온라인 신문·미디어", url: "https://bara-news.kr" },
    ],
    color: "orange",
  },
  {
    id: "truthnme",
    name: "트루스앤미",
    badge: "TRUTHNME",
    description: "",
    services: [
      { name: "도서 출판 및 기획", url: "https://truthnme.com" },
      { name: "콘텐츠 제작·배급", url: "https://truthnme.com" },
    ],
    color: "indigo",
  },
];

/* ── 연락처 (번역 불필요 데이터) ── */
export const CONTACT_INFO = {
  email: "info@ylia.io",
  phone: "+82-10-9025-5093",
  address: "경기도 광명시 오리로 362 4층",
};

/* ── 사업자 정보 (한국어 화면은 ko, 그 외 언어는 en) ── */
export const BUSINESS_REG_NO = "832-86-03446";

export const BUSINESS_INFO = {
  ko: {
    company: "주식회사 일리아",
    ceo: "최종훈",
    address: "경기도 광명시 오리로 362 4층",
  },
  en: {
    company: "YLIA Co., Ltd.",
    ceo: "Choi Jonghoon",
    address: "4F, 362 Ori-ro, Gwangmyeong-si, Gyeonggi-do, Republic of Korea",
  },
};

/* ── Google Apps Script ── */
export const GAS_ENDPOINT = process.env.NEXT_PUBLIC_GAS_ENDPOINT ?? "";
