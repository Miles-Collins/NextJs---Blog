import Navbar from "@/components/navbar/Navbar";
import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import MyProfilePicture from "@/components/images/MyProfilePicture";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "My blog",
  description: "Blog Page for Miles Collins",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className="dark:bg-slate-800">
        <Navbar />
        <MyProfilePicture />
        {children}
      </body>
    </html>
  );
}
