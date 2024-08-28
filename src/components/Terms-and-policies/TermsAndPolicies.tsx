import Image from "next/image";
import React from "react";
import TursimArrow from "../../assets/images/tursimarrow.png";
import Container from "../Container";

const TermsAndPolicies = () => {
  return (
    <div id="TermsAndPolicies" className="w-full py-6 text-white">
      <Container>
        <h2 className="text-start text-[32px] text-[#82D9Bf] font-medium">
          أهداف البرنامج{" "}
        </h2>
        <div className="py-9 flex justify-center gap-8 flex-col lg:flex-row ">
          <div
            id="planningTourism"
            className="w-full grid gap-2 grid-cols-1 lg:grid-cols-6  "
          >
            <div className="bg-[#013032] p-3 rounded-xl z-40">
              <div className="border-[2px] step-5 w-full h-[200px] lg:h-[230px] rounded-[20px] border-third p-5 flex items-center relative">
                <div className="transform rotate-90 left-[45%] top-[145px] lg:top-[75px] lg:rotate-180 bg-[#013032] w-[70px] h-[120px] lg:w-[80px] lg:h-[80px] absolute lg:left-[-50px] z-40">
                  <Image
                    src={TursimArrow}
                    alt="TursimArrow"
                    className="w-[90px] pt-[-30px] lg:w-[80px] lg:h-[80px] m-auto"
                  />
                </div>
                <div className="w-full">
                  <h2 className="w-full text-[22px] text-center text-[#82D9Bf] pb-[15px] lg:text-start">الهدف 1</h2>

                  <p className="text-[18px]">
                    التعرف على السياحة السعودية ومنظومة السياحة السعودية
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[#013032] p-3 rounded-xl z-30 mt-[-15px] lg:mt-0">
              <div className="border-[2px] step-5 w-full h-[200px] lg:h-[230px] rounded-[20px] border-third p-5 flex items-center relative">
                <div className="transform rotate-90 left-[45%] top-[145px] lg:top-[75px] lg:rotate-180 bg-[#013032] w-[70px] h-[120px] lg:w-[80px] lg:h-[80px] absolute lg:left-[-50px] z-40">
                  <Image
                    src={TursimArrow}
                    alt="TursimArrow"
                    className="w-[90px] pt-[-30px] lg:w-[90px] lg:h-[90px] m-auto"
                  />
                </div>
                <div className="w-full">
                  <h2 className="w-full text-[22px] text-center text-[#82D9Bf] pb-[15px] lg:text-start">الهدف 2</h2>
                  <p className="text-[18px]">
                    اكتساب مهارة البحث والحصول على المعلومات من المصادر الرسمية
                    والموثقة.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#013032] p-3 rounded-xl z-20 mt-[-15px] lg:mt-0">
              <div className="border-[2px] step-5 w-full h-[200px] lg:h-[230px] rounded-[20px] border-third p-5 flex items-center relative">
                <div className="transform rotate-90 left-[45%] top-[145px] lg:top-[75px] lg:rotate-180 bg-[#013032] w-[70px] h-[120px] lg:w-[80px] lg:h-[80px] absolute lg:left-[-50px] z-40">
                  <Image
                    src={TursimArrow}
                    alt="TursimArrow"
                    className="w-[90px] pt-[-30px] lg:w-[100px] lg:h-[100px] m-auto"
                  />
                </div>
                <div className="w-full">
                  <h2 className="w-full text-[22px] text-center text-[#82D9Bf] pb-[15px] lg:text-start">الهدف 3</h2>

                  <p className="text-[18px]">
                    معرفة أهم المنتجات والجولات السياحية في المملكة.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#013032] p-3 rounded-xl z-10 mt-[-15px] lg:mt-0">
              <div className="border-[2px] step-5 w-full h-[200px] lg:h-[230px] rounded-[20px] border-third p-5 flex items-center relative">
                <div className="transform rotate-90 left-[45%] top-[145px] lg:top-[75px] lg:rotate-180 bg-[#013032] w-[70px] h-[120px] lg:w-[80px] lg:h-[80px] absolute lg:left-[-50px] z-40">
                  <Image
                    src={TursimArrow}
                    alt="TursimArrow"
                    className="w-[90px] pt-[-30px] lg:w-[100px] lg:h-[100px] m-auto"
                  />
                </div>
                <div className="ml-3 w-full">
                  <h2 className="w-full text-[22px] text-center text-[#82D9Bf] pb-[15px] lg:text-start">الهدف 4</h2>

                  <p className="text-[18px]">
                    عرض المعلومات التاريخية والثقافية بطريقة شيقة.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#013032] p-3 rounded-xl z-10 mt-[-15px] lg:mt-0">
              <div className="border-[2px] step-5 w-full h-[200px] lg:h-[230px] rounded-[20px] border-third p-5 flex items-center relative">
                <div className="transform rotate-90 left-[45%] top-[145px] lg:top-[75px] lg:rotate-180 bg-[#013032] w-[70px] h-[120px] lg:w-[80px] lg:h-[80px] absolute lg:left-[-50px] z-40">
                  <Image
                    src={TursimArrow}
                    alt="TursimArrow"
                    className="w-[90px] pt-[-30px] lg:w-[100px] lg:h-[100px] m-auto"
                  />
                </div>
                <div className="ml-3 w-full">
                  <h2 className="w-full text-[22px] text-center text-[#82D9Bf] pb-[15px] lg:text-start">الهدف 5</h2>

                  <p className="text-[18px]">
                    تنمية مهارات التواصل و الإرشاد السياحي لمختلف الفئات العمرية
                    والجنسيات.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-[#013032] p-3 rounded-xl z-0 mt-[-15px] lg:mt-0">
              <div className="border-[2px] step-5 w-full h-[200px] lg:h-[230px] rounded-[20px] border-third p-6 items-center">
                <div className="w-full py-8">
                  <h2 className="w-full text-[22px] text-center pb-[10px] text-[#82D9Bf] lg:text-start"> الهدف 6</h2>

                  <p className="text-[17px]">
                    التعرف على كيفية تقديم الخدمة المتميزة للزوار أثناء الجولات
                    وإدارة المجموعات السياحية المختلفة.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
};

export default TermsAndPolicies;
