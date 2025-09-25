import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import { toast, ToastContainer } from "react-toastify";

const Contact = () => {
  const formRef = useRef();
  const [loading, setLoading] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    const templateParams = {
      name: formRef.current.name.value,
      email: formRef.current.email.value,
      message: formRef.current.message.value,
      time: new Date().toLocaleString(),
    };

    emailjs
      .send(
        "service_zchokfe",
        "template_92v82sh",
        templateParams,
        "iC9fd9a_DsEGqv9WJ"
      )
      .then(
        () => {
          toast.success("Message sent successfully!");
          setLoading(false);
          formRef.current.reset();
        },
        () => {
          toast.error("Failed to send message, try again.");
          setLoading(false);
        }
      );
  };

  return (
    <section
      id="contact"
      className="py-20 px-6 md:px-12 bg-gradient-to-b from-gray-100 to-gray-50 text-gray-800"
    >
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 items-start">
        {/* Left Part: Map */}
        <div className="w-full h-80 md:h-full rounded-xl overflow-hidden shadow-xl">
          <iframe
            title="My Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.676755508926!2d73.72861917457969!3d19.09477414501053!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bdb92d1a6fefb9b%3A0x1d3bde55b1c7f1b!2sAhmednagar%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            width="100%"
            height="100%"
            className="border-0"
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>

        {/* Right Part: Contact Form */}
        <div className="bg-white rounded-xl shadow-xl p-8">
          <h2 className="text-4xl font-bold mb-6 text-indigo-600">
            Contact Me
          </h2>
          <form ref={formRef} onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block mb-1 font-medium" htmlFor="name">
                Name
              </label>
              <input
                type="text"
                name="name"
                placeholder="Your Name"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:shadow-md transition-shadow"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="email">
                Email
              </label>
              <input
                type="email"
                name="email"
                placeholder="Your Email"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:shadow-md transition-shadow"
              />
            </div>
            <div>
              <label className="block mb-1 font-medium" htmlFor="message">
                Message
              </label>
              <textarea
                name="message"
                placeholder="Your Message"
                rows="5"
                required
                className="w-full border border-gray-300 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500 hover:shadow-md transition-shadow"
              ></textarea>
            </div>
            <button
              type="submit"
              disabled={loading}
              className="bg-indigo-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-indigo-500 hover:scale-105 transition-transform duration-300"
            >
              {loading ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
      <ToastContainer />
    </section>
  );
};

export default Contact;
