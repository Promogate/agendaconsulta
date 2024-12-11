"use client";

import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAdministratorLogin } from "../../../actions/useAdministratorLogin";
import { zodResolver } from "@hookform/resolvers/zod";

export const schema = z.object({
  email: z.string({ required_error: "Email é obrigatório" }).email("Insira um email válido"),
  password: z.string({ required_error: "Senha é obrigatória" }).min(6, "A senha deve ter no mínimo 6 caracteres")
});

export function LoginForm() {
  const form = useForm<z.infer<typeof schema>>({
    resolver: zodResolver(schema),
    defaultValues: {
      email: "",
      password: ""
    }
  });
  const mutation = useAdministratorLogin();
  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async () => {
    return await mutation.mutateAsync(form.getValues());
  };

  return (
    <div className="w-full h-screen grid place-content-center">
      <Form {...form}>
        <form className="w-80 space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} type="password" />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button className="w-full bg-blue-500 hover:bg-blue-600 font-medium" type="submit">
            Entrar
          </Button>
        </form>
      </Form>
    </div>
  );
}