'use client';

import { useEffect } from 'react';
import { gsap } from 'gsap';
import ScrollTrigger from 'gsap/ScrollTrigger';
import ScrollToPlugin from 'gsap/ScrollToPlugin';  // GSAP ScrollTo Plugin for smooth scrolling

gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

const SmoothScroll = ({ children }: { children: React.ReactNode }) => {
  useEffect(() => {
    // Ensure GSAP's scroll handling is smooth
    gsap.to("html, body", {
      scrollTo: 0,  // Scroll to top initially if needed
      ease: "power4.out",  // Control smoothness with ease
      duration: 1,  // Adjust duration for smoothness
    });

    // Optional: Example scroll-based animation with GSAP ScrollTrigger
    gsap.from('.box', {
      scrollTrigger: {
        trigger: '.box', // Trigger animation when .box is reached
        start: 'top 80%', // When 80% of the element is visible
        end: 'top 20%',
        scrub: 1,  // Scroll-linked animation
      },
      opacity: 0,
      y: 100,
      duration: 1,
    });

    return () => {
      // Clean-up logic here if needed
    };
  }, []);

  return <>{children}</>;
};

export default SmoothScroll;
