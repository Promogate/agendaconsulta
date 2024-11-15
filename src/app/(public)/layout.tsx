import { Header } from "@/components";
import { ReactNode } from "react";

export default function Layout({ children }: { children: ReactNode; }) {
  return (
    <div>
      <Header />
      {children}
    </div>
  );
}