import { useMutation } from "@tanstack/react-query";
import { z } from "zod";
import { schema } from "../_components";
import { api } from "@/lib/api";

const fetchAdministratorLogin = async (input: z.infer<typeof schema>) => {
  const { data } = await api.post("/", input, { authorization: true });
  return data;
}

export const useAdministratorLogin = () => {
  return useMutation({
    mutationKey: ["login_administrator"],
    mutationFn: async (input: z.infer<typeof schema>) => await fetchAdministratorLogin(input)
  })
}