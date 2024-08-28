"use client"
import React from "react";

import Image from "next/image";
import Container from "../Container";
import phototrip from "../../assets/images/trip.png"


const Programs = () => {


  return (
    <div id="Programs" className="w-full  py-9">
      <Container>
        <h2 className="text-[40px] text-[#82D9Bf] font-bold    ">رحلة المتدرب</h2>
        <div className="w-[95%]  mt-10 mx-auto">
          <Image src={phototrip} alt="phototrip" className="rounded-md" />
        </div>
      </Container>
    </div>
  );
};

export default Programs;

