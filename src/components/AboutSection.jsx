"use client";
import Reveal from "@/app/utils/Reveal.jsx";
import RevealImage from "@/app/utils/RevealImage.jsx";
import Image from "next/image.js";
import { useState, useTransition } from "react";
import aboutImage from "../../public/images/about-image.png";
import TabButton from "./TabButton.jsx";

const TAB_DATA = [
  {
    title: "Skills",
    id: "skills",
    content: (
      <ul className="list-disc pl-2">
        <li>Javascript</li>
        <li>React</li>
        <li>Redux</li>
        <li>Node.js</li>
        <li>Express</li>
        <li>MongoDB</li>
        <li>HTML and CSS</li>
        <li>Git and Github</li>
      </ul>
    ),
  },
  {
    title: "Education",
    id: "education",
    content: (
      <ul className="list-disc pl-2">
        <li>National Institute of Technology, Durgapur</li>
        <li>Durgapur, West Bengal, India</li>
      </ul>
    ),
  },
];

function AboutSection() {
  const [tab, setTab] = useState("skills");
  const [isPending, startTransition] = useTransition();

  const handleTabChange = (id) => {
    startTransition(() => {
      setTab(id);
    });
  };

  return (
    <section>
      <div className="md:grid md:grid-cols-2 gap-8 items-center py-8 px-4 xl:gap-16 sm:py-16 xl:px-16">
        <RevealImage>
          <Image src={aboutImage} alt="about-image" height={500} width={500} />
        </RevealImage>
        <div className="mt-4 md:mt-0 text-left flex flex-col h-full">
          <Reveal>
            <h2 className="text-4xl font-bold text-white mb-4">About Me</h2>
          </Reveal>
          <Reveal>
            <p className="text-base md:text-lg">
              I am a Full Stack Web Developer with a passion for creating
              interactive and responsive web applications. I have experience
              working with Javascript, React, Redux, Node.js, Express, MongoDB,
              HTML, CSS, Git and Github. I am a quick learner and I am always
              looking to expand my knowledge and skill set. I can work as a team
              and I am excited to work with others to create amazing
              applications.
            </p>
          </Reveal>
          <Reveal>
            <div className="flex flex-row justify-start mt-8">
              <TabButton
                selectTab={() => handleTabChange("skills")}
                active={tab === "skills"}
              >
                Skills
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("education")}
                active={tab === "education"}
              >
                Education
              </TabButton>
              <TabButton
                selectTab={() => handleTabChange("experience")}
                active={tab === "experience"}
              >
                Experience
              </TabButton>
              {/* <TabButton
              selectTab={() => handleTabChange("certifications")}
              active={tab === "certifications"}
            >
              Certifications
            </TabButton> */}
            </div>
          </Reveal>
          <Reveal>
            <div className="mt-4">
              {TAB_DATA.find((el) => el.id === tab)?.content}
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

export default AboutSection;
