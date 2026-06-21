import type { Metadata } from "next";

import "./css/globals.css";

export const metadata: Metadata = {
  title: "Vistos Prime",
  description: "Projeto reiniciado.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body>{children}</body>
    </html>
  );
}
