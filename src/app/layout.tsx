import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from '@/components/theme-provider';
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaron Stanley King - Blog",
  description: "A modern blog about web development, cloud computing, and technology built with Next.js, Storybook, and Azure Static Web Apps.",
  keywords: ["blog", "web development", "nextjs", "azure", "storybook", "typescript"],
  authors: [{ name: "Aaron Stanley King" }],
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Aaron Stanley King - Blog",
    description: "A modern blog about web development, cloud computing, and technology",
    type: "website",
  },
  alternates: {
    types: {
      'application/rss+xml': [{ url: '/rss.xml', title: 'Aaron Stanley King - Blog RSS Feed' }],
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} antialiased`}>
        <ThemeProvider
          defaultTheme="light"
          enableSystem
          storageKey="aaronstanleyking-theme"
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
