"use client";

import React from "react";
import SectionHeading from "./section-heading";
import { VerticalTimeline, VerticalTimelineElement }  from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
  const { ref } = useSectionInView("Experience");
  const { theme } = useTheme();

  return (
    <section id="experience" ref={ref} className="relative scroll-mt-28 mb-28 sm:mb-40">
      <SectionHeading>My experience</SectionHeading>
    <div className="mt-6 relative z-10 react-draggable" style={{transform: 'translate(0px, 0px)'}}>
      <div className="w-11/12 bg-zinc-700 h-8 rounded-t-xl flex flex-wrap justify-start items-center cursor-move header-strip">
        </div>
        <div id="experienceBox" className="w-11/12 relative bg-zinc-600 h-96 rounded-b-xl p-4 px-6 overflow-x-auto overflow-y-hidden flex flex-wrap flex-col items-center justify-center shadow-lg hover:shadow-xl transition-all ease-in-out duration-300 space-x-6">
          <div className="h-80 w-60 bg-blue-200 ring-2 hover:ring-4 ring-zinc-300/30 rounded-xl text-xl font-medium ml-0 flex flex-col hover:-mt-1 transform transition-all duration-100 ease-in-out">
            <div className="h-1/2 flex flex-col justify-center items-center">
            <img src="/infusioninfotech_logo.jpeg" alt="" className="h-1/2 rounded-full "/>  
            </div>
            <div className="flex flex-col text-center w-full justify-center text-zinc-900">
                <p className="opacity-95">Python Developer</p>
                <p className="opacity-80">@Infusion Infotech</p>
                <div className="mt-6 text-lg font-light flex flex-col justify-center items-center opacity-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-base">Mar 2020 - Jun 2021</p>
                </div>
            </div>
          </div>


          <div className="h-80 w-60 bg-blue-200 ring-2 hover:ring-4 ring-zinc-300/30 rounded-xl text-xl font-medium ml-0 flex flex-col hover:-mt-1 transform transition-all duration-100 ease-in-out">
            <div className="h-1/2 flex flex-col justify-center items-center">
            <img src="/Hoops_logo.jpg" alt="" className="h-1/2 rounded-full "/>  

            </div>
            <div className="flex flex-col text-center w-full justify-center text-zinc-900">
                <p className="opacity-95">Hostess / Server</p>
                <p className="opacity-80">@Hoops Sports Bar</p>
                <div className="mt-6 text-lg font-light flex flex-col justify-center items-center opacity-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-base">Mar 2022 - Present</p>
                </div>
            </div>
          </div>

          <div className="h-80 w-60 bg-blue-200 ring-2 hover:ring-4 ring-zinc-300/30 rounded-xl text-xl font-medium ml-0 flex flex-col hover:-mt-1 transform transition-all duration-100 ease-in-out">
            <div className="h-1/2 flex flex-col justify-center items-center">
            <img src="/sigmapac_engineered_services_inc_logo.jpeg" alt="" className="h-1/2 rounded-full "/>  
            </div>
            <div className="flex flex-col text-center w-full justify-center text-zinc-900">
                <p className="opacity-95">Team Lead Manager</p>
                <p className="opacity-80">@SigmaPac</p>
                <div className="mt-6 text-lg font-light flex flex-col justify-center items-center opacity-90">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-8 w-8 mb-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"></path>
                  </svg>
                  <p className="text-base">Jul 2023 - Oct 2023</p>
                </div>
            </div>
          </div>

        </div>

        


    </div>
    </section>
  );
}