"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem, FormLabel } from "../ui/form";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import Image from "next/image";

export function ProfessionalRegistration() {
  const form = useForm();

  return (
    <section className="mr-8 grid grid-cols-3">
      <Form {...form}>
        <form className="gap-x-4 bg-blue-50 p-4 rounded-md col-span-2 space-y-4">
          <div className="grid grid-cols-2 items-center gap-x-4 w-full">
            <FormField
              name="firstname"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Nome</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="lastname"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormItem>
                    <FormLabel className="text-sm">Sobrenome</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white" />
                    </FormControl>
                  </FormItem>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-x-4 w-full">
            <FormField
              name="especiality"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Qual sua especialidade?</FormLabel>
                  <Select onOpenChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Escolha a especialidade" className="bg-white" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="ginecologista">Ginecologista</SelectItem>
                      <SelectItem value="psiquiatra">Psiquiatra</SelectItem>
                      <SelectItem value="psicologo">Psicólogo</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
            <FormField
              name="location"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Onde é seu consultório?</FormLabel>
                  <Select onOpenChange={field.onChange} defaultValue={field.value}>
                    <FormControl>
                      <SelectTrigger className="bg-white">
                        <SelectValue placeholder="Escolha a localidade" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="belem_pa">Belém, PA</SelectItem>
                      <SelectItem value="ananindeuda_pa">Ananindeua, PA</SelectItem>
                      <SelectItem value="marituba_pa">Marituba, PA</SelectItem>
                    </SelectContent>
                  </Select>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-x-4 w-full">
            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Número de telefone</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormItem>
                    <FormLabel className="text-sm">Email</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white" />
                    </FormControl>
                  </FormItem>
                </FormItem>
              )}
            />
          </div>
          <div className="grid grid-cols-2 items-center gap-x-4 w-full">
            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-sm">Senha</FormLabel>
                  <FormControl>
                    <Input {...field} className="bg-white" />
                  </FormControl>
                </FormItem>
              )}
            />
            <FormField
              name="confirm_password"
              control={form.control}
              render={({ field }) => (
                <FormItem>
                  <FormItem>
                    <FormLabel className="text-sm">Confirmar senha</FormLabel>
                    <FormControl>
                      <Input {...field} className="bg-white" />
                    </FormControl>
                  </FormItem>
                </FormItem>
              )}
            />
          </div>
          <p className="text-sm">
            Ao se registrar, você está de acordo com nossos termos e condições, confirma estar ciente de nossa política de privacidade, e declara estar ciente das normas de publicidade profissional aplicáveis a você.
          </p>
          <Button className="bg-blue-500 flex items-center col-span-2 float-right mt-8">
            Criar conta de especialista
          </Button>
        </form>
      </Form>
      <div className="w-[400px] h-[400px] flex justify-end" style={{ position: "relative" }}>
        <Image src="/undraw_doctors_p6aq.svg" alt="AgendaConsulta Médicos" className="" fill />
      </div>
    </section >
  );
}