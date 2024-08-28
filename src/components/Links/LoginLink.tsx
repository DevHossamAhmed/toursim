import Link from "next/link";
import React from "react";

const LoginLink = () => {
  return (
    <>
      <Link href="/auth/login" className="   text-[14px] m-auto text-end mt-5">
      تسجيل الدخول
      </Link>
    </>
  );
};

export default LoginLink;
