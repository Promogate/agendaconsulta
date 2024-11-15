import Image from "next/image";
import Link from "next/link";
import { Hind } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "./ui/button";

const hind = Hind({ preload: true, subsets: ["latin"], weight: ["400"] });

const Links: Array<{ name: string; pathname: string; }> = [
  {
    name: "Criar conta grátis",
    pathname: "/cadastro/paciente"
  },
  {
    name: "Entrar",
    pathname: "/entrar"
  }
];

export function Header() {
  return (
    <section className={cn("p-4", hind.className)}>
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="w-[240px] h-[40px]" style={{ position: "relative" }}>
            <Image src="/agenda_consulta.svg" alt="AgendaConsulta logo" fill />
          </div>
        </Link>
        <nav>
          <div className="flex items-center gap-x-4">
            {
              Links.map((link, i) => (
                <Link key={i} href={link.pathname} className="hover:opacity-50 transition-all ease-in-out">
                  {link.name}
                </Link>
              ))
            }
            <Link href="/cadastro/medico">
              <Button className="rounded-sm bg-blue-500 hover:bg-blue-700">
                Você é profissional da saúde?
              </Button>
            </Link>
          </div>
        </nav>
      </div>
    </section>
  );
}