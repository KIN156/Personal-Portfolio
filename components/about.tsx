"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
  const { ref } = useSectionInView("About");

  return (
    <motion.section
      ref={ref}
      className="mb-28 max-w-[45rem] text-center leading-8 sm:mb-40 scroll-mt-28"
      initial={{ opacity: 0, y: 100 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: 0.175 }}
      id="about"
    >
      <SectionHeading>About me</SectionHeading>
      <p className="mb-3">
        
    Hello. I am Kinjalkumari Dhimmar, a recent graduate from Centennial College in Toronto. 

    Originally from India, I hold a <span className="font-bold">bachelors degree</span> in Computer Engineering. My journey in the world of technology began with hands-on experience as a <span className="font-bold">Python and web developer</span> at Infusion Infotech in India, where I contributed to projects for over a year.

  Passionate about crafting beautiful and responsive websites, I thrive on utilizing various frameworks to bring creativity to the digital realm. One of my favorites is <span className="font-bold">Django</span>, a powerful Python framework, which I use to build dynamic and feature-rich web applications.
      </p>

      <p className="mb-3">
      Beyond coding, I have a soft spot for the arts, particularly painting. I find solace in expressing my creativity on canvas, exploring colors, and bringing imagination to life. 
      </p>

      <p className="mb-3"><span>To follow my coding endeavors, check out my GitHub profile.</span></p>
      
      <p className="mb-3"> <span>For a glimpse into my painting journey, feel free to explore my Instagram.</span> </p>
      
      <p className="mb-3">Lets connect and share the joy of technology and art.</p>

      
    
    </motion.section>
  );
}