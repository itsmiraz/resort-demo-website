"use client";
import React from "react";
import { EmailIcon, PhoneIcon, LocationIcon } from "@/assets/icons/index";
import ContactForm from "@/components/ui/contactForm";

const Contact = () => {
  return (
    <div id="contact" className="py-[50px] md:px-0 px-4 mb-[50px] md:mb-[100px] flex md:flex-row flex-col  justify-between gap-20">
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
           title="Google Map showing Melbourne, Victoria, Australia"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3151.8354345093776!2d144.95373631531675!3d-37.81627997975171!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x6ad642af0f11fd81%3A0xb6876f08a9b55b04!2sMelbourne%2C%20Victoria%2C%20Australia!5e0!3m2!1sen!2sbd!4v1615196193437!5m2!1sen!2sbd"
            width="500"
            height="250"
            style={{ border: 0 }}
            allowFullScreen={true}
            loading="lazy"
          />
        </div>
      </div>
      <div className="w-[100%] md:w-[40%]">
        <ContactForm />
      </div>
    </div>
  );
};

export default Contact;

