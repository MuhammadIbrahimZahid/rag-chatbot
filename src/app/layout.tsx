import type { Metadata } from "next";
import { Geist } from "next/font/google";
import { Toaster } from "sonner";
import "./globals.css";

const geist = Geist({
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "ChatGPT Clone",
  description: "AI assistant built with Next.js",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${geist.className} bg-[#212121] text-white`}>
        {children}
        <Toaster position="bottom-center" />
      </body>
    </html>
  );
}
