import { useState, useEffect } from "react";
import { RevealOnScroll } from "../RevealOnScroll";
import emailjs from "emailjs-com";
import {
  FaEnvelope,
  FaPhone,
  FaLinkedin,
  FaGithub,
  FaArrowUp,
} from "react-icons/fa";

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const [showArrow, setShowArrow] = useState(false); // Show scroll-up arrow

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        import.meta.env.VITE_SERVICE_ID,
        import.meta.env.VITE_TEMPLATE_ID,
        e.target,
        import.meta.env.VITE_PUBLIC_KEY
      )
      .then(() => {
        alert("Message Sent!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() =>
        alert("Oops! Something went wrong. Please try again.")
      );
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.innerHeight + window.scrollY;
      const bottomThreshold = document.body.offsetHeight * 0.8;
      setShowArrow(scrollPosition >= bottomThreshold);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <section
        id="contact"
        className="min-h-screen flex items-center justify-center py-20"
      >
        <RevealOnScroll>
          <div className="px-4 w-full min-w-[300px] md:w-[500px] sm:w-2/3 p-6">
            <h2 className="text-3xl font-bold mb-8 bg-gradient-to-r from-blue-500 to-cyan-400 bg-clip-text text-transparent text-center">
              Get In Touch
            </h2>

            {/* Contact Form */}
            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="relative">
                <input
                  type="text"
                  id="name"
                  name="name"
                  required
                  value={formData.name}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500"
                  placeholder="Name..."
                  onChange={(e) =>
                    setFormData({ ...formData, name: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <input
                  type="email"
                  id="email"
                  name="email"
                  required
                  value={formData.email}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500"
                  placeholder="example@gmail.com"
                  onChange={(e) =>
                    setFormData({ ...formData, email: e.target.value })
                  }
                />
              </div>

              <div className="relative">
                <textarea
                  id="message"
                  name="message"
                  required
                  rows={5}
                  value={formData.message}
                  className="w-full bg-white/5 border border-white/10 rounded px-4 py-3 text-white transition focus:outline-none focus:border-blue-500"
                  placeholder="Your Message..."
                  onChange={(e) =>
                    setFormData({ ...formData, message: e.target.value })
                  }
                />
              </div>

              <button
                type="submit"
                className="w-full bg-blue-500 text-white py-3 px-6 rounded font-medium transition relative overflow-hidden hover:-translate-y-0.5 hover:shadow-[0_0_15px_rgba(59,130,246,0.4)]"
              >
                Send Message
              </button>
            </form>

            {/* Contact Icons */}
            <div className="flex justify-center space-x-6 mt-6 text-gray-300">
              <a
                href="mailto:rajakesavamadhavan.m@gmail.com"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaEnvelope className="text-blue-400 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a href="tel:+919894894700">
                <FaPhone className="text-blue-400 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://www.linkedin.com/in/raja-kesava-madhavan-m-52467a294/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaLinkedin className="text-blue-400 text-2xl hover:scale-110 transition-transform" />
              </a>
              <a
                href="https://github.com/RKM2307"
                target="_blank"
                rel="noopener noreferrer"
              >
                <FaGithub className="text-blue-400 text-2xl hover:scale-110 transition-transform" />
              </a>
            </div>
          </div>
        </RevealOnScroll>

        {/* Scroll to Top Arrow */}
        {showArrow && (
          <a
            href="#home"
            className="fixed bottom-3 right-6 bg-blue-500 text-white p-3 rounded-full shadow-lg hover:bg-blue-600 transition-opacity opacity-0 animate-fade-in"
            aria-label="Scroll to top"
          >
            <FaArrowUp />
          </a>
        )}
      </section>

      {/* Footer */}
      <footer className="w-full text-center py-6 mt-10 border-t border-white/10 text-gray-400 text-sm">
        © {new Date().getFullYear()} Raja Kesava Madhavan M. All rights reserved.
      </footer>
    </>
  );
};
