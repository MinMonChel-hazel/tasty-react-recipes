import React from "react";

export default function Contact() {
  return (
    <div
      className="container mx-auto min-h-screen bg-amber-50 pt-8 md:pt-16 lg:pt-24"
      id="contact"
    >
      <div className="md:w-2/3 lg:w-1/2 mx-auto text-center space-y-3">
        <h3 className="text-2xl font-semibold">Contact Us</h3>
        <p className="text-gray-700 text-[14px] lg:text-[15px]">
          Have a question or suggestion? We'd love to hear from you!
        </p>
        <p className="text-gray-700 text-[14px] lg:text-[15px]">
          Email us at: support@tastyrecipes.com
        </p>
        <form className="w-4/5 lg:w-3/4 mx-auto bg-white shadow-md rounded-md p-6">
          <input
            type="text"
            placeholder="Your Name"
            className="border border-gray-400 rounded-2xl px-4 py-1.5 w-full mb-4 text-[14px]"
          />
          <input
            type="email"
            placeholder="Your Email"
            className="border border-gray-400 rounded-2xl px-4 py-1.5 w-full mb-4 text-[14px]"
          />
          <textarea
            placeholder="Your Message"
            className="border border-gray-400 rounded-2xl px-4 py-1.5 w-full mb-4 text-[14px]"
            rows="2"
          ></textarea>
          <button
            type="submit"
            className="bg-amber-500 text-white px-4 py-2 text-[14px] rounded-full"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
