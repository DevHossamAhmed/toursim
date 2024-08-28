"use client";
import { useState } from "react";
import { Link } from "react-scroll";


const StagesButton = () => {
  const [click, setClick] = useState(false);
  const closeMenu = () => setClick(false);
  return (
    <>
      <button className="textModale p-[10px] hover:bg-[#6c7879] cursor-pointer w-[200px] text-[18px] rounded-md  py-2 px-3">
        <Link
          to="TermsAndPolicies"
          spy={true}
          smooth={true}
          offset={-100}
          onClick={closeMenu}
        >
مراحل الرحلة        </Link>
      </button>
    </>
  );
};

export default StagesButton;
