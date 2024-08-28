import Image from "next/image";
import React from "react";
import Link from "next/link";
import {
  FaLinkedinIn,
  FaMobileAlt,
  FaTwitter,
  FaWhatsapp,
} from "react-icons/fa";
import { AiOutlineCopyrightCircle } from "react-icons/ai";
import { BiLogoFacebook } from "react-icons/bi";

import Container from "../Container";
import FrequentlyAskedQuestions from "../frequently-asked-questions/FrequentlyAskedQuestions";

const Footer = () => {
  return (
    <footer className=" w-full    z-20 ">
      <FrequentlyAskedQuestions />
      <Container>
        <div className="w-full flex flex-col xl:flex-row py-3 items-center justify-between">
          <div className="flex  gap-4 xl:gap-8  items-center  cursor-pointer text-end left-0">
            <Link
              href="https://ia.edu.sa/call"
              className="flex text-[#82D9Bf] cursor-pointer w-[30px] h-[30px] rounded-full border-[2px] border-[#82D9Bf]
                      items-center text-center m-auto justify-center
                      "
            >
              <FaWhatsapp />
            </Link>
            <Link
              href="tel:8003011100"
              className="flex text-[#82D9Bf] cursor-pointer w-[30px] h-[30px] rounded-full border-[2px] border-[#82D9Bf]
                      items-center text-center m-auto justify-center
                      "
            >
              <FaMobileAlt />
            </Link>

            <Link
              href="https://www.linkedin.com/company/iainvestacademy/"
              className="flex text-[#82D9Bf] cursor-pointer w-[30px] h-[30px] rounded-full border-[2px] border-[#82D9Bf]
                      items-center text-center m-auto justify-center
                      "
            >
              <FaLinkedinIn />
            </Link>
            <Link
              href="https://twitter.com/IAinvestacademy"
              className="flex text-[#82D9Bf] cursor-pointer w-[30px] h-[30px] rounded-full border-[2px] border-[#82D9Bf]
                      items-center text-center m-auto justify-center
                      "
            >
              <FaTwitter />
            </Link>

            <Link
              href="https://www.facebook.com/IAinvestacadmy?_rdc=1&_rdr"
              className="flex text-[#82D9Bf] cursor-pointer w-[30px] h-[30px] rounded-full border-[2px] border-[#82D9Bf]
                      items-center text-center m-auto justify-center
                      "
            >
              <BiLogoFacebook />
            </Link>
          </div>
          <div className=" flex flex-col-reverse md:flex-row m-auto gap-4  items-center mb-[10px] xl:mb-0">
            <div className="">
              <Link
                href={"/"}
                className="flex text-[12px] sm:text-[14px] text-[#82D9Bf] items-center gap-1"
              >
                البرنامج التدريبي للارشاد السياحي
                <AiOutlineCopyrightCircle />
              </Link>
            </div>
          </div>
          <div></div>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
