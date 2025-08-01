import React, { useState } from "react";
import { Container, Input, TextArea } from "./index.js";
import {
  MailImage,
  Instagram,
  Linkedin,
  GitHubSign,
  LoadingImage,
} from "../assets/index.js";

function Contact() {
  const [data, setData] = useState({
    firstname: "",
    lastname: "",
    email: "",
    message: "",
  });

  const [success, setSuccess] = useState(false);

  const [loading, setLoading] = useState(false);

  const onChange = (e) => {
    setData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const onClick = async (e) => {
    setLoading(true);
    e.preventDefault();
    const scriptURL =
      "https://script.google.com/macros/s/AKfycbw-q3MGAkngZDhDPW-muswX8RpuNcK42oHIkdeW7CReHntzaTnHO1OCUmSDh08YQEng/exec";

    const formdata = new FormData();
    formdata.append("firstname", data.firstname);
    formdata.append("lastname", data.lastname);
    formdata.append("email", data.email);
    formdata.append("message", data.message);
    try {
      await fetch(scriptURL, {
        method: "POST",
        body: formdata,
      });
      setSuccess(true);
      // clearing the data
      setData({
        firstname: "",
        lastname: "",
        email: "",
        message: "",
      });

      setTimeout(() => {
        setSuccess(false);
      }, 2000);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <Container>
      <section id="contact" className="scroll-offset mt-14 sm:mt-24">
        <div className="contact-heading mb-14 sm:mb-32 flex flex-col items-center">
          <h1 className="text-mxl sm:text-2xl inline-block font-bold mb-2 dark:text-white text-black">
            Contact
          </h1>
          <div className="h-[5px] gradient-btn w-[73px] sm:w-[88px] rounded-md"></div>
        </div>
        <div className="contact-content w-full sm:flex justify-between">
          <div className="sm:w-1/2 dark:text-white text-black">
            <div className="flex items-center gap-5">
              <i class="fa-regular fa-envelope dark:text-white text-black text-md md:text-2xl"></i>
              <h1 className="font-bold text-lg sm:text-xl dark:text-white text-black">Contact with me</h1>
            </div>
            <div className="mt-8">
              <h2 className="font-bold text-md">Email</h2>
              <a className="text-md" href="mailto:pratiktele4@gmail.com">
                pratiktele4@gmail.com
              </a>
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-md">Phone</h2>
              <p className="text-md">+91 73853 78949</p>
            </div>
            <div className="mt-4">
              <h2 className="font-bold text-md">Social</h2>
              <div className="flex items-center gap-4 mt-3">
                <a href="https://github.com/pratikmtele" target="_blank">
                  <i className="fa-brands fa-square-github dark:text-white text-black text-[32px] hover:rotate-6 hover:scale-105 transition-transform ease-in-out duration-200"></i>
                </a>
                <a
                  href="https://www.linkedin.com/in/pratik-tele/"
                  target="_blank"
                >
                  <i className="fa-brands fa-linkedin dark:text-white text-black text-[32px] hover:rotate-6 hover:scale-105 transition-transform ease-in-out duration-200"></i>
                </a>
                <a href="https://www.instagram.com/pratiktele/" target="_blank">
                  <i className="fa-brands fa-square-instagram dark:text-white text-black text-[32px] hover:rotate-6 hover:scale-105 transition-transform ease-in-out duration-200"></i>
                </a>
              </div>
            </div>
          </div>
          
          <div className="mt-10 sm:mt-0 sm:w-[588px]">
            <form onSubmit={onClick}>
              <div className="sm:flex sm:gap-5">
                <Input
                  type="text"
                  label="First Name"
                  name="firstname"
                  id="firstname"
                  value={data.firstname}
                  onChange={onChange}
                />
                <Input
                  type="text"
                  label="Last Name"
                  name="lastname"
                  id="lastname"
                  value={data.lastname}
                  onChange={onChange}
                />
              </div>
              <Input
                type="email"
                label="Email"
                name="email"
                id="email"
                value={data.email}
                onChange={onChange}
                labelClass="sm:mt-5"
                className="sm:w-full sm:mt-5"
              />

              <TextArea
                type="text"
                label="Message"
                id="message"
                name="message"
                value={data.message}
                onChange={onChange}
              />

              <button className="w-[150px] sm:w-[178px] h-[43px] bg-gradient-to-r from-[#002fff] to-[#ff0099] rounded-md text-white font-semibold text-md mt-4 transition-all ease-in-out duration-300 hover:opacity-80">
                {loading ? (
                  <img
                    src={LoadingImage}
                    className="w-[30px] h-[30px] m-auto"
                    alt="Loading..."
                  />
                ) : (
                  "Send Message"
                )}
              </button>
            </form>

            {
              <div
                className={`w-full h-[50px] rounded-md mt-4 ${
                  success ? "bg-green-400" : "bg-white dark:bg-black"
                } content-center text-center text-white dark:text-black font-bold text-md`}
              >
                Message Sent
              </div>
            }
          </div>
        </div>
      </section>
    </Container>
  );
}

export default Contact;
