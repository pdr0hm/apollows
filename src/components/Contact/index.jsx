import React from "react";
import { motion } from "framer-motion";
import { fadeIn } from "../../variants";

const Contact = () => {
  return (
    <section className=" py-16 lg:section" id="contact">
      <div className="container mx-auto">
        <div className="flex flex-col lg:flex-row">
          <motion.div
            variants={fadeIn("right", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 flex justify-start items-center"
          >
            <div>
              <h4 className="text-3xl uppercase text-accent font-bold mb-2 tracking-wide">
                Entre em contato
              </h4>
              <h2 className="text-[45px] uppercase lg:text-[90px] leading-none mb-12">
                Seja nosso <br />
                parceiro
              </h2>
            </div>
          </motion.div>
          <motion.form
            variants={fadeIn("left", 0.3)}
            initial="hidden"
            whileInView={"show"}
            viewport={{ once: false, amount: 0.3 }}
            className="flex-1 border rounded-2xl flex flex-col gap-y-6 pb-24 p-6"
          >
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all
              "
              placeholder="Nome *"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all
              "
              placeholder="Email"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all
              "
              placeholder="Número para contato"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all
              "
              placeholder="Nome da empresa"
            />
            <input
              className="bg-transparent border-b py-3 outline-none w-full placeholder:text-black focus:border-accent transition-all
              "
              placeholder="Assunto"
            />
            <textarea
              className="bg-transparent border-b py-12 outline-none w-full placeholder:text-black focus:border-accent transition-all resize-none mb-12
              "
              placeholder="Mensagem"
            ></textarea>
            <button className="btn btn-lg">Enviar mensagem</button>
          </motion.form>
        </div>
        Ou se preferir, clique no ícone abaixo e nos chame pelo whatsapp.
      </div>
    </section>
  );
};

export default Contact;
