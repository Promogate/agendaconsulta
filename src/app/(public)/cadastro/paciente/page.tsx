import { ProfessionalRegistration } from "@/components/forms";
import { cn } from "@/lib/utils";
import { Hind, Montserrat } from "next/font/google";

const montserrat = Montserrat({ preload: true, subsets: ["latin"] });
const hind = Hind({ preload: true, subsets: ["latin"], weight: ["400"] });

export default function Page() {
  return (
    <main className={cn(hind.className, "py-16")}>
      <div className="max-w-7xl mx-auto space-y-4">
        <h1 className={cn(montserrat.className, "text-2xl font-semibold")}>
          Você é um profissional da saúde?
        </h1>
        <ProfessionalRegistration />
      </div>
    </main>
  )
}