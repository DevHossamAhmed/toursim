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
      >
        <Box sx={{ ...style }}>
          <div className="w-full max-w-md">
            <h3 className="text-center text-[22px] font-medium pt-[50px] pb-[30px]">
              تسجيل الدخول
            </h3>
            <form
              action=""
              className="bg-white w-full m-auto p-10 rounded-md mb-10"
            >
              <input
                type="text"
                placeholder="اسم المستخدم"
                className="border-2 text-black w-full p-3 rounded-md focus:outline-none"
              />
              <input
                type="password"
                placeholder="ادخل كلمة المرور"
                className="border-2 text-black w-full mt-5 p-3 rounded-md focus:outline-none"
              />
              <button
                type="submit"
                className="bg-[#856edb] w-full flex my-[15px] hover:bg-[#9b85ec] justify-center gap-2 items-center rounded-xl py-2 px-3"
              >
                تسجيل الدخول
              </button>
              <button
                type="submit"
                className="bg-[#856edb] w-full flex hover:bg-[#9b85ec] justify-center gap-2 items-center rounded-xl py-2 px-3"
              >
                تسجيل حساب جديد
              </button>
              <hr />
              <div className="flex flex-col text-center mt-4">
                <Link
                  href="#"
                  className="text-[#0d6efd] text-[16px] font-medium underline"
                >
                  نسيت اسم المستخدم او كلمة المرور ؟
                </Link>
                <Link
                  href="#"
                  className="text-[#0d6efd] text-[16px] font-medium underline"
                >
                  تغير رقم الجوال
                </Link>
              </div>
            </form>
          </div>
        </Box>
      </Modal>
    </div>
  );
}
