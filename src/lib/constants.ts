import type { ServiceDivision } from "@/types";

/* ── 사업 영역 (구조 데이터: id, badge, color, url) ── */
export const SERVICE_DIVISIONS: ServiceDivision[] = [
  {
    id: "tech",
    name: "기술 서비스",
    badge: "Tech Services",
    description: "",
    services: [
      { name: "SEEPN  공급사 검색 플랫폼", url: "https://seepn.me" },
      { name: "ShapeTest  AI 도형심리 검사", url: "https://shapetest.app" },
    ],
    color: "blue",
  },
  {
    id: "bara-media",
    name: "바라 미디어",
    badge: "BARA MEDIA",
    description: "",
    services: [
      { name: "바라 뉴스  온라인 신문·미디어", url: "https://bara-news.kr" },
      { name: "바라 평생교육원  교육·자격·커뮤니티", url: "https://bara-edu.kr" },
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
  address: "경기도 광명시 오리로 362 창업지원센터 4층",
};

/* ── Google Apps Script ── */
export const GAS_ENDPOINT = process.env.NEXT_PUBLIC_GAS_ENDPOINT ?? "";
