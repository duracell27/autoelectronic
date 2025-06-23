import type { Metadata } from "next";
import { montserrat } from "./fonts/fonts";
import clsx from "clsx";
import "./globals.css";

export const metadata: Metadata = {
  title: "Auto Electronic",
  description: "Auto Electronic",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk">
      <body className={clsx(montserrat.variable, "font-montserrat scroll-smooth")}>
        {children}
      </body>
    </html>
  );
}