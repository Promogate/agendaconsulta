import Image from "next/image";

export default function Page() {
  return (
    <main>
      <section className="grid md:grid-cols-2 h-screen w-full">
        <div>

        </div>
        <div className="bg-blue-400 grid h-screen w-full place-content-center">
          <div className="relative xl:w-[640px] xl:h-[640px]">
            <Image src="./undraw_doctor_kw-5-l.svg" alt="Login administrativo" fill/>
          </div>
        </div>
      </section>
    </main>
  );
}