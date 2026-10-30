import { Fraunces, Hanken_Grotesk } from "next/font/google";
import Header from "../components/Header";
import Footer from "../components/Footer";
import WhatsApp from "../components/WhatsApp";
import "./globals.css";

const display = Fraunces({ subsets: ["latin"], variable: "--font-display" });
const body = Hanken_Grotesk({ subsets: ["latin"], variable: "--font-body" });

export const metadata = {
  title: { default: "RJ Developers | Dreamers, luxury in lifestyle", template: "%s | RJ Developers" },
  description: "RJ Developers designs and builds apartments, villas and commercial spaces across Guwahati, Assam.",
  icons: { icon: "/logo-mark.png" },
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${body.variable}`}>
      <body>
        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsApp />
      </body>
    </html>
  );
}
