import toast from "react-hot-toast";
import { useMutation } from "@tanstack/react-query";

import { api } from "@/lib/api";
import { setSession } from "@/lib/auth";
import AuthenticateAdministratorUseCase from "@/applicatioon/use-cases/AuthenticateAdministrator";
import { useRouter } from "next/navigation";

const authenticateAdministratorUseCase = new AuthenticateAdministratorUseCase(api);

type Input = { email: string; password: string; };

export const useAdministratorLogin = () => {
  const router = useRouter();

  return useMutation({
    mutationKey: ["login_administrator"],
    mutationFn: async (input: Input) => await authenticateAdministratorUseCase.execute(input),
    onSuccess: async (data) => {
      await setSession(data.token);
      toast.success("Logado com sucesso!", { duration: 2000 });
      router.push("/dashboard")
    },
    onError: (error: any) => {
      toast.error(error.response.data.message, { duration: 2000 });
    }
  });
}