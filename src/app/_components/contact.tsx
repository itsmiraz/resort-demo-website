"use client";
import React from "react";
import { EmailIcon, PhoneIcon, LocationIcon } from "@/assets/icons/index";
import { Button } from "@/components/ui/button";
// import { z } from "zod";
import { Input } from "@/components/ui/input";
const Contact = () => {
  return (
    <div className="py-[50px] mb-[100px] flex justify-between gap-20">
      <div>
        <h2 className="text-4xl  font-bold text-primary">Contact Us</h2>
        <p className="text-lg py-4">
          Feel Free to contact us regarding any query.
        </p>

        <div className="space-y-4">
          <div className="flex gap-x-4 items-center">
            <EmailIcon />
            <p>resort@gmall.com</p>
          </div>
          <div className="flex gap-x-4 items-center">
            <PhoneIcon />
            <p>+8801740065272</p>
          </div>
          <div className="flex gap-x-4 items-center">
            <LocationIcon />
            <p>123 Sample St, Sydney NSW 2000 AU</p>
          </div>
        </div>
        <div className="h-[250px] mt-6 overflow-hidden rounded-xl w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093776!2d144.95373631531675!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb6876f08a9b55b04!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sbd!4v1615196193437!5m2!1sen!2sbd"
            width="500"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-[40%]">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

// Define the form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z
    .string()
    .min(10, { message: "Message must be at least 10 characters" }),
});
import { Textarea } from "@/components/ui/textarea";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

const ContactForm = () => {
  const [isSubmitting, setIsSubmitting] = React.useState(false);
  const [formStatus, setFormStatus] = React.useState({
    message: "",
    success: false,
  });

  // 1. Define your form
  const form = useForm<z.infer<typeof contactFormSchema>>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
    },
  });

  // 2. Define a submit handler
  function onSubmit(values: z.infer<typeof contactFormSchema>) {
    setIsSubmitting(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      // Log the form data
      console.log("Form submitted successfully:", values);

      // Update form status
      setFormStatus({
        message: "Thank you! Your message has been sent successfully.",
        success: true,
      });

      setIsSubmitting(false);
    }, 1000);
  }

  return (
    <>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
          <FormField
            control={form.control}
            name="name"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Name</FormLabel>
                <FormControl>
                  <Input placeholder="Your name" {...field} />
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
                <FormLabel>Email</FormLabel>
                <FormControl>
                  <Input type="email" placeholder="Your email" {...field} />
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
                <FormLabel>Phone</FormLabel>
                <FormControl>
                  <Input
                    type="tel"
                    placeholder="Your phone number"
                    {...field}
                  />
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
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Your message"
                    className="min-h-[120px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {formStatus.message && !formStatus.success && (
            <p className="text-sm text-red-500">{formStatus.message}</p>
          )}

          {formStatus.success && (
            <p className="text-sm text-green-500">{formStatus.message}</p>
          )}

          <Button type="submit" variant="primary" disabled={isSubmitting}>
            {isSubmitting ? "Sending..." : "Send Message"}
          </Button>
        </form>
      </Form>
    </>
  );
};
