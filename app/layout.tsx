import type { Metadata } from "next";
import { Cormorant_Garamond, Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600"],
  style: ["normal", "italic"],
  display: "swap",
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const jakarta = Plus_Jakarta_Sans({
  variable: "--font-jakarta",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "DayOff Studio — We Automate the Boring Stuff",
  description:
    "DayOff Studio builds custom agents, automations, and internal tools so you can stop doing repetitive work and get back to building your business.",
  metadataBase: new URL("https://dayoff.studio"),
  openGraph: {
    title: "DayOff Studio — We Automate the Boring Stuff",
    description:
      "DayOff Studio builds custom agents, automations, and internal tools so you can stop doing repetitive work and get back to building your business.",
    url: "https://dayoff.studio",
    siteName: "DayOff Studio",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "DayOff Studio — We Automate the Boring Stuff",
    description:
      "DayOff Studio builds custom agents, automations, and internal tools so you can stop doing repetitive work and get back to building your business.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${cormorant.variable} ${inter.variable} ${jakarta.variable}`}>
      <body className="font-sans">{children}</body>
    </html>
  );
}
