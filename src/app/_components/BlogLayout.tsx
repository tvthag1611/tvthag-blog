"use client";
import Footer from "./Footer";
import Header from "./Header";
import { ThemeProvider } from "next-themes";
import type { Settings } from "@tryghost/content-api";
function BlogLayout({
  setting,
  children,
}: {
  setting: Settings;
  children: React.ReactNode;
}) {
  return (
    <ThemeProvider attribute="class">
      <Header setting={setting} />
      {children}
      <Footer setting={setting} />
    </ThemeProvider>
  );
}
export default BlogLayout;
