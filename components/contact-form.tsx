"use client";

import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { Loader2, Send } from "lucide-react";
import { sendEmail } from "@/utils/send-email";
import { toast } from "sonner";
const formSchema = z.object({
  nom: z.string().min(2, { message: "entrez votre nom." }),
  email: z.string().email({ message: "entrez un email valide." }),
  sujet: z.string().min(2, {
    message: "entrez un sujet valide.",
  }),
  message: z.string().min(10, {
    message: "votre message doit contenir au moins 10 caractères.",
  }),
});
export default function ContactForm({
  sendLabel = "Envoyer",
  loadingLabel = "En cours...",
}: {
  sendLabel?: string;
  loadingLabel?: string;
}) {
  const form = useForm<z.infer<typeof formSchema>>({
    resolver: zodResolver(formSchema),
    defaultValues: { nom: "", email: "", sujet: "", message: "" },
  });
  const isLoading = form.formState.isSubmitting;

  async function onSubmit(values: z.infer<typeof formSchema>) {
    const mailText = `Nom: ${values.nom}\nEmail: ${values.email}\nSujet: ${values.sujet}\nMessage: ${values.message}`;
    const res = await sendEmail({
      text: mailText,
      sujet: "Nouveau message de contact",
      email: values.email,
    });
    if (res?.success) {
      toast.success("Votre message a été envoyé avec succès.");
      form.reset();
    } else {
      toast.error(res?.message);
    }
  }
  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 flex flex-col">
        <FormField
          control={form.control}
          name="nom"
          render={({ field }) => (
            <FormItem>
              {/* <FormLabel>Votre Nom</FormLabel> */}
              <FormControl>
                <Input placeholder="Votre Nom" className="bg-white/40 rounded-none" {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="email"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input
                  type="email"
                  placeholder="Email"
                  className="bg-white/40 rounded-none"
                  {...field}
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="sujet"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <Input placeholder="Sujet" className="bg-white/40 rounded-none border border-gray-200 " {...field} />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <FormField
          control={form.control}
          name="message"
          render={({ field }) => (
            <FormItem>
              <FormControl>
                <textarea
                  placeholder="Message"
                  {...field}
                  className="resize-none border border-gray-200 border-b-2 p-2 w-full h-32 bg-white/40 rounded-none placeholder:text-[#084d27]"
                />
              </FormControl>

              <FormMessage />
            </FormItem>
          )}
        />
        <Button
          disabled={isLoading}
          type="submit"
          className="bg-white  px-11 py-7 text-sm hover:bg-gray-100 rounded-xl self-start"
        >
          {isLoading ? (
            <span className="bg-gradient bg-clip-text text-transparent flex items-center">
                <Loader2 className="mr-2 h-5 w-5 animate-spin inline-block" />
              {loadingLabel}
            </span>
          ) : (

              <span className="bg-gradient bg-clip-text text-transparent font-bold">
                {sendLabel}
              </span>

          )}
        </Button>
      </form>
    </Form>
  );
}