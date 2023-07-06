import React from "react";
import car from "../assets/car.png";
import Banner2 from "../assets/banner2.png";
import Banner3 from "../assets/banner3.png";
import ReactPlayer from "react-player";

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
          <a href="" className="">
            <iframe
              title="vimeo-player"
              src="https://player.vimeo.com/video/842987937?h=8e825c0061"
              width="100%"
              height="360"
              frameborder="0"
              allowfullscreen
            ></iframe>
          </a>
          <ReactPlayer url="https://youtu.be/H-gQxhrDYj4" width="100%" />
          <ReactPlayer
            url="https://youtube.com/shorts/7cZRkb64zfc?feature=share"
            width="100%"
          />
        </article>
      </div>
    </section>
  );
};

export default Photo;
