import "~/styles/globals.css";

import { type Metadata } from "next";

import { ClerkProvider } from "@clerk/nextjs";
import { GeistSans } from "geist/font/sans";

import TopNav from "./_components/topnav";

export const metadata: Metadata = {
  title: "T3 Gallery",
  description: "End-to-end simple gallery application based on Create-T3-App",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <ClerkProvider>
      <html lang="en" className={`${GeistSans.variable}`}>
        <body className="flex flex-col gap-4">
          <TopNav />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
