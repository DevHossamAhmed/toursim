"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import pic from "../assets/images/logo.png";

const Logo = () => {
  const router = useRouter();

  return (

    <Image
      src={pic}
      alt="logo"
      className=" cursor-pointer"
      height="50"
      width="100"
      onClick={() => router.push("/")}
    />
  );
};

export default Logo;
