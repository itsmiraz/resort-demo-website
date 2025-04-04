"use client";

import { useState } from "react";
import { z } from "zod";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import RoomImg1 from "@/assets/images/room1.png";
import { MinusIcon, Plus } from "lucide-react";

import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import Image from "next/image";

// Define the form schema with Zod
const contactFormSchema = z.object({
  name: z.string().min(2, { message: "Name must be at least 2 characters" }),
  email: z.string().email({ message: "Please enter a valid email address" }),
  phone: z.string().min(10, { message: "Please enter a valid phone number" }),
  message: z.string(),

  adults: z.number().min(1, { message: "At least one adult required" }),
  children: z.number().min(0),
});

type ContactFormValues = z.infer<typeof contactFormSchema>;

export default function BookingModal({
  setOpen,
}: {
  open: boolean;
  setOpen: React.Dispatch<React.SetStateAction<boolean>>;
}) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formStatus, setFormStatus] = useState({
    message: "",
    success: false,
  });

  // Define form with React Hook Form and Zod resolver
  const form = useForm<ContactFormValues>({
    resolver: zodResolver(contactFormSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      message: "",
      adults: 1,
      children: 0,
    },
  });
  const adults = form.watch("adults");
  const children = form.watch("children");

  const setAdults = (value: number) => form.setValue("adults", value);
  const setChildren = (value: number) => form.setValue("children", value);
  // Submit handler
  function onSubmit(values: ContactFormValues) {
    setIsSubmitting(true);

    // Simulate API call with a timeout
    setTimeout(() => {
      // Log the form data
      console.log("Form submitted successfully:", values);

      // Update form status
      setFormStatus({
        message:
          "Thank you! Your inquiry has been received. Our team will contact you shortly.",
        success: true,
      });
      setOpen(false);

      setIsSubmitting(false);

      // Reset form after successful submission
      setTimeout(() => {
        if (formStatus.success) {
          form.reset();
          setFormStatus({ message: "", success: false });
          setOpen(false);
        }
      }, 3000);
    }, 1500);
  }

  return (
    <div>
      <h2 className="font-semibold text-xl text-center pb-4">
        Confirm Your Booking
      </h2>
      <div className="flex gap-4 p-3 border bg-green-50 rounded-xl">
        <Image className="w-[100px] rounded-xl" src={RoomImg1} alt="" />
        <div>
          <h3 className="font-semibold pb-2 text-xl">Super Deluxe Room</h3>
          <h4 className="text-sm font-semibold inter-font">
            $100-240$ <span className="text-xs text-gray-500">/night</span>
          </h4>
        </div>
      </div>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-4 py-4">
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

          <div className="grid grid-cols-2 md:grid-cols-2 gap-4">
            <GuestSelector
              title="Adults"
              guests={adults}
              setGuests={(val) => setAdults(val)}
            />
            <GuestSelector
              title="Children"
              guests={children}
              setGuests={(val) => setChildren(val)}
            />
          </div>

          <FormField
            control={form.control}
            name="message"
            render={({ field }) => (
              <FormItem>
                <FormLabel>Message</FormLabel>
                <FormControl>
                  <Textarea
                    placeholder="Tell us about your desired stay dates and any special requests"
                    className="min-h-[100px]"
                    {...field}
                  />
                </FormControl>
                <FormMessage />
              </FormItem>
            )}
          />

          {formStatus.message && (
            <div
              className={`p-3 rounded-md ${
                formStatus.success
                  ? "bg-green-50 text-green-700"
                  : "bg-red-50 text-red-700"
              }`}
            >
              {formStatus.message}
            </div>
          )}

          <Button
            type="submit"
            className="w-full py-6! text-lg"
            variant={"primary"}
            disabled={isSubmitting}
          >
            {isSubmitting ? "Sending..." : "Send Inquiry"}
          </Button>
        </form>
      </Form>
    </div>
  );
}
const GuestSelector = ({
  setGuests,
  guests,
  title,
}: {
  guests: number;
  title: string;
  setGuests: (value: number) => void;
}) => {
  return (
    <div className=" w-fit">
      <p className="text-xs mb-2 md:text-sm font-medium text-primary">{title}</p>
      <div className="flex  border px-4 rounded-full py-1 w-fit justify-center items-center gap-x-4">
        <button
          type="button"
          aria-label="decrease"
          className="cursor-pointer"
          onClick={() => guests > 1 && setGuests(guests - 1)}
        >
          <MinusIcon />
        </button>
        <p className="text-sm md:text-xl font-medium">{guests}</p>

        <button
          type="button"
          aria-label="increase"
          className="cursor-pointer"
          onClick={() => setGuests(guests + 1)}
        >
          <Plus />
        </button>
      </div>
    </div>
  );
};
