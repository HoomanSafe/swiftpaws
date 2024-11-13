import React from "react";

const Map = () => {
  return (
    <section className="w-full py-small bg-white text-amber-600" id="roadmap">
      <div className="container flex justify-center items-center flex-col ">
        <h1
          className="font-Header text-6xl break-all text-orange-100 lg:text-9xl uppercase"
          data-aos="zoom-out"
          data-aos-duration="1500"
        >
          roadmaps
        </h1>

        <section className="w-full font-special uppercase grid mt-16 justify-between items-center gap-14 lg:grid-cols-3 grid-cols-1">
          <article
            data-aos="fade-right"
            data-aos-duration="1500"
            className="bg-gradient-to-b flex flex-col items-center justify-center from-amber-600 to-amber-600 rounded-2xl px-3 py-8"
          >
            <div className=" flex-col w-full  justify-start items-start gap-8 inline-flex">
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  token launch On bsc
                </div>
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Guerilla style marketing campaign
                </div>
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  list on cmc
                </div>
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  list on CG
                </div>
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Mars Mission
                </div>
              </div>
              <h1 className="text-center text-white text-4xl leading-10">
                PHASE 01
              </h1>
            </div>
          </article>
          <article
            data-aos="fade-up"
            data-aos-duration="1500"
            className="bg-gradient-to-b flex flex-col items-center justify-center from-amber-600 to-amber-600 rounded-2xl px-3 py-8"
          >
            <div className=" flex-col w-full  justify-start items-start gap-8 inline-flex">
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  exchange listings
                </div>
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Continued Marketing and collaborations
                </div>
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Strategic partnerships with major brands.
                </div>
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Deliver SwiftPaws tshirt and mascot
                </div>
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Top Secret Mission
                </div>
              </div>
              <h1 className="text-center text-white text-4xl leading-10">
                PHASE 02
              </h1>
            </div>
          </article>
          <article
            data-aos="zoom-in"
            data-aos-duration="1500"
            className="bg-gradient-to-b flex flex-col items-center justify-center from-amber-600 to-amber-600 rounded-2xl px-3 py-8"
          >
            <div className=" flex-col w-full  justify-start items-start gap-8 inline-flex">
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Global Marketing Takeover with billboards in London, NY, Tokyo
                </div>
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  Listings on T1 exchanges
                </div>
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  500m Market Cap
                </div>
              </div>
              <div className="justify-start items-center gap-3 inline-flex">
                <div className="w-3 h-3 relative bg-white rounded-full" />
                <div className="text-white text-[16px] font-normal">
                  SwiftPaws new awakening{" "}
                </div>
              </div>
              <h1 className="text-center text-white text-4xl leading-10">
                PHASE 03
              </h1>
            </div>
          </article>
        </section>
      </div>
    </section>
  );
};

export default Map;
