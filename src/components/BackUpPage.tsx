"use client"
import React, { useState, useEffect } from "react";
import { FaArrowUpLong } from "react-icons/fa6";
import Container from "./Container";

const BackUpPage = () => {
  const [showButton, setShowButton] = useState(false);
  const [scrollPercent, setScrollPercent] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const scrollPercentage = (scrolled / docHeight) * 100;

      setScrollPercent(scrollPercentage);

      if (scrolled > 200) {
        setShowButton(true);
      } else {
        setShowButton(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return (
    <div>
      <Container>
        {showButton && (
          <button
            onClick={scrollToTop}
            style={{
              position: "fixed",
              bottom: "20px",
              left: "50px",
              backgroundColor: `rgba(190, 217, 191, ${scrollPercent / 100})`,
              color: "#FFF",
              border: `2px solid rgba(190, 217, 191, ${scrollPercent / 100})`,
              borderRadius: "50%",
              padding: "10px",
              cursor: "pointer",
              boxShadow: "0 4px 8px rgba(0, 0, 0, 0.2)",
              zIndex: 1000,
              transition: "background-color 0.3s ease, border-color 0.3s ease",
            }}
          >
            <FaArrowUpLong size={24} />
          </button>
        )}
      </Container>
    </div>
  );
};

export default BackUpPage;
