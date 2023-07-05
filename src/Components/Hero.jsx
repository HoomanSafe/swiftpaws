import React from "react";
import Logo from "../assets/logo.png";

const Hero = () => {
  return (
    <section className="py-big w-full bg-amber-600" id="hero">
      <div className="container grid grid-cols-1 lg:grid-cols-2 justify-between items-center gap-16">
        <article className="flex flex-col gap-8 items-start">
          <h1
            className="font-Header  text-white text-5xl lg:text-6xl md:leading-relaxed"
            data-aos="fade-right"
            data-aos-duration="700"
          >
            The only other token Elon ever mentioned outside of Doge!
          </h1>
          <p className="text-xl" data-aos="fade-right" data-aos-duration="500">
            We started our mission 2 years ago. now the team is back and
            launching on ETH. Same team. New Mission.
          </p>
          <a
            href=""
            className=" px-8 py-4 bg-white rounded shadow text-amber-600 uppercase font-Header"
            data-aos="fade-right"
            data-aos-duration="900"
          >
            buy now
          </a>
        </article>
        <article className=" relative flex justify-center items-center">
          <img
            src={Logo}
            alt=""
            className="z-10"
            data-aos="zoom-out"
            data-aos-duration="1500"
          />
          <div className="w-[362.47px] h-[349.75px] absolute bg-orange-300 rounded-full blur-[100px] animate-pulse" />
        </article>
      </div>
    </section>
  );
};

export default Hero;
