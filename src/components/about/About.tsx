import React from "react";
import Container from "../Container";
// import Image from "next/image";
// import picLogo from "../../assets/images/logo.png";

const About = () => {
  return (
    <div id="about" className="w-full bg-[#013032] text-white">
      <Container>
        <div className="flex flex-col lg:flex-row lg:justify-between px-36 py-9">
          {/* <div className="w-full flex justify-center lg:justify-start animate-fadeInSlideIn">
            <img
              src="https://upload.wikimedia.org/wikipedia/ar/c/ca/%D8%B4%D8%B9%D8%A7%D8%B1_%D9%88%D8%B2%D8%A7%D8%B1%D8%A9_%D8%A7%D9%84%D8%B3%D9%8A%D8%A7%D8%AD%D8%A9_%D8%A7%D9%84%D8%B3%D8%B9%D9%88%D8%AF%D9%8A%D8%A9.svg"
              alt="شعار وزارة السياحة السعودية"
              className="w-[180px] sm:w-[200px] h-auto mb-4 md:mb-0 m-auto md:m-0"
            />{" "}
          </div> */}
          <div className="w-full mt-[24px] lg:mt-0 animate-fadeInSlideIn">
            <h2 className="text-[40px] text-[#82D9Bf] font-bold">نبذة</h2>
            <p className="text-[20px] font-medium leading-[30px]">
              يهدف هذا البرنامج التدريبي إلى أن يكون حجر الأساس لعملية تطوير
              وتأهيل المرشدين السياحيين بالمملكة العربية السعودية وبوابتهم
              للعبور إلى مجال الإرشاد السياحي.
            </p>
            <p className="text-[20px] font-medium leading-[30px] pt-[15px]">
              وقد تم تصميم هذا البرنامج باعتماد أفضل الممارسات العالمية
              والمعايير الدولية، وذلك لتطوير كوادر احترافية من المرشدين
              السياحيين، مؤهلين لتقديم تجارب غنية وممتعة من شأنها إسعاد الزوار
              وتنمية وعيهم بالثقافة السعودية.
            </p>
          </div>
        </div>
      </Container>
      <style jsx>{`
        @keyframes fadeInSlideIn {
          0% {
            opacity: 0;
            transform: translateY(20px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .animate-fadeInSlideIn {
          animation: fadeInSlideIn 1s ease-out forwards;
        }
      `}</style>
    </div>
  );
};

export default About;
