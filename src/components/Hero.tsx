import { cn } from "@/lib/utils";
import { Hind, Montserrat } from "next/font/google";
import Image from "next/image";
import { FindLocationAndEspeciality } from "./forms";

const hind = Hind({ preload: true, subsets: ["latin"], weight: ["400"] });
const montserrat = Montserrat({ preload: true, subsets: ["latin"] });

export function Hero() {
  return (
    <section className={cn(hind.className, "xl:h-[50vh]")}>
      <div className="max-w-7xl py-4 mx-auto grid xl:grid-cols-2 items-center">
        <div className="gap-y-4 content-center h-full space-y-32">
          <div className="space-y-4">
            <h1 className={cn(montserrat.className, "text-3xl font-semibold")}>
              Agende agora sua consulta ou exame
            </h1>
            <p className="font-normal">
              Encontre o médico, especialidade ou exame mais próximo de você.
            </p>
          </div>
          <FindLocationAndEspeciality />
        </div>
        <div className="w-[640px] h-[512px] flex justify-end" style={{ position: "relative" }}>
          <Image src="/undraw_medicine_b-1-ol.svg" alt="AgendaConsulta Médicos" className="" fill />
        </div>
      </div>
    </section>
  );
}