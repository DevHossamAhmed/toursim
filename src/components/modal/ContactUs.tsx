"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Modal from "@mui/material/Modal";
import Button from "@mui/material/Button";
import Link from "next/link";
import { TbPhoneCall } from "react-icons/tb";

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

export default function ContactUs() {
  const [open, setOpen] = React.useState(false);
  const [isSubmitted, setIsSubmitted] = React.useState(false);

  const handleOpen = () => {
    setOpen(true);
    setIsSubmitted(false); // إعادة تعيين حالة الإرسال عند فتح النموذج
  };

  const handleClose = () => {
    setOpen(false);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitted(true);
    // يمكنك إضافة أي منطق إضافي هنا مثل إرسال البيانات إلى السيرفر
  };

  return (
    <div>
      <Button
        onClick={handleOpen}
        className="textContact text-[24px] w-[50px] h-[50px] rounded-full"
      >
        <TbPhoneCall className="text-[24px]" />
      </Button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
        className="rounded-md"
      >
        <Box sx={{ ...style }} className="rounded-md text-white bg-[#133a39]">
          <div className="w-full max-w-md rounded-md bg-[#133a39]">
            {isSubmitted ? (
              <h3 className="text-center text-[22px] font-medium pt-[50px] pb-[30px]">
                شكرًا، تم استقبال طلبك وسيتم الرد عليك في أقرب وقت.
              </h3>
            ) : (
              <>
                <h3 className="text-center text-[22px] font-medium pt-[50px] pb-[30px]">
                  تواصل معنا
                </h3>
                <form onSubmit={handleSubmit} className="flex flex-col md:w-[450px]">
                  <input
                    type="text"
                    placeholder="الاسم ثلاثي"
                    className="bg-[#013032] w-full m-auto p-[10px] rounded-md mb-[15px]"
                  />
                  <input
                    type="mobile"
                    placeholder="رقم الجوال"
                    className="bg-[#013032] w-full m-auto p-[10px] rounded-md mb-[15px]"
                  />
                  <input
                    type="email"
                    placeholder="البريد الالكتروني"
                    className="bg-[#013032] w-full m-auto p-[10px] rounded-md mb-[15px]"
                  />
                  <textarea
                    name=""
                    id=""
                    className="bg-[#013032] w-full m-auto p-[10px] h-[100px] rounded-md mb-[15px]"
                  ></textarea>
                  <button
                    type="submit"
                    className="textModale w-full text-[18px] font-medium flex hover:bg-[#9b85ec] justify-center gap-2 items-center rounded-xl py-2 px-3"
                  >
                    ارسال
                  </button>
                </form>
              </>
            )}
          </div>
        </Box>
      </Modal>
    </div>
  );
}
