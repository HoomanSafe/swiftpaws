import React from "react";
import phone from "../assets/logo2.png";

const About = () => {
  return (
    <section className="w-full py-small bg-white text-amber-600" id="about">
      <div className="container flex justify-center items-center flex-col ">
        <h1
          className="font-Header text-6xl break-all text-orange-100 lg:text-9xl uppercase"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          about us
        </h1>

        <section className="grid grid-cols-1 gap-16 lg:grid-cols-2 mt-12 justify-between items-center">
          <img
            src={phone}
            alt=""
            data-aos="zoom-out"
            data-aos-duration="1200"
          />

          <article className="flex flex-col gap-8 items-start">
            <h1
              className="font-Header text-4xl uppercase lg:text-6xl leading-[140%]"
              data-aos="zoom-in"
              data-aos-duration="900"
            >
              History. - Mission
            </h1>
            <p
              className="text-black leading-[32px]"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              SwiftPaws  is a clever blend of cutting-edge technology and timeless cultural charm. It's not just a community-based token; this is an AI-driven revolution, deeply embedded in the Binance Smart Chain. SwiftPaws is poised to become a Crypto Titan by 2025. Swiftpaws is not just a token, 
              it is the future of crypto.
            </p>
            <a
              href="https://t.me/SwiftPaws_tg"
              className=" px-8 py-4 bg-amber-500 rounded shadow text-white uppercase font-Header"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              telegram
            </a>
          </article>
        </section>
      </div>
    </section>
  );
};

export default About;
