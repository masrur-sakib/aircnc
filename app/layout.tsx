import { Nunito } from "next/font/google";
import "./globals.css";
import type { Metadata } from "next";
import Navbar from "./components/Navbar/Navbar";
import Modal from "./components/Modals/Modal";

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
        <Modal title="Login Modal" isOpen actionLabel="Submit" />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
