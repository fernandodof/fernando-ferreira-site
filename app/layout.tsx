import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider/theme-provider";
import { LanguageProvider } from "@/components/language-provider/language-provider";
import { Header } from "@/components/header/header";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Fernando Ferreira",
  description: "Developer portfolio and resume",
};

// Inline script applied before hydration to prevent theme flash
const themeScript = `
(function() {
  try {
    var saved = localStorage.getItem('theme');
    var prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
    if (saved === 'dark' || (!saved && prefersDark)) {
      document.documentElement.classList.add('dark');
    }
  } catch (e) {}
})();
`;

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased bg-background text-foreground min-h-screen`}
      >
        <ThemeProvider>
          <LanguageProvider>
            <Header />
            <main className="mx-auto max-w-3xl px-4 sm:px-6 py-10">
              {children}
            </main>
          </LanguageProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
