import React from "react";
import mic from "../assets/mic.png";

const Mics = () => {
  return (
    <section className="py-small bg-amber-600 w-full">
      <div className="container flex justify-center items-center flex-col ">
        <h1
          className="font-Header text-6xl break-all text-orange-100 lg:text-9xl uppercase"
          data-aos="zoom-in"
          data-aos-duration="1500"
        >
          tokenomics
        </h1>
        <section className="w-full grid grid-cols-1 gap-16 lg:grid-cols-2 mt-20 justify-between items-center">
          <img src={mic} alt="" />
          <article className="flex flex-col ">
            <h3
              className="text-white text-2xl font-timmana"
              data-aos="fade-left"
              data-aos-duration="1500"
            >
              TOKEN SUPPLY: 100,000,000
            </h3>

            <div className="flex flex-col mt-10 gap-8 font-fredokaOne">
              <div className="flex flex-col gap-5">
                <div
                  data-aos="fade-right"
                  data-aos-duration="1500"
                  className="w-full h-8 justify-between items-start inline-flex"
                >
                  <div className="text-white text-[24px] font-normal leading-loose">
                    Supply
                  </div>
                  <div className=" text-[24px] font-normal leading-loose">
                    100,000,000
                  </div>
                </div>
                <div className="w-full h-5  bg-red-100 rounded-full justify-start items-center inline-flex">
                  <div className="w-11/12 h-5 relative bg-amber-300 rounded-full" />
                </div>
              </div>
              <div
                data-aos="zoom-right"
                data-aos-duration="1500"
                className="flex flex-col gap-5"
              >
                <div className="w-full h-8 justify-between items-start inline-flex">
                  <div className="text-white text-[24px] font-normal leading-loose">
                    CA
                  </div>
                  <div
                    className=" text-[24px] flex items-center gap-4 font-normal leading-loose"
                    onClick={() => {
                      navigator.clipboard
                        .writeText("0x0000000")
                        .then(() => {
                          alert("Contract Copied");
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                  >
                    0x171e..............
                  </div>
                </div>
                <div className="w-full h-5  bg-red-100 rounded-full justify-start items-center inline-flex">
                  <div className="w-4/12 h-5 relative bg-blue-400 rounded-full" />
                </div>
              </div>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Mics;
