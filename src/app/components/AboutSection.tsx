"use client";

import React, { useState, useTransition } from "react";
import Image from "next/image";
import TabButton from "./TabButton";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>React</li>
        <li>Express</li>
        <li>Next.js</li>
        <li>Node.js</li>
        <li>MongoDB</li>
        <li>JavaScript</li>
        <li>MySQL</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>Prempeh College </li>
        <li>University of Ghana </li>
        <li>Next.js</li>
      </ul>
    ),
  },
  {
    title: "Certifications",
    id: "certifications",
    content: (
      <ul className="list-disc pl-2">
        <li>Bachelor of Science in IT</li>
        <li>Master of Philosophy in Computer Science</li>
      </ul>
    ),
  },
];
function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const selectTab = (nextTab: string) => {
    startTransition(() => setTab(nextTab));
  };

  return (
    <section className="text-white" id="About">
      <div className="md:grid md:grid-cols-2  gap-8 items-center py-8 px-4 xl:gap-16 sm-py-16 xl-px-16 ">
        <Image
          src="/images/about-section-image.jpg"
          alt="About me section image"
          className="hidden md:block"
          width={500}
          height={500}
        />
        <Image
          src="/images/about-section-image-mobile.jpg"
          alt="About me section image"
          className="md:hidden block"
          width={300}
          height={350}
        />
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          <p className="text-base lg:text-lg ">
            As a seasoned full-stack web developer, I bring over 5 years of
            diverse experience across projects of varying scales. My toolkit
            encompasses a wide array of technologies, including JavaScript,
            HTML, CSS, Python, Java, Node.js, MongoDB, MySQL, and Git. I thrive
            on utilizing frameworks like React, Express, Tailwind CSS, and
            Next.js to craft elegant solutions. Embracing a philosophy of
            continuous learning and self-improvement, I view each challenge as
            an opportunity for creative problem-solving.
          </p>
          <div className="flex flex-row mt-8">
            <TabButton
              selectTab={() => selectTab("skills")}
              active={tab === "skills"}
            >
              Skills
            </TabButton>
            <TabButton
              selectTab={() => selectTab("education")}
              active={tab === "education"}
            >
              Education
            </TabButton>
            <TabButton
              selectTab={() => selectTab("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton>
          </div>

          <div className="mt-6 ">
            {TAB_DATA.find((t) => t.id === tab)?.content}
          </div>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
