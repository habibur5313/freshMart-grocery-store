"use client";
import React, { useRef } from "react";
import emailjs from "@emailjs/browser";
import { FaWhatsappSquare } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdAddCall, MdAttachEmail } from "react-icons/md";
import Swal from "sweetalert2";

const Contact = () => {
  const form = useRef();
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_xntbqdq", "template_wrmf5y9", form.current, {
        publicKey: "6TmHFx8o2bgz1w4uZ",
      })
      .then(
        () => {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Message sent successfully",
            showConfirmButton: false,
            timer: 1500,
          });

          form.current.reset();
        },
        (error) => {
          Swal.fire({
            position: "top-center",
            icon: "error",
            title: error.text,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      );
  };
  return (
    <div className="w-11/12 mx-auto">
      <h1 className="text-3xl mt-20 font-bold text-center text-purple-600">
        Modina Shopping Complex.Basila
      </h1>
      <p className="text-xl font-semibold text-center max-w-xl mx-auto mt-4">
        Dhaka, 1207, Bangladesh
      </p>
      <iframe
        className="w-full h-[300px] sm:h-[450px] md:h-[500px] lg:h-[600px] mt-10 rounded-xl"
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d935630.478997204!2d89.36829747812499!3d23.6470977!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c727ab196265%3A0xccc828bdacff036a!2sFresh%20Mart%20Super%20Shop!5e0!3m2!1sen!2sbd!4v1739856875247!5m2!1sen!2sbd"
      ></iframe>
      <h1 className="text-4xl mt-20 font-bold text-center uppercase text-purple-600">
        Contact Us
      </h1>
      <div className="flex flex-col-reverse md:flex-row bg-purple-600 text-white py-10 sm:px-10 rounded-xl mt-10  w-full mx-auto">
        <form className="flex-1 text-black" ref={form} onSubmit={sendEmail}>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Email</span>
            </label>
            <input
              type="email"
              name="from_email"
              placeholder="email"
              className="input input-bordered text-black"
              required
            />
          </div>
          <div className="form-control">
            <label className="label">
              <span className="label-text text-white">Message</span>
            </label>
            <textarea
              name="message"
              className="textarea text-black textarea-bordered"
              placeholder="message"
            ></textarea>
          </div>
          <input
            type="submit"
            className="btn btn-primary mt-4 w-[100px]"
            value="Send"
          />
        </form>
        <div className="flex-1 mt-5 space-y-3  md:ml-10">
          <h4 className="flex items-center gap-3 text-xl font-medium">
            <FaLocationDot className="text-3xl font-semibold text-red-600" />{" "}
            Dhaka, Bangladesh.
          </h4>
          <p className="flex items-center gap-3 text-xl font-medium">
            <FaWhatsappSquare className="text-3xl font-semibold text-green-500" />{" "}
            +8801603171796
          </p>
          <p className="flex items-center gap-3 text-xl font-medium">
            <MdAddCall className="text-3xl font-semibold text-green-700" />
            +8801870549075
          </p>
          <p className="flex items-center gap-3 text-xl font-medium">
            <MdAttachEmail className="text-3xl font-semibold text-red-700" />
            habiburmamun313 @gmail.com
          </p>
        </div>
      </div>
    </div>
  );
};

export default Contact;
