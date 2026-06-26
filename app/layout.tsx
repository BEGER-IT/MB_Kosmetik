import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Lumière Beauty | Premium Beauty Salon",
  description: "Ihr exklusiver Beauty Salon — Haar-Laser, Skin Care, Zahn-Bleaching und mehr.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="de">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </head>
      <body>{children}</body>
    </html>
  );
}
