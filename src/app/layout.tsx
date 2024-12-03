import type { Metadata } from "next";
import "./globals.css";
import { Hind } from "next/font/google";
import { cn } from "@/lib/utils";
import Providers from "./Providers";

export const metadata: Metadata = {
  title: "AgendaConsulta - Encontre o procedimento médico mais próximo de você",
  description: "O AgendaConsulta é um portal para quem deseja contratar uma consulta médica ou exame médico, e para o profissional que quer atingir novos pacientes",
};

const hind = Hind({ preload: true, subsets: ["latin"], weight: ["400"] });

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className={cn(hind.className, "antialiased")}>
        <Providers>
          {children}
        </Providers>
      </body>
    </html>
  );
}
