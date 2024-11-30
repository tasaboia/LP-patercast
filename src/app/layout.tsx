import type { Metadata } from "next";
import localFont from "next/font/local";
import { EB_Garamond } from "next/font/google";
import "./globals.css";

const ebGaramond = EB_Garamond({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Patercast",
  description:
    "Descubra um espaço onde você pode se fortalecer como homem e pai. Aqui, você terá acesso a conteúdos transformadores, encontros ao vivo que inspiram e uma rede de homens dedicados a construir famílias sólidas e saudáveis.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${ebGaramond.className} antialiased`}>{children}</body>
    </html>
  );
}
