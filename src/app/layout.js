import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./(routes)/components/navbar";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sri Siddha Shiva Guru",
  description: "Sri Siddharudh Math Bidar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-[#fff9f0]`}
      > <div>    <NavBar/></div>
 <div className="pt-16">       {children}</div>
      </body>
    </html>
  );
}
