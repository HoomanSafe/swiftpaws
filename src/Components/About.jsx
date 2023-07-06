import React from "react";
import phone from "../assets/phone.png";

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
              History. - Mission 2.0
            </h1>
            <p
              className="text-black leading-[32px]"
              data-aos="zoom-in"
              data-aos-duration="1500"
            >
              Exactly 2 years ago. one of our team members “Tyler” waited
              outside for Elon Musk to exit the courthouse. in his hand read a
              sign that said “ daddy doge 2.0 to Mars”. We asked Elon to say it
              and he did! that day daddy doge 2.0 was born on BSC. Since then
              Elon Had mentioned “daddy doge 2.0 2 more times. this Indeed
              started our mission to space. As we took the title of the first
              meme coin in space we established major partnerships and
              connections along the way. Buckle in. now we go to where no other
              crypto project had ventured before.
            </p>
            <a
              href=""
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
