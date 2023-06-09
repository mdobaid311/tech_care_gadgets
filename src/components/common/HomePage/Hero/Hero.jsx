import React, { useEffect, useState } from "react";
import "./Hero.scss";
import image1 from "../../../../assets/hero-2.jpg";
import image2 from "../../../../assets/hero-1.jpg";
import { Link } from "react-router-dom";
import parse from "html-react-parser";

import { FaAngleLeft } from "react-icons/fa";
import { FaAngleRight } from "react-icons/fa";

import background from "../../../../assets/slides/mobile-store.jpg";
import background2 from "../../../../assets/slides/mobile-repair.jpg";
import background3 from "../../../../assets/slides/web-developer.jpg";

import axios from "axios";

const Hero = () => {
  const [current, setCurrent] = useState(0);
  const [slides, setSlides] = useState([]);

  // const slides = [
  //   {
  //     id: 1,
  //     image1: image1,
  //     image2: image2,
  //     title: "QUICK FIX FOR ALL YOUR SMART PHONES @ <span>TECHCARE GADGETS</span>",
  //     link: "/shop",
  //     buttonLabel: "SHOP NOW",
  //     background: background,
  //   },
  //   {
  //     id: 2,
  //     image1:
  //       "https://c1.wallpaperflare.com/preview/383/126/552/battery-black-background-cellphone-cellular-telephone.jpg",
  //     image2:
  //       "https://c1.wallpaperflare.com/preview/387/137/108/mobile-phone-phone-cellphone-technology.jpg",
  //     title: "All Smartphone Repairs <Span>and</Span> Services",
  //     buttonLabel: "GET IN TOUCH",
  //     link: "/contact",
  //     background: background2,
  //   },
  //   {
  //     id: 3,
  //     image1:
  //       "https://e1.pxfuel.com/desktop-wallpaper/574/84/desktop-wallpaper-net-full-stack-developer-full-stack.jpg",
  //     image2:
  //       "https://uploads-ssl.webflow.com/60cca9384ff7eaa931a24b69/60ce44133ce5aee0e6c9cac9_Mern.png",
  //     title: "Web Design <Span>and</Span> Development",
  //     buttonLabel: "KNOW MORE",
  //     link: "/contact",
  //     background: background3,
  //   },
  // ];

  useEffect(() => {
    getAllBanners();
  }, []);

  const getAllBanners = async () => {
    try {
      const res = await axios.get(
        `${import.meta.env.VITE_API_KEY}/api/v1/banner`
      );
      setSlides(res.data.banners);
    } catch (error) {
      console.log(error);
    }
  };

  // change slide every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent(current === slides?.length - 1 ? 0 : current + 1);
    }, 5000);
    return () => clearInterval(interval);
  }, [current, slides?.length]);

  return (
    <div
      className="hero"
      style={{
        backgroundImage: `url(${slides[current]?.mainImage})`,
      }}
    >
      <div className="hero__content">
        <div className="content__description">
          <h1>{slides[current]?.title ? parse(slides[current]?.title) : ""}</h1>
          <Link to={slides[current]?.buttonUrl}>
            {slides[current]?.buttonText}
          </Link>
        </div>
        <div className="content__images">
          <img src={slides[current]?.subImageOne} alt="" />
          <img src={slides[current]?.subImageTwo} alt="" />
        </div>
      </div>

      <div className="hero__controls">
        <div className="controls__dots">
          <span className={current === 0 ? "active" : ""}></span>
          <span className={current === 1 ? "active" : ""}></span>
          <span className={current === 2 ? "active" : ""}></span>
        </div>

        <div className="control__buttons">
          <button
            className="prev"
            onClick={() => {
              setCurrent(current === 0 ? slides.length - 1 : current - 1);
            }}
          >
            <FaAngleLeft />
          </button>
          <button
            className="next"
            onClick={() => {
              setCurrent(current === slides.length - 1 ? 0 : current + 1);
            }}
          >
            <FaAngleRight />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;
