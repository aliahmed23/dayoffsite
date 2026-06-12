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
  title: "DayOff Studio — Work with us",
  description:
    "DayOff Studio builds custom agents, automations, and internal tools so you can stop doing repetitive work and get back to building your business.",
  metadataBase: new URL("https://dayoffstudio.xyz"),
  openGraph: {
    title: "DayOff Studio — Work with us",
    description:
      "DayOff Studio builds custom agents, automations, and internal tools so you can stop doing repetitive work and get back to building your business.",
    url: "https://dayoffstudio.xyz",
    siteName: "DayOff Studio",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://dayoffstudio.xyz/DOmetadata.png",
        width: 1200,
        height: 630,
        alt: "DayOff Studio — Work with us",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "DayOff Studio — Work with us",
    description:
      "DayOff Studio builds custom agents, automations, and internal tools so you can stop doing repetitive work and get back to building your business.",
    images: ["https://dayoffstudio.xyz/DOmetadata.png"],
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
