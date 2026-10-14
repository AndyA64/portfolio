import { JetBrains_Mono, Press_Start_2P } from "next/font/google";
import "./globals.css";
import "./extras.css";
import { site } from "../data/site";

const mono = JetBrains_Mono({ subsets: ["latin"], variable: "--font-mono" });
const pixel = Press_Start_2P({ subsets: ["latin"], weight: "400", variable: "--font-pixel" });

export const metadata = {
  title: `${site.name} · ${site.role}`,
  description: site.tagline,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${mono.variable} ${pixel.variable}`}>
      <body>{children}</body>
    </html>
  );
}
