import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Link from "next/link";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "tarmiiz academy",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav className="nav_style">
          <Link href="/">Home</Link>
          <Link href="/articles">articles</Link>
          <Link href="/posts">posts</Link>
        </nav>
        {children}
      </body>
      {/*can be used for every route in the app folder==ye3ni n7ote 7ejeete mockterka binhome w rahi children tmathil il page */}
    </html>
  );
}
