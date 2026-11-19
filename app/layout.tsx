import type { Metadata } from "next";
import Script from 'next/script';
import { Geist } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Crista Institute | Aligarh | NEET, JEE, AMU",
  description:
    "Crista Institute in Aligarh – Expert coaching for NEET, JEE, AMU Class 9th & 11th, and AMU B.Tech. Join thousands of successful rankers.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col">{children}
      <Script id="glen-chat" strategy="afterInteractive">{`
  window.initEmbeddedMessaging = function () {
    try {
      embeddedservice_bootstrap.settings.language = 'en_US';
      embeddedservice_bootstrap.init(
        '00Dca000003wE5h',
        'Glen_Test_Chat',
        'https://infoglen--infoagent.sandbox.my.site.com/ESWGlenTestChat1795102261581',
        { scrt2URL: 'https://infoglen--infoagent.sandbox.my.salesforce-scrt.com' }
      );
    } catch (err) { console.error('Error loading Embedded Messaging: ', err); }
  };
  var s = document.createElement('script');
  s.src = 'https://infoglen--infoagent.sandbox.my.site.com/ESWGlenTestChat1795102261581/assets/js/bootstrap.min.js';
  s.onload = window.initEmbeddedMessaging;
  document.body.appendChild(s);
`}</Script></body>
    </html>
  );
}
