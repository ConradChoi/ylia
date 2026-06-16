import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "주식회사 일리아 — 연결이 삶을 살아있게 합니다",
  description:
    "소상공인·개인·기업이 더 잘 살아갈 수 있도록 기술·교육·미디어·출판으로 연결을 만드는 회사입니다.",
  keywords: ["일리아", "YLIA", "SEEPN", "ShapeTest", "바라미디어", "트루스앤미"],
  openGraph: {
    title: "주식회사 일리아",
    description: "연결이 삶을 살아있게 합니다 — Your Life Is Alive",
    url: "https://ylia.io",
    siteName: "YLIA",
    locale: "ko_KR",
    type: "website",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="ko"
      className={`${geistSans.variable} ${geistMono.variable} scroll-smooth antialiased`}
    >
      <body className="bg-white text-[var(--color-text)]">
        <Script
          id="gtm"
          strategy="afterInteractive"
          dangerouslySetInnerHTML={{
            __html: `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','GTM-5GZFXLXB');`,
          }}
        />
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-5GZFXLXB"
            height="0"
            width="0"
            style={{ display: "none", visibility: "hidden" }}
          />
        </noscript>
        {children}
      </body>
    </html>
  );
}
