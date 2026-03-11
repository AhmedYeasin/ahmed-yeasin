import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaGithub, FaLinkedin, FaFacebook } from "react-icons/fa"; 
import Swal from "sweetalert2";
import toast from "react-hot-toast";
import { FaXTwitter } from "react-icons/fa6";

const Contact = () => {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_8gwuay8", 
        "template_gmcdfcb", 
        form.current,
        "ejwuFXkg8GGSahtYd",
      )
      .then(
        (result) => {
          Swal.fire({
  title: "Drag me!",
  icon: "success",
  draggable: true
});
          e.target.reset();
        },
        (error) => {
          toast.error("This didn't work.");
        },
      );
  };

  return (
    <section id="contact" className="py-20 bg-base-100" data-aos="fade-up">
      <div className="container mx-auto px-5">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold border-b-4 border-primary inline-block pb-2">
            Get In Touch
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-12">
          {/* Left Side: Contact Form */}
          <div className="card bg-base-200 shadow-2xl p-8">
            <form ref={form} onSubmit={sendEmail} className="space-y-4">
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Your Name</span>
                </label>
                <input
                  type="text"
                  name="user_name"
                  placeholder="Enter your name"
                  className="input input-bordered focus:input-primary"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Your Email</span>
                </label>
                <input
                  type="email"
                  name="user_email"
                  placeholder="Enter your email"
                  className="input input-bordered focus:input-primary"
                  required
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <span className="label-text text-lg">Message</span>
                </label>
                <textarea
                  name="message"
                  className="textarea textarea-bordered h-32 focus:textarea-primary"
                  placeholder="Write your message..."
                ></textarea>
              </div>
              <button
                type="submit"
                className="btn btn-primary w-full text-white text-lg"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Right Side: Socials & Info */}
          <div className="flex flex-col justify-center space-y-8">
            <div>
              <h3 className="text-3xl font-bold text-secondary mb-4">
                Let's Talk!
              </h3>
              <p className="text-lg">
              "I am currently looking for new opportunities and collaborations. If you have a project that needs a creative React developer or just want to connect, feel free to drop a message!"
              </p>
            </div>

            <div className="space-y-4">
              <p className="flex items-center gap-4 text-lg">
                <span className="font-bold text-primary">Email:</span>{" "}
                ahmetchatgami@gmail.com
              </p>
              <p className="flex items-center gap-4 text-lg">
                <span className="font-bold text-primary">Location:</span> Chattogram,
                Bangladesh
              </p>
            </div>

            {/* Social Icons */}
            <div className="flex gap-6 text-4xl">
              <a
                href="https://github.com/AhmetChatgami"
                target="_blank"
                className="hover:text-primary hover:scale-110 duration-300 transition-all"
              >
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/ahmed-yeasin-ramadan-7040541a2/"
                target="_blank"
                className="hover:text-primary hover:scale-110 duration-300 transition-all"
              >
                <FaLinkedin />
              </a>
              <a
                href="https://x.com/YeasinRamadan"
                target="_blank"
                className="hover:text-primary hover:scale-110 duration-300 transition-all"
              >
                <FaXTwitter />
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                className="hover:text-primary hover:scale-110 duration-300 transition-all"
              >
                <FaFacebook />
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
