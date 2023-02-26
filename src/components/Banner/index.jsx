import React from "react";

import Product from "../..//assets/produto.png";

import { TypeAnimation } from "react-type-animation";

import { motion } from "framer-motion";

import { fadeIn } from "../../variants";

const Banner = () => {
  return (
    <section className="min-g-[85vh] lg:min-h-[78vh] flex items center">
      <div className="container mx-auto ">
        <div>
          <div>
            <motion.div
              variants={fadeIn("up", 0.3)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
              className="mb-10 text-[36px] lg:text-[60px] font-secondary font-semibold"
            >
              <span className="mr-4 text-black">Apollo:</span>
              <TypeAnimation
                sequence={[
                  "Alta precisão.",
                  2000,
                  "Baixo custo.",
                  2000,
                  "Controle e tomada de decisão.",
                  2000,
                  "O poder do sol na palma da sua mão.",
                  2000,
                ]}
                speed={50}
                className="text-accent"
                wrapper="span"
                repeat={Infinity}
              />
            </motion.div>
          </div>
          <motion.div
            variants={fadeIn("up", 0.7)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex lg:flex-row flex-col items-center justify-between"
          >
            <p className="text-xl lg:text-2xl text-justify mr-20">
              Com o nosso produto, é possível medir a irradiação solar e enviar
              esses dados para uma plataforma online. Essa plataforma é
              interativa e permite que os clientes visualizem os dados solares
              de maneira fácil e compreensível. Além disso, oferecemos um
              suporte de qualidade para auxiliar nossos clientes em qualquer
              questão relacionada à coleta e interpretação de dados solares.
            </p>
            <img src={Product} alt="" className="w-96" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
