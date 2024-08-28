"use client";
import React, { useState, useEffect } from "react";
import Container from "../Container";
import { Link } from "react-scroll";
import { BsList, BsX } from "react-icons/bs";
import LoginLink from "../Links/LoginLink";
import { GiGiftOfKnowledge } from "react-icons/gi";
import { TbPhoneCall } from "react-icons/tb";
import LoginButton from "../modal/LoginButton";
import ContactUs from "../modal/ContactUs";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <header
      className={`w-full fixed top-0 left-0 py-6 z-50 transition-all duration-300 ${
        isScrolled ? "bg-transparent" : "bg-transparent"
      }`}
    >
      <Container>
        <nav>
          <div className="flex w-full justify-end items-center">
            <div className="flex items-center gap-4 ml-4">
              {/* <Link
                href="/auth/login"
                className="pl-2 text-[20px] text-center text-white"
              >
                <button className="bg-[#856edb] w-[200px] flex hover:bg-[#9b85ec] justify-center gap-2 items-center rounded-xl py-2 px-3">
                  <GiGiftOfKnowledge />
                  ابدأ رحلتك الأن
                </button>
              </Link> */}
              <LoginButton/>
              {/* <Link>
                <button className="bg-[#013032] flex hover:bg-[#6c7879] justify-center gap-2 items-center rounded-full p-2">
                  <TbPhoneCall className="text-[24px]" />
                </button>
              </Link> */}
              <ContactUs/>
            </div>
          </div>
        </nav>
      </Container>
    </header>
  );
};

export default Navbar;
