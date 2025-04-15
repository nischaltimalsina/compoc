import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { SidebarNavigation } from "@/components/layout/sidebar";
import { TopbarNavigation } from "@/components/layout/topbar";
import { FrameworkProvider } from "@/components/context/framework-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "GRC Platform",
  description: "Governance, Risk, and Compliance Management Platform",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <FrameworkProvider>
          <div className="flex h-screen bg-gray-50">
            {/* Sidebar */}
            <SidebarNavigation />

            {/* Main Content */}
            <div className="flex-1 overflow-auto">
              {/* Top Navigation */}
              <TopbarNavigation />

              {/* Main Content Area */}
              <div className="p-6">
                {children}
              </div>
            </div>
          </div>
        </FrameworkProvider>
      </body>
    </html>
  );
}
