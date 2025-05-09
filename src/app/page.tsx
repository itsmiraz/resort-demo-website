"use client";
import React from "react";
import Hero from "./_components/hero";
import Expertise from "./_components/expertise";
import Rooms from "./_components/rooms";
import Dining from "./_components/dining";
import About from "./_components/about";
import Facilities from "./_components/facilities";
import Gallery from "./_components/gallery";
import Testimonials from "./_components/testimonials";
import Contact from "./_components/contact";
import { useGlobalContext } from "@/components/context/globalContext";
import Packages from "./_components/packages";
const Home = () => {
  const { isAnimate } = useGlobalContext();

  return (
    <div>
      <Hero />
      {isAnimate && (
        <>
          <Expertise />
          <Rooms />
          <Packages />
          <Dining />
          <About />
          <Facilities />
          <Testimonials />
          <Gallery />
          <Contact />
        </>
      )}
    </div>
  );
};

export default Home;
