"use client";
import React, { useState } from "react";
import Image from "@/public/images/property/CS2.jpg";
import emailjs from "@emailjs/browser";
import { openWhatsAppMessage } from "./common/manager";
import { Button } from "./common/Button";

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    purpose: "appointment",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: "" });
  };

  const validate = () => {
    const newErrors: { [key: string]: string } = {};
    if (!formData.name) newErrors.name = "Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    else if (!/\S+@\S+\.\S+/.test(formData.email))
      newErrors.email = "Email is invalid";
    if (!formData.message) newErrors.message = "Message is required";
    return newErrors;
  };

  // const handleSubmit = (e: React.FormEvent) => {
  //   e.preventDefault();
  //   const validationErrors = validate();
  //   if (Object.keys(validationErrors).length > 0) {
  //     setErrors(validationErrors);
  //     return;
  //   }

  //   // Here you can send formData to a backend or service
  //   console.log("Form submitted:", formData);
  //   setSubmitted(true);
  // };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const validationErrors = validate();
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    const serviceID = "service_0ycj971";
    const templateID = "template_xn2jyyb"; // template 2
    const publicKey = "W-rM6iQox1CpAHGa8";

    const templateParams = {
      projectName: "Pavilion Square",
      name: formData.name,
      email: formData.email,
      purpose: formData.purpose,
      message: formData.message,
    };

    emailjs
      .send(serviceID, templateID, templateParams, publicKey)
      .then(() => {
        console.log("Email successfully sent!");
        setSubmitted(true);
      })
      .catch((error) => {
        console.error("Email sending error:", error);
        alert("Failed to send message. Please try again later.");
      });
  };

  return (
    <section id="contact-us">
      <div
        className="relative w-full flex flex-col gap-8 px-5 md:px-20 py-10"
        style={{
          backgroundImage: `url(${Image.src})`,
          backgroundRepeat: "no-repeat",
          backgroundPosition: "100% 50%",
        }}
      >
        {/* Add overlay to background */}
        <div className="absolute inset-0 bg-black opacity-40 z-0"></div>

        {/* Form Heading */}
        <div
          className="text-4xl md:text-5xl tracking-wide text-white z-10 text-center"
          style={{ fontFamily: "ACaslonPro-Regular" }}
          data-aos="fade-down"
          data-aos-delay={100}
        >
          REGISTER YOUR INTEREST NOW !
        </div>

        {submitted ? (
          <div className="bg-amber-100 w-full text-center p-2 rounded-full z-10">
            <span className="text-black font-medium">
              Thanks for contacting us! Will get back to you soon!
            </span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="space-y-4 z-10">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-12 md:col-span-6">
                {/* Name */}
                <div>
                  <label className="block text-lg font-medium text-white">
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 bg-transparent text-white"
                  />
                  {errors.name && (
                    <p className="text-red-500 text-lg">{errors.name}</p>
                  )}
                </div>

                {/* Email */}
                <div>
                  <label className="block text-lg font-medium text-white">
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 bg-transparent text-white"
                  />
                  {errors.email && (
                    <p className="text-red-500 text-lg">{errors.email}</p>
                  )}
                </div>
              </div>
              <div className="col-span-12 md:col-span-6">
                {/* Purpose */}
                <label className="block text-lg font-medium text-white">
                  Purpose
                </label>

                <select
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleChange}
                  className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 bg-transparent text-white"
                >
                  <option value="appointment" className="bg-black">
                    Make An Appointment
                  </option>
                  <option value="general" className="bg-black">
                    Request More Info
                  </option>
                </select>

                {/* Message */}
                <div>
                  <label className="block text-lg font-medium text-white">
                    Message
                  </label>
                  <textarea
                    name="message"
                    rows={5}
                    value={formData.message}
                    onChange={handleChange}
                    className="mt-1 block w-full px-4 py-2 border border-gray-300 rounded-md focus:ring focus:ring-blue-200 bg-transparent text-white"
                  />
                  {errors.message && (
                    <p className="text-red-500 text-lg">{errors.message}</p>
                  )}
                </div>
              </div>
            </div>

            {/* Submit */}
            <div>
              <div
                className="mx-auto max-w-xs sm:max-w-none flex justify-center gap-3"
                data-aos="zoom-y-in"
                data-aos-delay={300}
              >
                <button
                  type="submit"
                  className="btn group mb-4 w-full bg-[#c75513] bg-[bottom] text-white shadow-sm hover:bg-amber-50 hover:text-[#c75513] hover:border-[#c75513] hover:border-1 sm:mb-0 sm:w-auto"
                >
                  <span className="relative inline-flex text-lg items-center">
                    REGISTER
                    <span className="ml-1 tracking-normal text-white transition-transform group-hover:translate-x-0.5 group-hover:text-[#c75513]">
                      -&gt;
                    </span>
                  </span>
                </button>
                <Button
                  label="Contact us"
                  onClickFunction={openWhatsAppMessage}
                />
              </div>
            </div>
          </form>
        )}
      </div>
    </section>
  );
};
