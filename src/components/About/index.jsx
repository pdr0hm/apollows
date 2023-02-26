import React from "react";
import { useInView } from "react-intersection-observer";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const About = () => {
  const [ref, inView] = useInView({ threshold: 0.5 });
  return (
    <section className="section" id="about" ref={ref}>
      <div className="container mx-auto">
        <div className="flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1  bg-about bg-contain bg-no-repeat mix-blend-darken h-[640px] bg-top"
          ></motion.div>
          <motion.div
            variants={fadeIn("left", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.5 }}
            className="flex-1"
          >
            <h2 className="h2 text-accent">Sobre a empresa</h2>
            <h3 className="h3 mb-4">Apollo - Soluções em Dados Solares</h3>
            <p className="mb-6">
              A Apollo é uma empresa sediada em Criciúma, sul de Santa Catarina.
              Nosso produto é uma solução inovadora que permite a medição
              precisa e confiável da irradiação solar. Com nossa tecnologia, é
              possível coletar dados em tempo real e enviar essas informações
              para uma plataforma online, onde nossos clientes podem acessar e
              analisar as informações de maneira clara e concisa. Com essa
              solução, ajudamos empresas e organizações a tomar decisões mais
              informadas em relação à energia solar, permitindo que elas
              aproveitem ao máximo o potencial dessa fonte de energia renovável.
              Estamos comprometidos em oferecer serviços de alta qualidade e em
              contribuir para o crescimento do mercado de energia solar em todo
              o mundo.{" "}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
