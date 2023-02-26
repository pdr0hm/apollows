import React from "react";
import { Link } from "react-scroll";
import Logo from "../../assets/logo.png";

const Header = () => {
  return (
    <header className="py-8 mb-20" id="home">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div className="flex justify-start">
            <a href="#">
              <img src={Logo} alt="Logo apollo" className=" w-7 lg:w-full" />
            </a>
          </div>
          <Link to="contact">
            <button className="btn btn-sm">Seja nosso parceiro!</button>
          </Link>

          <button className="btn btn-sm">Área do cliente</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
