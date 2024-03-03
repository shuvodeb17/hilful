import SectionTitle from "../shared/SectionTitle";
import { BiPhoneCall } from "react-icons/bi";
import { HiOutlineMail } from "react-icons/hi";
import { AiOutlineWhatsApp } from "react-icons/ai";
import { Link } from "react-router-dom";
import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import toast, { Toaster } from 'react-hot-toast';



const Contact = () => {

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_6t4nc2k', 'template_xm36eh5', form.current, {
        publicKey: 'in58eKbz2eIvSo_C6',
      })
      .then(
        () => {
          console.log('SUCCESS!');
          if('SUCCESS!'){
            toast.success('Email sent successfully')
          }
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };


  return (
    <div className="py-10">
      <div className="w-[20rem] h-[20rem] bg-gradient-to-br from-purple-500 to-pink-500 absolute top-0 right-0 -z-10 blur-[250px]"></div>
      <div className="w-[20rem] h-[20rem] bg-gradient-to-br from-yellow-500 to-rose-500 absolute top-0 left-0 -z-10 blur-[250px]"></div>
      <div className="my-container">
        <div className="">
          <SectionTitle text={"contact us"} />
        </div>

        <div className="grid gap-[7rem] md:gap-3 md:grid-cols-[1fr,_2fr] bg-white px-6 border border-zinc-200 py-12  rounded-md relative">
          {/* left  */}

          <div className="relative order-2 md:order-3">
            <h1 className="capitalize text-4xl font-medium text-zinc-700 text-center mb-12 ">
              Get in touch
            </h1>

            <div className="space-y-7 w-max mx-auto">
              <a
                href="tel:01976243616"
                className="flex items-center gap-5 flex-col md:flex-row"
              >
                <p className="text-6xl md:text-2xl text-orange-500 hover:text-orange-600 transition-all">
                  <BiPhoneCall />
                </p>
                <p className="text-3xl  text-zinc-500 md:text-xl">
                  Book a free call
                </p>
              </a>
              <Link
                to="mailto:hilfulfuzulit616@gmail.com"
                target="_blank"
                className="flex items-center gap-5 flex-col md:flex-row"
              >
                <p className="text-6xl md:text-2xl text-orange-500 hover:text-orange-600 transition-all">
                  <HiOutlineMail />
                </p>
                <p className="text-3xl  text-zinc-500 md:text-xl">Send Email</p>
              </Link>

              <Link
               to="https://wa.me/+8801976243616"
               target="_blank"
                className="flex items-center gap-5 flex-col md:flex-row"
              >
                <p className="text-6xl md:text-2xl text-orange-500 hover:text-orange-600 transition-all">
                  <Link to="https://wa.me/01976243616" className="cursor-pointer" target="_blank">
                    <AiOutlineWhatsApp />
                  </Link>
                </p>
                <p className="text-3xl  text-zinc-500 md:text-xl">
                  WhatsApp Chat
                </p>
              </Link>
            </div>
          </div>
          {/* right  */}
          <div className="order-1 md:order-4">
            <h1 className="mb-8 text-3xl text-zinc-700 font-semibold">
              Leave a message and we will contact you shortly.
            </h1>

            <form
            ref={form} onSubmit={sendEmail}
              className="relative space-y-5
            "
            >
              <div>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full border border-zinc-200 p-2 px rounded-md focus:outline-zinc-300 bg-teal-50/20"
                  name="name"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Email"
                  className="w-full border border-zinc-200 p-2 px rounded-md focus:outline-zinc-300 bg-teal-50/20"
                  name="email"
                />
              </div>
              <div>
                <input
                  type="text"
                  placeholder="Subject"
                  className="w-full border border-zinc-200 p-2 px rounded-md focus:outline-zinc-300 bg-teal-50/20"
                  name="subject"
                />
              </div>
              <div>
                <textarea
                  name="message"
                  id=""
                  rows="5"
                  className="w-full border border-zinc-200 p-2 px rounded-md focus:outline-zinc-300 bg-teal-50/20"
                ></textarea>
              </div>

              <div className=" w-full sm:w-max mx-auto  ">

                <input className="w-full sm:w-max border border-orange-500 py-2 px-4 rounded-md drop-shadow-sm  text-orange-500 font-semibold hover:bg-orange-500 hover:text-white transition-all" type="submit" value='Send' />
              </div>
            </form>
          </div>
        </div>
      </div>
      <Toaster/>
    </div>
  );
};

export default Contact;
