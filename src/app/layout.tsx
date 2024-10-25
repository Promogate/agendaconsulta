import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "AgendaConsulta - Encontre o procedimento médico mais próximo de você",
  description: "O AgendaConsulta é um portal para quem deseja contratar uma consulta médica ou exame médico, e para o profissional que quer atingir novos pacientes",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br">
      <body className="antialiased">
        {children}
      </body>
    </html>
  );
}
