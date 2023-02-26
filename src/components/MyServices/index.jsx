import React from "react";
import { fadeIn } from "../../variants";
import { motion } from "framer-motion";

const MyServices = () => {
  const services = [
    {
      title: "Produto",
      description:
        "Nosso produto é dividido em duas partes. Uma parte ficará no campo ou no local de medição solar, que se comunicará com a outra parte que ficará em contato com a internet. A comunicação é feita por um dispositivo de alta tecnologia que alcança até 5 KM de distância. ",
    },
    {
      title: "Precisão",
      description:
        "Superando a precisão de satélites , nosso produto foi feito para ter a maior precisão possível com um baixo custo, cerca de 99,89% de confiabilidade. ",
    },
    {
      title: "Plataforma Web",
      description:
        "Após a medição, os dados são enviados para uma plataforma web interativa e de fácil entendimento, onde o usuário poderá realizar filtros e fazer o acompanhamento.",
    },
    {
      title: "Suporte",
      description:
        "Você contará com suporte para quaisquer e eventual  dúvida  ou situação. ",
    },
  ];

  return (
    <section className="section" id="myServices">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row ">
          <motion.div
            variants={fadeIn("right", 0.5)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.7 }}
            className="flex-1 lg:bg-services lg:bg-bottom  bg-no-repeat mix-blend mb-12 lg:mb-0"
          >
            <h2 className="h2 text-accent mb-6">nossos serviços</h2>
            <h3 className="h3 max-w-[455px] mb-16">
              Somos uma empresa inovadora, que busca aprimorar o controle e
              informação de uma das áreas que mais cresce no Brasil e no mundo.
            </h3>
          </motion.div>

          <div className="flex-1">
            <motion.div
              variants={fadeIn("up", 0.5)}
              initial="hidden"
              whileInView={"show"}
              viewport={{ once: false, amount: 0.7 }}
            >
              {services.map((service, index) => {
                const { title, description } = service;
                return (
                  <div
                    className="border-b border-black/20 h-[180px] mb-[15px]"
                    key={index}
                  >
                    <div className="max-w-[476px]">
                      <h4 className="text-[20px] tracking-wider font-primary font-semibold mb-6">
                        {title}
                      </h4>
                      <p className="font-secondary leading-tight">
                        {description}
                      </p>
                    </div>
                    <div></div>
                  </div>
                );
              })}
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MyServices;
