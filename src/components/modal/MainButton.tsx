"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import { GiGiftOfKnowledge } from "react-icons/gi";
import Link from "next/link";

const style = {
  position: "absolute" as "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",

  bgcolor: "#ffffff",
  border: "2px solid #191a25",
  borderradius: "20px",
  boxShadow: 24,
  pt: 2,
  px: 4,
  pb: 3,
};

export default function MainButton() {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div className="flex justify-start ">
      <Button
        onClick={handleOpen}
        className=" textModale w-[200px] text-[18px] font-medium flex  justify-center gap-2 items-center rounded-xl py-2 px-3"
      >
        بدأ الرحلة <GiGiftOfKnowledge />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        className="rounded-md"
      >
        <Box sx={{ ...style }} className="rounded-md">
          <div className="w-full max-w-md rounded-md">
            <h3 className="text-center text-[22px] font-medium pt-[50px] pb-[30px]">
              سياسة البرنامج
            </h3>
            <div>
              <ul className="pb-[15px] text-[16px]">
                <li className="pb-[8px]">
                  - الالتزام بحضور البرنامج التدريبي كاملا بجزئيه النظري والعملي
                </li>
                <li className="pb-[8px]">- الالتزام بأوقات الجلسات التدريبية وأماكن إقامتها</li>
                <li className="pb-[8px]">
                  - تقديم كامل الواجبات والاختبارات المؤهلة للحصول على الشهادة
                </li>
                <li className="pb-[8px]">- الالتزام بآداب التواصل مع المدرب والمتدربين</li>
                <li className="pb-[8px]">
                  - المشاركة الإيجابية خلال البرنامج والتعاون مع أعضاء البرنامج
                </li>
                <li className="pb-[8px]">
                  - اتباع التوجيهات المقدمة من قبل منسق البرنامج التأهيلي.
                </li>
                <li>
                  - المشاركة في قياس أثر التدريب والتغذية الراجعة للمتدربين
                </li>
                <li className="pb-[8px]">
                  - الرجوع إلى مقدم الخدمة في حال الحاجة للدعم أو إبداء أي
                  ملاحظة
                </li>
                <li className="pb-[8px]">
                  - يمنع استخدام قنوات التواصل الرسمية وغير الرسمية بطريقة سلبية
                  تجاه البرنامج أو أحد أعضاءه
                </li>
              </ul>
            </div>
            <div className="pb-[15px] text-[16px]">
              <h3 className="pb-[8px] text-[20px]">سياسة الغياب و الحضور :</h3>
              <p>
                يتم الاستبعاد من البرنامج في حالة غياب 14% من مدة البرنامج او
                تأخير باجمالي ساعة واحدة خلال مدة البرنامج كاملة
              </p>
            </div>
            <div className="w-full flex justify-center gap-5 my-[15px]">
              <Link href="https://ia.edu.sa/tourism/booking/personality-traits-test">
                <button className=" textModale w-[200px] text-[18px] font-medium flex hover:bg-[#9b85ec] justify-center gap-2 items-center rounded-xl py-2 px-3">
                  قبول الاتفاقية
                </button>
              </Link>
              <button onClick={handleClose} className=" textModale w-[200px] text-[18px] font-medium flex hover:bg-[#9b85ec] justify-center gap-2 items-center rounded-xl py-2 px-3">
                رفض الاتفاقية{" "}
              </button>
            </div>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
