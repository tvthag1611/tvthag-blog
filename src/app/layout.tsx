import "./globals.css";
import BlogLayout from "./_components/BlogLayout";
import type { Settings } from "@tryghost/content-api";
import { use } from "react";
import { getNavigation } from "./_services/ghost-client";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const settings = use(getNavigation());

  return (
    <html className="light" lang="vi">
      <body>
        <BlogLayout setting={settings as Settings}>{children}</BlogLayout>
      </body>
    </html>
  );
}
