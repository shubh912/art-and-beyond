// app/layout.tsx
import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google"; // Added Serif font for elegance
import "./globals.css";
import { ReactLenis } from "@studio-freight/react-lenis";

const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });
const playfair = Playfair_Display({ subsets: ["latin"], variable: "--font-playfair" });

export const metadata: Metadata = {
  title: "Art & Beyond | Immersive Creative Experience",
  description: "Join curated art workshops, view our gallery, and experience creativity beyond boundaries.",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${playfair.variable} bg-stone-950 text-stone-100 antialiased font-sans`}>
        <ReactLenis root>
          {children}
        </ReactLenis>
      </body>
    </html>
  );
}
