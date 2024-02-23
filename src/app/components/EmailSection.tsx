"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
//material ui
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };
    const JsonData = JSON.stringify(data);
    const endpoint = "api/send";

    console.log(JsonData);
    const response = await axios.post(endpoint, JsonData);

    if (response.status === 200) {
      console.log("Message sent.");
      setEmailSubmitted(true);
    }
  };

  return (
    <section className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4">
      <div>
        <h3 className="text-xl font-bold text-white my-2">Let's connect</h3>
        <p className="text-[#ADB7BE] mb-4 max-w-md">
          I am currently available to work on new projects. You can hit me up
          via my email and I will respond as soon as possible.
        </p>
        <div className="socials flex flex-row gap-3">
          <Link href={"/"} className="text-white">
            <GitHub fontSize="large" />
          </Link>
          <Link href={"/"} className="text-white">
            <LinkedIn fontSize="large" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="text-white block mb-2 text-sm font-medium"
              htmlFor="email"
            >
              Your email
            </label>
            <input
              name="email"
              id="email"
              required
              type="email"
              className="bg-[#18191E]  border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="kobbymens@gmail.com"
            />
          </div>

          <div className="mb-6">
            <label
              className="text-white block text-sm font-medium mb-2"
              htmlFor="subject"
            >
              Subject
            </label>
            <input
              name="subject"
              id="subject"
              type="text"
              className="bg-[#18191E]  border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let's build."
            />
          </div>

          <div className="mb-6">
            <label
              className="text-white block text-sm font-medium mb-2"
              htmlFor="message"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              required
              className="bg-[#18191E]  border border-[#33353F] placeholder-[#9CA2A9] text-gray-100 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello, I am Kwame from...."
            />
          </div>
          <button
            className="bg-purple-500 hover:bg-purple-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            type="submit"
          >
            Send Message
          </button>
          {emailSubmitted && (
            <p className="text-green-500 text-sm mt-3">
              Email sent successfully
            </p>
          )}
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
