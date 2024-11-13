import React, { useEffect } from "react";
import Header from "./Components/Header";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Banner from "./assets/banner4.png";
import Photo from "./Components/Photo";
import Mics from "./Components/Mics";
import Map from "./Components/Map";
import Footer from "./Components/Footer";
import Aos from "aos";
import "aos/dist/aos.css";

const App = () => {
  useEffect(() => {
    Aos.init();

    document.querySelectorAll("img").forEach((image) => {
      image.setAttribute("loading", "lazy");
    });
  }, []);
  return (
    <div className="min-h-screen w-full relative text-white font-para flex justify-center flex-col items-center overflow-x-hidden">
      <Header />
      <Hero />
      <About />
      <a href="" data-aos="zoom-out" data-aos-duration="1500">
        <img src={Banner} alt="" className="w-full" />
      </a>
      <Mics />
      <Map />
      <Footer />
    </div>
  );
};

export default App;
