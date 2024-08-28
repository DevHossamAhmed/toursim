import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import slide03 from "../../assets/images/slider03.jpg";
import slide04 from "../../assets/images/slider04.jpg";
import slide05 from "../../assets/images/slider05.jpg";
import slide06 from "../../assets/images/slider06.jpg";
import slide07 from "../../assets/images/slider07.jpg";
import slide08 from "../../assets/images/slider08.jpg";
import Image from "next/image";
import styles from "./Main.module.css";
import MainButton from "../modal/MainButton";
import StagesButton from "../modal/StagesButton";

const Main: React.FC = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    adaptiveHeight: true,
    appendDots: (dots: React.ReactNode) => (
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          width: "100%",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <ul style={{ margin: "0px" }}> {dots} </ul>
      </div>
    ),
  };

  const slides = [
    { src: slide03, text: "أهلا بك في البرنامج التأهيلي", title: "للإرشاد السياحي" },
    { src: slide04, text: "أهلا بك في البرنامج التأهيلي", title: "للإرشاد السياحي" },
    { src: slide05, text: "أهلا بك في البرنامج التأهيلي", title: "للإرشاد السياحي" },
    { src: slide06, text: "أهلا بك في البرنامج التأهيلي", title: "للإرشاد السياحي" },
    { src: slide07, text: "أهلا بك في البرنامج التأهيلي", title: "للإرشاد السياحي" },
    { src: slide08, text: "أهلا بك في البرنامج التأهيلي", title: "للإرشاد السياحي" },
  ];

  return (
    <div id="home" className={styles.sliderContainer}>
      <Slider {...settings}>
        {slides.map((slide, index) => (
          <div key={index} className={styles.slideContainer}>
            <Image
              src={slide.src}
              alt={`Slide ${index + 1}`}
              className={styles.slideImage}
              layout="responsive"
              width={1920}
              height={1080}
            />
            <div className={styles.overlay}>
              <div className={styles.slideText}>
                <div>{slide.text}</div>
                <div className={styles.slideTitle}>{slide.title}</div>
                <div className="flex gap-4">
                  <StagesButton />
                  <MainButton />
                </div>
              </div>
            </div>
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Main;
