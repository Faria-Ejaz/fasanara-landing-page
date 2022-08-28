import React from "react";
//Elements
import ParticlesBackground from "../components/Elements/ParticlesBackground";
// Sections
import TopNavbar from "../components/Nav/TopNavbar";
import Header from "../components/Sections/Header";
import Media from "../components/Sections/Media";
import Podcasts from "../components/Sections/Podcasts";
import Event from "../components/Sections/Event";
import Contact from "../components/Sections/Contact";
import Footer from "../components/Sections/Footer"

export default function Landing() {

  return (
    <>
      <ParticlesBackground />
      <TopNavbar />
      <Header />
      <Event />
      <Media />
      <Podcasts />
      <Contact />
      <Footer />
    </>
  );
}


