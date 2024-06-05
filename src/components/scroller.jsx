import "./scroller.css";
import arrow from "../assets/arrow.png";
import ring from "../assets/ring.png";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const scroller = () => {
  gsap.registerPlugin(ScrollTrigger);
  useGSAP(() => {
    const winH = document.body.scrollHeight;
    gsap.to(".box2", {
      y: 0,
      scrollTrigger: {
        trigger: ".box2",
        scroller: "body",
        start: "top 85%",
        end: `top -${winH+1000}px`,
        markers: false,
        scrub: 2,
      },
    });
    gsap.to(".ring", {
      rotate: 1080,
      scrollTrigger: {
        trigger: ".box2",
        scroller: "body",
        start: "top 85%",
        end: `top -${winH}px`, // or -(winH*.4) if needed
        markers: false,
        scrub: 2,
      },
    });
  });

  return (
    <div className="scroller">
      <div className="ring">
        <img className="blend" src={ring} alt="" />
      </div>
      <div className="box">
        <div className="box1"></div>
        <div className="box2"></div>
      </div>
      <div className="blend arrow">
        <img className="arrowsvg" src={arrow} alt="↓" />
      </div>
    </div>
  );
};

export default scroller;
