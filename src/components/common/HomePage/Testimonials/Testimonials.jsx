import React from "react";
import styles from "./Testimonials.module.scss";
import testimonials from "./testimonials.json";

const Testimonials = () => {
  return (
    <div className={styles.testimonials__container}>
      <h1>Testimonials</h1>
      <div className={styles.testimonials}>
        {testimonials.slice(0, 6).map((testimonial, i) => {
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
