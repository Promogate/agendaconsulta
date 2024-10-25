"use client";

import { useForm } from "react-hook-form";
import { Form, FormControl, FormField, FormItem } from "../ui/form";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../ui/select";
import { Button } from "../ui/button";
import { Search } from "lucide-react";

export function FindLocationAndEspeciality() {
  const form = useForm();

  return (
    <section className="mr-8">
      <Form {...form}>
        <form className="grid grid-cols-10 gap-x-4 bg-blue-50 p-4 rounded-md">
          <FormField
            name="especiality"
            control={form.control}
            render={({ field }) => (
              <FormItem className="col-span-4">
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
              <FormItem className="col-span-4">
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
          <Button className="bg-blue-500 flex items-center col-span-2">
            <Search className="w-4 h-4"/>
            Pesquisar
          </Button>
        </form>
      </Form>
    </section >
  );
}