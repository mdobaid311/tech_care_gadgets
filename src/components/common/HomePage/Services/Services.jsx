import React from "react";
import styles from "./Services.module.scss";

import service4 from "../../../../assets/services/Website Design & Development.png";

const Services = () => {
  const services = [
    {
      id: 1,
      title: "Smart Phone Repair",
      description:
        "Screen Replacement,Battery Replacement, Water Damage, Headphone Jack Repair and more.",
      imageURL:
        "https://i.pinimg.com/564x/d1/11/58/d1115805a21f0d0d171f1c909a9d7c0d.jpg",
    },
    {
      id: 2,
      title: "Laptop / Tower Repair ",
      description:
        "Water Damage, Hardware Upgrade, Software Issues, Data Recovery, Unlocking, and more.",
      imageURL:
        "https://i.pinimg.com/564x/d4/3f/d8/d43fd8f83064c800b290e0fba6a8238c.jpg",
    },
    {
      id: 3,
      title: "Gaming Console Repair",
      description: "HDMI, USB port Replacement",
      imageURL:
        "https://i.pinimg.com/564x/e2/96/67/e2966788e355d097b7e9d4910143882b.jpg",
    },
    {
      id: 4,
      title: "Website Design & Development",
      description:
        "We offer website design and development services for all types of businesses.",
      imageURL: service4,
    },
  ];

  return (
    <div className={styles.servicesContainer}>
      <h1>Our Services</h1>

      <div className={styles.services}>
        {services.map((service) => {
          return (
            <div className={styles.service} key={service.id}>
              <div className={styles.serviceImage}>
                <img src={service.imageURL} alt="" />
              </div>
              <div className={styles.servicesDetails}>
                <h2>{service.title}</h2>
                <p>{service.description}</p>
                <button>Read More</button>
              </div>
            </div>
          );
        })}
      </div>
     
    </div>
  );
};

export default Services;
