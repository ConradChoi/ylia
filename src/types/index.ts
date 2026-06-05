/* ── 사이트 공통 타입 ── */

export interface NavItem {
  label: string;
  href: string;
}

export interface ServiceDivision {
  id: 'tech' | 'bara-media' | 'truthnme';
  name: string;
  badge: string;
  description: string;
  services: { name: string; url: string }[];
  color: 'blue' | 'orange' | 'indigo';
}

export interface ValueItem {
  title: string;
  description: string;
  icon: string;
}

export interface TrustMetric {
  value: string;
  label: string;
}

export interface ContactForm {
  name: string;
  email: string;
  phone: string;
  company: string;
  message: string;
  consent: boolean;
}
