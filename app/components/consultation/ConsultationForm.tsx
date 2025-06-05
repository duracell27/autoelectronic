"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ConsultationSchema, TypeConsultationSchema } from "./Consultation.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = {};

export const ConsultationForm = (props: Props) => {
  const form = useForm<TypeConsultationSchema>({
    resolver: zodResolver(ConsultationSchema),
    defaultValues: {
      name: "",
      lastName: "",
      phone: "+38",
      description: "",
    },
  });

  const onSubmit = (data: TypeConsultationSchema) => {
    console.log(data);
  };
  return (
    <div className="w-full px-4 max-w-7xl mb-10 md:mb-27">
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
            <div className="space-y-4">
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="І`мя" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Прізвище" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="phone"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Input placeholder="Номер телефону" type="text" {...field} />
                    </FormControl>
                    <FormMessage className="" />
                  </FormItem>
                )}
              />

              
            </div>
            <div className="">
              <FormField
                control={form.control}
                name="lastName"
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Опишіть проблему" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <Button className="w-[180px] my-2" type="submit" variant={"defaultBlack"}>
                Записатись
              </Button>
          </div>
        </form>
      </Form>
    </div>
  );
};
