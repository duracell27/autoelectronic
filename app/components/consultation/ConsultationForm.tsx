"use client";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Form, FormControl, FormField, FormItem, FormLabel, FormMessage } from "@/components/ui/form";
import { ConsultationSchema, TypeConsultationSchema } from "./Consultation.schema";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

type Props = {
  from: string;
};

export const ConsultationForm = (props: Props) => {
  const form = useForm<TypeConsultationSchema>({
    resolver: zodResolver(ConsultationSchema),
    defaultValues: {
      name: "",
      lastName: "",
      phone: "+38",
      from: props.from || "",
      description: "",
    },
  });

  const onSubmit = async (data: TypeConsultationSchema) => {
    try {
    const res = await fetch("/api/telegram", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data),
    });

    if (!res.ok) {
      throw new Error("Помилка при відправці");
    }

    alert("Заявку надіслано!");
    form.reset();
  } catch (error) {
    alert("Не вдалося надіслати заявку");
    console.error(error);
  }
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
                      <Input placeholder="Ім`я" type="text" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="from"
                render={({ field }) => (
                  <FormItem className="hidden">
                    <FormControl>
                      <Input placeholder="" type="text" {...field} />
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
                name='description'
                render={({ field }) => (
                  <FormItem>
                    <FormControl>
                      <Textarea placeholder="Опишіть вашу проблему та уточніть марку і рік випуску вашого авто" rows={5} {...field} />
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
