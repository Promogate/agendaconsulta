import { Header, Hero } from "@/components";
import { cn } from "@/lib/utils";
import { Montserrat } from "next/font/google";
import Image from "next/image";

const montserrat = Montserrat({ preload: true, subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Header />
      <Hero />
      <section>
        <div className="max-w-7xl mx-auto">
          <div className="w-full grid grid-cols-3 gap-x-4">
            <div className="border rounded-md p-6 flex flex-col gap-y-4 justify-center items-center">
              <div className="w-[240px] h-[240px] flex justify-end" style={{ position: "relative" }}>
                <Image src="/undraw_scientist_ft0o.svg" alt="Exames laboratoriais" className="" fill />
              </div>
              <h2 className={cn(montserrat.className, "font-semibold text-lg")}>
                Exames Laboratoriais
              </h2>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
