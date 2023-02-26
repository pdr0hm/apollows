import React from "react";
import { BiHome, BiHomeAlt, BiUser } from "react-icons/bi";
import { HiOutlineOfficeBuilding } from "react-icons/hi";
import {
  BsClipboardData,
  BsBriefcase,
  BsChatSquare,
  BsChatSquareFill,
  BsChatSquareText,
} from "react-icons/bs";
import { Link } from "react-scroll";

const Navbar = () => {
  return (
    <nav className="fixed bottom-2 lg:bottom-8 w-full overflow-hidden z-50">
      <div className="container mx-auto">
        <div className="w-fil bg-black/20 h-[96px] backdrop-blur-2x1 rounded-full max-w-[460px] mx-auto px-5 flex justify-between text-2x1 text-white/50">
          <Link
            to="home"
            activeClass="active"
            smooth={true}
            spy={true}
            offset={-200}
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <div className="flex flex-col justify-center items-center">
              <BiHomeAlt size={24} />
              <h3 className="text-white font-bold">Início</h3>
            </div>
          </Link>
          <Link
            to="about"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <div className="flex flex-col justify-center items-center">
              <HiOutlineOfficeBuilding size={24} />
              <h3 className="text-white font-bold">Empresa</h3>
            </div>
          </Link>
          <Link
            to="myServices"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <div className="flex flex-col justify-center items-center">
              <BsClipboardData size={24} />
              <h3 className="text-white font-bold">Serviços</h3>
            </div>
          </Link>

          {/* <Link
            to="work"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <div className="flex flex-col justify-center items-center">
              <BsBriefcase size={24} />
              <h3 className="text-white font-bold">Início</h3>
            </div>
          </Link> */}
          <Link
            to="contact"
            activeClass="active"
            smooth={true}
            spy={true}
            className="cursor-pointer w-[60px] flex items-center justify-center "
          >
            <div className="flex flex-col justify-center items-center">
              <BsChatSquareText size={24} />
              <h3 className="text-white font-bold">Contato</h3>
            </div>
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
