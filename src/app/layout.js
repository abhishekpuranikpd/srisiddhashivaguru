import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import NavBar from "./(routes)/components/navbar";
import Footer from "./(routes)/components/footer";

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
      >
        <div>
          <NavBar />
        </div>
        <div className="pt-16">
          {children}
          <Footer />
        </div>
        {/* Floating Button */}
        <a
          href="/pravachana"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-[#FF0000] text-white px-4 py-2 rounded-full flex items-center gap-2 animate-blink"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="w-5 h-5"
          >
            <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
            <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
          </svg>
          Watch Pravachana
        </a>
      </body>
    </html>
  );
}