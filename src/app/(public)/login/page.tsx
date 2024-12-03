"use client";

import { useAdministratorLogin } from "@/app/actions/useAdministratorLogin";
import { Button } from "@/components/ui/button";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { SubmitHandler, useForm } from "react-hook-form";
import { z } from "zod";

// eslint-disable-next-line @typescript-eslint/no-unused-vars
const schema = z.object({
  email: z.string({ required_error: "O email é obrigatório" }).email("Insira um email válido"),
  password: z.string({ required_error: "A senha é obrigatória" })
});

export default function Page() {
  const form = useForm<z.infer<typeof schema>>({
    defaultValues: {
      email: "",
      password: ""
    }
  });

  const useAdminAuthenticator = useAdministratorLogin();

  const onSubmit: SubmitHandler<z.infer<typeof schema>> = async () => {
    await useAdminAuthenticator.mutateAsync(form.getValues());
  };

  return (
    <div className="max-w-7xl mx-auto grid place-content-center h-[calc(100dvh-72px)]">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4">
          <FormField
            control={form.control}
            name="email"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input {...field} className="w-80"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <FormField
            control={form.control}
            name="password"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Senha</FormLabel>
                <FormControl>
                  <Input {...field} className="w-80" type="password"/>
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />
          <Button type="submit" className="w-full bg-blue-500 hover:bg-blue-700">
            Entrar
          </Button>
        </form>
      </Form>
    </div>
  );
}