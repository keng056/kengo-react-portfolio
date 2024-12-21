import React from "react";
import Header from "./Header";
import VideoPlayer from "./VideoPlayer";
import CenterText from "./CenterText";
import Slider from "./Slider";
import Contact from "./Contact";
import Footer from "./Footer";
import "../../src/App.css";
import Lightbox from "./LightBox/LightBoxMain";

const All = () => {
  return (
    <div>
      <header>
        <Header/>
      </header>
      <div id="mainvisual">
        <VideoPlayer />
        <CenterText />
      </div>
      <section className="py-5 bg-light border-bottom border-1 border-secondary">
        <Slider/>
      </section>
      <section>
        <Lightbox />
      </section>
      <section className="py-5 bg-white border-bottom border-2 border-secondary">
        <Contact />
      </section>
      <footer className="py-5 bg-dark border-bottom border-2 text-white text-center">
        <Footer />
      </footer>
    </div>
  );
};
export default All;
