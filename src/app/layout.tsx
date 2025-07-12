import type { Metadata } from "next";
import { Noto_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const notoSans = Noto_Sans({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-noto-sans",
});

export const metadata: Metadata = {
  title: "TechFlow Solutions - 혁신적인 IT 솔루션",
  description: "최첨단 기술과 창의적 아이디어로 비즈니스의 새로운 가능성을 열어가는 혁신적인 IT 솔루션 파트너, TechFlow Solutions",
  keywords: ["IT 솔루션", "웹 개발", "모바일 앱", "클라우드 인프라", "AI/ML", "TechFlow Solutions"],
  authors: [{ name: "TechFlow Solutions" }],
  creator: "TechFlow Solutions",
  publisher: "TechFlow Solutions",
  openGraph: {
    title: "TechFlow Solutions - 혁신적인 IT 솔루션",
    description: "최첨단 기술과 창의적 아이디어로 비즈니스의 새로운 가능성을 열어가는 혁신적인 IT 솔루션 파트너",
    url: "https://techflow.solutions",
    siteName: "TechFlow Solutions",
    images: [
      {
        url: "/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "TechFlow Solutions - 혁신적인 IT 솔루션",
      },
    ],
    locale: "ko_KR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "TechFlow Solutions - 혁신적인 IT 솔루션",
    description: "최첨단 기술과 창의적 아이디어로 비즈니스의 새로운 가능성을 열어가는 혁신적인 IT 솔루션 파트너",
    images: ["/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body
        className={`${notoSans.variable} font-sans antialiased`}
      >
        <Header />
        <main className="pt-16">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
