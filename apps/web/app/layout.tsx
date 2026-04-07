import { AuthProvider } from "@workspace-wellbeing/auth";
import {
  getAppVariant,
  getAppVariantDefinition,
} from "@workspace-wellbeing/platform";
import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";

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
  title: "Workspace Wellbeing",
  description:
    "Next.js monorepo boilerplate with platform shell, auth scaffolding, and TechSupport module.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const appVariant = getAppVariant();
  const appVariantDefinition = getAppVariantDefinition(appVariant);

  return (
    <html
      lang="en"
      data-app="web"
      data-app-variant={appVariant}
      className={`${geistSans.variable} ${geistMono.variable} min-h-full antialiased`}
    >
      <body
        className="min-h-full"
        data-brand={appVariantDefinition.marketingLabel}
      >
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
