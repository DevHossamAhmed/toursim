import React from "react";
import Container from "../Container";
import Image from "next/image";
import vesion from "../../assets/images/vision2030.png";
const FrequentlyAskedQuestions = () => {
  return (
    <div
      id="FrequentlyAskedQuestions"
      className="w-full bg-[#013032]  text-white py-9"
    >
      <Container>
        <div className="flex justify-around flex-col md:flex-row">
          <div>
            <Image
              src={vesion}
              alt="vesion"
              className="w-[120px] h-[100px] m-auto"
            />
          </div>
         
          <div className="flex flex-col justify-center text-center">
            <h3 className=" text-[20px] text-center pt-5 md:pt-0">
              تواصل معنا
              <span className="bg-[#00dbac] m-auto block w-[60px] h-[2px]"></span>
            </h3>
            <div className="border-r-2 border-[#00dbac] mt-[10px] m-auto">
              <p className="pr-[10px] text-[18px] pb-[10px]">
                عزيزي العميل نسعد بإستقبال
              </p>
              <p className="pr-[10px] text-[18px] pb-[10px]">
                طلباتك واستفساراتك من هنا
              </p>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default FrequentlyAskedQuestions;
