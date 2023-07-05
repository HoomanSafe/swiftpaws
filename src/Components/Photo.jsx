import React from "react";
import car from "../assets/car.png";
import Banner2 from "../assets/banner2.png";
import Banner3 from "../assets/banner3.png";

const Photo = () => {
  return (
    <section className="py-small w-full text-black">
      <div className="container flex flex-col justify-center items-center">
        <a href="" data-aos="zoom-in" data-aos-duration="1500">
          <img src={car} alt="" />
        </a>

        <article className="w-full gap-14 grid md:grid-cols-2 justify-between items-center">
          <a href="" data-aos="zoom-out" data-aos-duration="1500">
            <img src={Banner2} alt="" />
          </a>
          <a href="">
            <img
              src={Banner3}
              alt=""
              data-aos="zoom-out"
              data-aos-duration="1500"
            />
          </a>
        </article>
      </div>
    </section>
  );
};

export default Photo;
