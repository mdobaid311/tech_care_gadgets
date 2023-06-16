import React, { useEffect, useState } from "react";
import styles from "./Testimonials.module.scss";
import testimonials from "./testimonials.json";
import { AiFillCaretLeft, AiFillCaretRight } from "react-icons/ai";

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [isMobile, setisMobile] = useState(false);

  const changeTestimonials = (direction) => {
    if (direction === "left") {
      if (index === 0) {
        setIndex(testimonials.length - 3);
      } else {
        setIndex(index - 1);
      }
    } else {
      if (index === testimonials.length - 3) {
        setIndex(0);
      } else {
        setIndex(index + 1);
      }
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    setisMobile(isMobile);
    if (isMobile) {
      setIndex(0);
    }
  }, [isMobile]);

  return (
    <div className={styles.testimonials__container}>
      <h1>Testimonials</h1>
      <div className={styles.testimonials}>
        <AiFillCaretLeft
          className={styles.icon}
          onClick={() => {
            changeTestimonials("left");
          }}
        />
        <div className={styles.main__container}>
          {testimonials
            .slice(index, isMobile ? index + 1 : index + 3)
            .map((testimonial, i) => {
              return (
                <div className={styles.testimonial} key={i}>
                  <h3> {testimonial.review}</h3>
                  <div className={styles.name__time}>
                    <span>{testimonial.name}</span>
                    <span>{testimonial.datePosted}</span>
                  </div>
                </div>
              );
            })}
        </div>
        <AiFillCaretRight
          className={styles.icon}
          onClick={() => {
            changeTestimonials("right");
          }}
        />
      </div>
      <div className={styles.location_container}>
        <h1>FIND US ON MAP</h1>
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2867.8730873887343!2d-79.477479!3d44.044677!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x882ad1205a45e7f3%3A0x9bb02aca1778d240!2sTech%20Care%20Gadgets!5e0!3m2!1sen!2sin!4v1685179314614!5m2!1sen!2sin"
          loading="lazy"
          className="map"
        ></iframe>
      </div>
    </div>
  );
};

export default Testimonials;
