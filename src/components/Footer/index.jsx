import React from "react";
import { FaInstagram, FaWhatsapp } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="py-2 border-t z-1">
      <div className="container mx-auto">
        <div className="flex justify-between items-center ">
          <div className="text-sm">
            <p>Apollo - Soluções em Dados Solares</p>
            <p>CNPJ: 49.136.446/0001-37 </p>
            <p>CEP: 88813-292</p>
            <p> Rua Antonio Dare, 129 - Bairro Brasília. Criciúma, SC</p>
          </div>

          <div className="z-50">
            <a
              href="https://wa.me/5548991500793?text=Ol%C3%A1%21+Gostaria+de+saber+mais+sobre+Apollo+-+Solu%C3%A7%C3%B5es+em+Dados+Solares."
              target="_blank"
              className="cursor-pointer"
            >
              <FaWhatsapp size={30} />
            </a>
            <a
              href="https://www.instagram.com/apollodadossolares"
              target="_blank"
              className="cursor-pointer"
            >
              <FaInstagram size={30} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
