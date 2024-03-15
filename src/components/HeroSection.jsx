"use client";
import Reveal from "@/app/utils/Reveal.jsx";
import RevealImage from "@/app/utils/RevealImage.jsx";
import Image from "next/image.js";
import { TypeAnimation } from "react-type-animation";
import heroImage from "../../public/images/hero-image.png";

function HeroSection() {
  return (
    <section className="hero lg:py-16">
      <div className="grid grid-cols-1 sm:grid-cols-12">
        <div className="col-span-8 place-self-center text-center sm:text-left justify-self-start">
          <Reveal>
            <h1 className="mb-4 text-4xl sm:text-5xl lg:text-8xl lg:leading-normal font-extrabold">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-pink-500">
                Hello, I&apos;m{" "}
              </span>
              <br />
              <TypeAnimation
                sequence={["Purbayan", 1000, "MERN Developer", 1000]}
                wrapper="span"
                speed={50}
                repeat={Infinity}
              />
            </h1>
          </Reveal>
          <Reveal>
            <p className="text-[#ADB7BE] text-base sm:text-lg mb-6 lg:text-xl font-bold">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry standard dummy text
              ever since the 1500s
            </p>
          </Reveal>
          <Reveal>
            <div>
              <button className="px-6 py-3 w-full sm:w-fit rounded-full mr-4 bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-white hover:bg-slate-200 text-black">
                Hire Me
              </button>
              <button className="px-1 py-1 w-full sm:w-fit rounded-full bg-gradient-to-br from-blue-500 via-purple-500 to-pink-500 bg-transparent hover:bg-slate-800 mt-3">
                <span className="block bg-black hover:bg-slate-800 rounded-full px-5 py-2">
                  Download CV
                </span>
              </button>
            </div>
          </Reveal>
        </div>
        <RevealImage>
          <div className="col-span-4 place-self-center mt-4 lg:mt-0">
            <div className="rounded-full w-[250px] h-[250px] lg:w-[500px] lg:h-[500px] relative">
              <Image
                src={heroImage}
                alt="hero-image"
                className="absolute transform -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2"
                width={400}
                height={400}
              />
            </div>
          </div>
        </RevealImage>
      </div>
    </section>
  );
}

export default HeroSection;
