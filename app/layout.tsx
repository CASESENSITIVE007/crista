import type { Metadata } from "next";
import Script from 'next/script';
import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const poppins = Poppins({
  variable: "--font-poppins",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: "Salesforce Consulting & AI Implementation Experts | Infoglen",
  description:
    "Infoglen is a Salesforce Crest Consulting Partner delivering Salesforce implementation, Agentforce and AI solutions across Sales, Service, Marketing, Revenue and Experience Cloud.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} ${poppins.variable} h-full antialiased`}>
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
