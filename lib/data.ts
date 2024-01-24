import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";
import crm from "@/public/CRM.jpg";
import bmi from "@/public/BMI.png";
import resume from "@/public/Digital_Resume.png"

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Graduated bootcamp",
    location: "Miami, FL",
    description:
      "I graduated after 6 months of studying. I immediately found a job as a front-end developer.",
    icon: React.createElement(LuGraduationCap),
    date: "2019",
  },
  {
    title: "Front-End Developer",
    location: "Orlando, FL",
    description:
      "I worked as a front-end developer for 2 years in 1 job and 1 year in another job. I also upskilled to the full stack.",
    icon: React.createElement(CgWorkAlt),
    date: "2019 - 2021",
  },
  {
    title: "Full-Stack Developer",
    location: "Houston, TX",
    description:
      "I'm now a full-stack developer working as a freelancer. My stack includes React, Next.js, TypeScript, Tailwind, Prisma and MongoDB. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2021 - present",
  },
] as const;

export const projectsData = [
  {
    title: "CRM",
    description:
      "Django CRM is an open-source Customer Relationship Management web application built using the Django framework.",
    tags: ["Python", "Django", "Sqlite",],
    imageUrl: crm,
    projectUrl: "https://github.com/KIN156/CRM-Django",
  },
  {
    title: "BMI",
    description:"BMI is a web app to calculate body mass index by adding height and weight.",    
    tags: ["HTML", "CSS", "JavaScript"],
    imageUrl: bmi,
    projectUrl: "https://kin156.github.io/BMI_Calc/",

  },
  {
    title: "Digital Resume",
    description:"A digital resume created with HTML, CSS and JS. The resume showcase my skills, Project and Certificates.",
    tags: ["HTML","CSS","JavaScript"],
    imageUrl: resume,
    projectUrl: "https://kin156.github.io/Digital-Resume/",

  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Git",
  "Tailwind",
  "MongoDB",
  "Express",
  "PostgreSQL",
  "Python",
  "Django",
  "Framer Motion",
] as const;