import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aaron Stanley King - Blog",
  description: "A modern blog about web development, cloud computing, and technology built with Next.js, Storybook, and Azure Static Web Apps.",
  keywords: ["blog", "web development", "nextjs", "azure", "storybook", "typescript"],
  authors: [{ name: "Aaron Stanley King" }],
  openGraph: {
    title: "Aaron Stanley King - Blog",
    description: "A modern blog about web development, cloud computing, and technology",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>
        {children}
      </body>
    </html>
  );
}
