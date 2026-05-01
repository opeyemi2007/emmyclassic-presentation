import { useEffect, useRef } from "react";
import "./App.css";

import Hero from "./components/Hero";
import About from "./components/About";
import Brands from "./components/Brands";
import WhatWeDo from "./components/WhatWeDo";
import Mission from "./components/Mission";
import WhyChoose from "./components/WhyChoose";
import Closing from "./components/Closing";

export default function App() {
  const containerRef = useRef(null);

const scrollToNext = () => {
  const container = containerRef.current;
  if (!container) return;

  const slides = container.querySelectorAll(".slide");

  const scrollTop = container.scrollTop;
  const height = container.clientHeight;

  const nextIndex = Math.min(
    Math.floor(scrollTop / height) + 1,
    slides.length - 1
  );

  container.scrollTo({
    top: nextIndex * height,
    behavior: "smooth",
  });
};

const scrollToPrev = () => {
  const container = containerRef.current;
  if (!container) return;

  const scrollTop = container.scrollTop;
  const height = container.clientHeight;

  const prevIndex = Math.max(
    Math.floor(scrollTop / height) - 1,
    0
  );

  container.scrollTo({
    top: prevIndex * height,
    behavior: "smooth",
  });
};

useEffect(() => {
  const slides = document.querySelectorAll(".slide");

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("active");
        }
      });
    },
    { threshold: 0.5 }
  );

  slides.forEach((slide) => observer.observe(slide));

  return () => {
    slides.forEach((slide) => observer.unobserve(slide));
    observer.disconnect();
  };
}, []);
  return (
    <>
      <div className="floatingLayer">
        <img src="/Gemini_Generated_Image_3gosr93gosr93gos.png" className="floatImg img1" />
        <img src="/Gemini_Generated_Image_4zyjli4zyjli4zyj.png" className="floatImg img2" />
        <img src="/Gemini_Generated_Image_hbba4xhbba4xhbba.png" className="floatImg img3" />
        <img src="/Gemini_Generated_Image_jbwckhjbwckhjbwc.png" className="floatImg img4" />
      </div>
      <div className="container" ref={containerRef}>
        <section className="slide"><Hero /></section>
        <section className="slide"><About /></section>
        <section className="slide"><Brands /></section>
        <section className="slide"><WhatWeDo /></section>
        <section className="slide"><Mission /></section>
        <section className="slide"><WhyChoose /></section>
        <section className="slide"><Closing /></section>
      </div>

      <button onClick={scrollToPrev} className="prevBtn">← Prev</button>
      <button onClick={scrollToNext} className="nextBtn">Next →</button>
    </>
  );
}