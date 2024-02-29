"use client";

import React, { useState } from "react";
import Link from "next/link";
import axios from "axios";
import { ExclamationCircleIcon } from "@heroicons/react/20/solid";
//material ui
import { GitHub } from "@mui/icons-material";
import { LinkedIn } from "@mui/icons-material";

function EmailSection() {
  const [emailSubmitted, setEmailSubmitted] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);
  const [emailPending, setEmailPending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data = {
      email: e.currentTarget.email.value,
      subject: e.currentTarget.subject.value,
      message: e.currentTarget.message.value,
    };
    setEmailPending(true);
    try {
      const endpoint = "api/send";
      const response = await axios.post(endpoint, data);
      setEmailPending(false);
      if (response.status === 200) {
        console.log("Message sent.");
        setEmailSubmitted(true);
        setErrorMessage(null);
      }
    } catch (error) {
      setErrorMessage("Unable to send email, try again later");
      setEmailSubmitted(false);
    }
  };

  return (
    <section
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4"
      id="Contact"
    >
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
            className="bg-primary-500 hover:bg-primary-600 text-white font-medium py-2.5 px-5 rounded-lg w-full"
            type="submit"
            aria-disabled={emailPending}
          >
            Send Message
          </button>
          <div className="flex h-8 items-end space-x-1 mt-3">
            {errorMessage && (
              <>
                {" "}
                <ExclamationCircleIcon className="h-5 w-5 text-red-500" />
                <p className="text-sm text-red-500 ">{errorMessage}</p>{" "}
              </>
            )}
            {emailSubmitted && (
              <p className="text-sm text-green-500">Email sent successfully.</p>
            )}
          </div>
        </form>
      </div>
    </section>
  );
}

export default EmailSection;
