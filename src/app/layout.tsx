import type {Metadata} from "next";
import {Inter} from "next/font/google";
import "./globals.scss";
import {cn} from "@/lib/utils";
import NavBar from "@/components/NavBar";
import Providers from "@/components/Providers";
import {Toaster} from "sonner";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "Pixel Craft Hub",
  description: "Pixel Craft Hub for selling and buying digital products",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body
        className={cn("relative h-full font-sans antialiased", inter.className)}
      >
        <main className="relative flex flex-col min-h-screen">
          <Providers>
            <NavBar />
            <div className="flex-grow flex-1">{children}</div>
          </Providers>
        </main>
        <Toaster position="top-center" richColors />
      </body>
    </html>
  );
}
