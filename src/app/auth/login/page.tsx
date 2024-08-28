import Container from "@/components/Container";
import Link from "next/link";
import React from "react";

const login = () => {
  return (
    <div className="w-full h-[100vh] bg-[#133a39] flex justify-center items-center">
      <Container>
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
              className="w-full mt-10 text-[18px] font-medium bg-[#00dbac] text-white rounded-md"
            >
              تسجيل الدخول
            </button>
            <button
              type="submit"
              className="w-full mt-5 text-[18px] font-medium bg-[#00dbac] text-white rounded-md"
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
      </Container>
    </div>
  );
};

export default login;
