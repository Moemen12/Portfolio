"use client";
import SectionWrapper from "@/app/(root)/SectionWrapper";
import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { EmailFormSchema, slideIn, styles } from "@/lib/utils";
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
import { Textarea } from "@/components/ui/textarea";
import { EarthCanvas } from "../canvas";
import emailjs from "@emailjs/browser";
import { useToast } from "@/components/ui/use-toast";

const Contact = () => {
  const formRef = useRef();

  const { toast } = useToast();
  const [loading, setLoading] = useState<boolean>();

  const envVar = {
    TempId: process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE_ID,
    ServiceId: process.env.NEXT_PUBLIC_EMAILJS_SERVICE_ID,
    keyId: process.env.NEXT_PUBLIC_EMAILJS_KEY,
  };

  const form = useForm<z.infer<typeof EmailFormSchema>>({
    resolver: zodResolver(EmailFormSchema),
    defaultValues: {
      name: "",
      email: "",
    },
  });

  function onSubmit(values: z.infer<typeof EmailFormSchema>) {
    setLoading(true);

    emailjs
      .send(
        envVar.ServiceId!,
        envVar.TempId!,
        {
          from_name: form.getValues("name"),
          to_name: "Moemen",
          from_email: form.getValues("email"),
          to_email: "moemensaadeh936@gmail.com",
          message: form.getValues("message"),
        },
        envVar.keyId
      )
      .then(() => {
        setLoading(false);
        toast({
          className: "bg-tertiary",
          title: "Requested Successfully",
          description: "Thank you. I will get back to you as soon as possible.",
        });
        form.reset();
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
        toast({
          title: "Uh oh! Something went wrong.",
          variant: "destructive",
          description: "There was a problem with your request.",
        });
      });
  }

  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsWideScreen(window.innerWidth > 767);
      };

      // Set the initial state
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  return (
    <div className="xl:mt-12 xl:flex-row flex-col-reverse flex gap-10 overflow-hidden">
      <motion.div
        variants={slideIn("left", "tween", 0.2, 1)}
        className="flex-[0.75] bg-black-100 rounded-2xl p-8"
      >
        <p className={`${styles.sectionSubText}`}>Get in touch</p>
        <h3 className={`${styles.sectionHeadText}`}>Contact.</h3>

        <Form {...form}>
          <form
            onSubmit={form.handleSubmit(onSubmit)}
            className="mt-12 flex flex-col gap-8"
          >
            <FormField
              control={form.control}
              name="name"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium mb-4">
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Input
                      placeholder="What's your name?"
                      {...field}
                      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white !rounded-lg outline-none border-none font-medium"
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="email"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium mb-4">
                    Your Email
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="email"
                      placeholder="What's your email?"
                      {...field}
                      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white !rounded-lg outline-none border-none font-medium"
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="message"
              render={({ field }) => (
                <FormItem>
                  <FormLabel className="text-white font-medium mb-4">
                    Your Name
                  </FormLabel>
                  <FormControl>
                    <Textarea
                      rows={7}
                      placeholder="What do you want to say?"
                      {...field}
                      className="bg-tertiary py-4 px-6 placeholder:text-secondary text-white !rounded-lg outline-none border-none font-medium"
                    />
                  </FormControl>

                  <FormMessage className="text-red-500" />
                </FormItem>
              )}
            />
            <Button
              className="bg-tertiary w-fit py-3 px-8 text-white shadow-md shadow-primary rounded-xl hover:bg-tertiary"
              type="submit"
            >
              {loading ? "Sending..." : "Send"}
            </Button>
          </form>
        </Form>
      </motion.div>
      {isWideScreen && (
        <motion.div
          variants={slideIn("right", "tween", 0.2, 1)}
          className="xl:flex-1 xl:h-auto md:h-[550px] h-[350px]"
        >
          <EarthCanvas />
        </motion.div>
      )}
    </div>
  );
};

export default SectionWrapper(Contact, "contact");
