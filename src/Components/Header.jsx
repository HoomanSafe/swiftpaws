import React from "react";

const Header = () => {
  return (
    <header className="py-3 container  absolute top-0 w-full">
      <nav className="flex overflow-hidden  md:justify-between lg:justify-start items-center p-4 bg-orange-400 rounded-lg gap-10">
        <a
          href=""
          className="uppercase font-Header text-3xl hover:text-black"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          daddy doge 2.0
        </a>

        <ul
          className="hidden lg:flex gap-9 items-center ml-auto"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <li className="text-xl capitalize hover:text-black  transition">
            <a href="">home</a>
          </li>
          <li className="text-xl capitalize hover:text-black  transition">
            <a href="">about</a>
          </li>
          <li className="text-xl capitalize hover:text-black  transition">
            <a href="">roadmaps</a>
          </li>
          <li className="text-xl capitalize hover:text-black  transition">
            <a href="">tokenomics</a>
          </li>
        </ul>
        <a
          href=""
          className="md:block hidden px-8 py-4 bg-white rounded shadow text-amber-600 uppercase font-Header"
          data-aos="fade-left"
          data-aos-duration="900"
        >
          buy now
        </a>
      </nav>
    </header>
  );
};

export default Header;
