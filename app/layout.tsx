import { Nunito } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";

const font = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aircnc",
  description: "Find hotel easily",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={font.className}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
