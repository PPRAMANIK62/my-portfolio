"use client";
import Reveal from "@/app/utils/Reveal.jsx";
import Link from "next/link.js";
import { useState } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const data = {
      name: e.target.name.value,
      email: e.target.email.value,
      subject: e.target.subject.value,
      message: e.target.message.value,
    };
    const JSONdata = JSON.stringify(data);
    const endPoint = "http://localhost:3000/api/send";

    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSONdata,
    };

    const res = await fetch(endPoint, options);
    const resData = await res.json();
    console.log(resData);
    if (res.status === 200) {
      console.log("Message Sent");
      setEmailSubmitted(true);
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
      id="contact"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-purple-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute bottom-auto left-6 transform -translate-x-1/2"></div>
      <div>
        <Reveal>
          <h5 className="text-xl font-bold text-white my-2">
            Let&apos;s Connect
          </h5>
          <p className="text-[#ADB7BE] mb-4 max-w-md">
            I am currently looking for new opportunities, my inbox is always
            open. Whether you have a question or just want to say hi, I&apos;ll
            try my best to get back to you!
          </p>

          <div className="socials flex flex-row gap-4">
            <Link href="https://github.com/PPRAMANIK62" target="_blank">
              <FaGithub size={30} />
            </Link>
            <Link href="https://linkedin.com/in/ppramanik6" target="_blank">
              <FaLinkedin size={30} />
            </Link>
          </div>
        </Reveal>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              htmlFor="name"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Name
            </label>
            <input
              type="text"
              name="name"
              id="name"
              required
              className="bg-[#18191E] border bordrr-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Your Name"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-white block mb-2 text-sm font-medium"
            >
              Your Email
            </label>
            <input
              type="email"
              name="email"
              id="email"
              required
              className="bg-[#18191E] border bordrr-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="name@example.com"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-white block mb-2 text-sm font-medium"
            >
              Subject
            </label>
            <input
              type="text"
              name="subject"
              id="subject"
              required
              className="bg-[#18191E] border bordrr-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Just saying hi!"
            />
          </div>

          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-white block mb-2 text-sm font-medium"
            >
              Message
            </label>
            <input
              type="text"
              name="message"
              id="message"
              required
              className="bg-[#18191E] border bordrr-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's talk about..."
            />
          </div>

          <button
            type="submit"
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium px-5 py-2.5 rounded-lg w-full"
          >
            Send Message
          </button>

          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-2">
              Email sent successfully!
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
