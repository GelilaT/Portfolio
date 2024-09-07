import {
  faGithub,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { HiOutlineMail } from "react-icons/hi";

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const [isModalOpen, setIsModalOpen] = useState(false); // State for modal
  const [formSubmitted, setFormSubmitted] = useState(false);

  const onSubmit = async (data, e) => {
    console.log("Form data:", data); // Log the form data

    const url = "http://localhost:3000/send-message";

    try {
      const response = await fetch(url, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      setIsModalOpen(true); 
      setFormSubmitted(true);
      e.target.reset()
    } catch (error) {
      console.error("Error sending message:", error);
      alert("Failed to send message.");
    }
  };


  return (
    <div
      id="contact"
      className="flex flex-col lg:flex-row items-start justify-between p-10 pt-32 bg-[#0a192f] text-gray-300"
    >
      {/* Left Side: Personal Info */}
      <div className="lg:w-1/2 mb-8 lg:mb-0 mr-10">
        <h2 className="text-4xl font-bold mb-4">Contact Me</h2>
        <p className="text-lg mb-4 max-w-lg">
          Feel free to reach out to me through this form or connect with me on
          social media!
        </p>
        <div>
          <p className="text-lg font-semibold">Connect with me:</p>
          <ul className="flex items-center pt-3">
            <li>
              <a
                href="mailto:gelilat.gizaw@gmail.com"
                className="text-green-400 text-3xl"
              >
                <HiOutlineMail />
              </a>
            </li>
            <li>
              <a
                href="https://www.linkedin.com/in/gelila-tefera-7a7006259/"
                className="text-blue-400 text-2xl"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </li>
            <li>
              <a
                href="https://instagram.com/gelila_tefera"
                target="_blank"         
                className="text-pink-500 text-2xl"
              >
                <FontAwesomeIcon icon={faInstagram} />
              </a>
            </li>
            <li>
              <a
                href="https://github.com/GelilaT"
                className="text-gray-200 text-2xl"
              >
                <FontAwesomeIcon icon={faGithub} />
              </a>
            </li>
          </ul>
        </div>
      </div>

      {/* Right Side: Contact Form */}
      <div className="lg:w-1/2">
        <h2 className="text-2xl font-bold mb-4">Send a Message</h2>
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="name">
              Your Name
            </label>
            <input
              id="name"
              {...register("name", { required: "Name is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-2">{errors.name.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="email">
              Your Email
            </label>
            <input
              id="email"
              type="email"
              {...register("email", {
                required: "Email is required",
                pattern: {
                  value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                  message: "Invalid email address",
                },
              })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-2">{errors.email.message}</p>
            )}
          </div>
          <div>
            <label className="block text-sm font-medium mb-1" htmlFor="message">
              Your Message
            </label>
            <textarea
              id="message"
              rows="4"
              {...register("message", { required: "Message is required" })}
              className="w-full px-3 py-2 border border-gray-300 rounded-md bg-gray-800 text-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            {errors.message && (
              <p className="text-red-500 text-sm">{errors.message.message}</p>
            )}
          </div>
          <button
            type="submit"
            className="w-full px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-colors"
          >
            Send your message
          </button>
        </form>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 text-[#0a192f]"
          onClick={() => setIsModalOpen(false)} // Close modal when clicking outside
        >
          <div
            className="bg-white p-6 rounded-md text-center shadow-xl max-w-md"
            onClick={(e) => e.stopPropagation()} // Prevent closing when clicking inside the modal
          >
            <h2 className="text-2xl font-bold mb-4">Thank you!</h2>
            <p className="text-lg mb-4">
              Your message has been sent. I'll get back to you soon! 😊✉️
            </p>
            <button
              onClick={() => setIsModalOpen(false)}
              className="mt-4 px-4 py-2 bg-blue-700 text-white rounded-md hover:bg-blue-600 transition-colors"
            >
              Talk Soon!
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Contact;
