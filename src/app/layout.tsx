import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Link from "next/link";
import Image from "next/image";
import { siteInfo } from "./config";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Pixel Blight",
  description: "Phantom Bound available now on Steam",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <div className="min-h-screen bg-gradient-to-br from-indigo-950 via-purple-950 to-slate-900 relative overflow-x-clip">
          {/* Global blight atmosphere */}
          <div className="fixed inset-0 pointer-events-none opacity-20">
            <div className="absolute top-1/4 left-1/6 w-32 h-16 bg-purple-500/30 rounded-full blur-xl transform rotate-12"></div>
            <div className="absolute top-1/3 right-1/4 w-24 h-48 bg-yellow-400/20 rounded-full blur-2xl transform -rotate-45"></div>
            <div className="absolute bottom-1/4 left-1/3 w-48 h-24 bg-orange-500/25 rounded-full blur-xl transform rotate-30"></div>
            <div className="absolute top-2/3 right-1/6 w-40 h-20 bg-purple-600/30 rounded-full blur-2xl transform -rotate-12"></div>
            <div className="absolute bottom-1/6 right-2/3 w-28 h-56 bg-pink-500/20 rounded-full blur-xl transform rotate-45"></div>
          </div>

          {/* Global pixelated corruption */}
          <div className="fixed inset-0 pointer-events-none opacity-40">
            <div className="absolute top-20 left-20 w-2 h-2 bg-yellow-400/80 animate-pulse"></div>
            <div className="absolute top-32 right-32 w-3 h-3 bg-purple-500/70 blur-sm"></div>
            <div className="absolute top-1/2 left-16 w-2 h-2 bg-orange-400/60 animate-pulse"></div>
            <div className="absolute bottom-40 right-20 w-4 h-4 bg-purple-400/50 blur-sm"></div>
            <div className="absolute bottom-20 left-1/4 w-2 h-2 bg-yellow-500/70 animate-pulse"></div>
            <div className="absolute top-3/4 right-1/3 w-3 h-3 bg-pink-500/60"></div>
            <div className="absolute top-1/6 left-2/3 w-2 h-2 bg-purple-600/80 blur-sm animate-pulse"></div>
            <div className="absolute bottom-1/3 left-1/2 w-4 h-4 bg-orange-500/40 blur-sm"></div>
          </div>

          {/* Header */}
          <header className="px-4 lg:px-6 h-16 flex items-center backdrop-blur-sm bg-black/30 border-b border-purple-500/30">
            <Link href="/" className="flex items-center space-x-3">
              <Image
                src="/PixelBlightNoBackground.png"
                alt="Pixel Blight Logo"
                height={40}
                width={120}
                className="h-10 drop-shadow-lg object-contain"
              />
            </Link>
            <nav className="ml-auto flex gap-6">
              <Link
                href="#games"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:drop-shadow-lg"
              >
                Games
              </Link>
              <Link
                href="#about"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:drop-shadow-lg"
              >
                About
              </Link>
              <Link
                href="#contact"
                className="text-gray-300 hover:text-yellow-400 transition-all duration-300 hover:drop-shadow-lg"
              >
                Contact
              </Link>
            </nav>
          </header>

          {children}

          {/* Footer */}
          <footer
            id="contact"
            className="py-12 px-4 border-t border-purple-500/30 bg-black/30 backdrop-blur-sm relative"
          >
            {/* Footer blight atmosphere */}
            <div className="absolute top-0 left-1/3 w-48 h-24 bg-purple-500/20 rounded-full blur-xl transform rotate-12"></div>
            <div className="absolute bottom-10 right-1/4 w-32 h-64 bg-yellow-500/15 rounded-full blur-2xl transform -rotate-30"></div>

            {/* Footer corruption */}
            <div className="absolute inset-0 opacity-30">
              <div className="absolute top-8 left-1/4 w-2 h-2 bg-orange-400/70 blur-sm"></div>
              <div className="absolute bottom-8 right-1/3 w-3 h-3 bg-purple-500/60 animate-pulse"></div>
            </div>

            <div className="container mx-auto relative z-10">
              <div className="grid md:grid-cols-3 gap-8">
                <div>
                  <div className="flex items-center space-x-3 mb-4">
                    <Image
                      src="/PixelBlightNoBackground.png"
                      alt="Pixel Blight Logo"
                      width={100}
                      height={32}
                      className="h-8 w-auto drop-shadow-lg"
                    />
                  </div>
                  <p className="text-gray-400 mb-4 drop-shadow-sm">
                    {siteInfo.footerDescription}
                  </p>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4 drop-shadow-lg">
                    Quick Links
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="#games"
                      className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:drop-shadow-lg"
                    >
                      Our Games
                    </Link>
                    <Link
                      href="#about"
                      className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:drop-shadow-lg"
                    >
                      About Us
                    </Link>
                    <Link
                      href="https://impress.games/press-kit/pixel-blight/phantom-bound"
                      className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:drop-shadow-lg"
                    >
                      Press Kit
                    </Link>
                  </div>
                </div>
                <div>
                  <h3 className="text-white font-semibold mb-4 drop-shadow-lg">
                    Connect
                  </h3>
                  <div className="space-y-2">
                    <Link
                      href="https://store.steampowered.com/curator/45502990"
                      className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:drop-shadow-lg"
                    >
                      Steam Publisher Page
                    </Link>
                    <Link
                      href="https://discord.com/invite/cvAu7j69P6"
                      className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:drop-shadow-lg"
                    >
                      Discord Community
                    </Link>
                    <Link
                      href="https://x.com/pixel_blight"
                      className="block text-gray-400 hover:text-yellow-400 transition-all duration-300 hover:drop-shadow-lg"
                    >
                      Twitter
                    </Link>
                  </div>
                </div>
              </div>
              <div className="border-t border-purple-500/30 mt-8 pt-8 text-center text-gray-400">
                <p>
                  &copy; {new Date().getFullYear()} {siteInfo.company}. All
                  rights reserved.
                </p>
              </div>
            </div>
          </footer>
        </div>
      </body>
    </html>
  );
}
