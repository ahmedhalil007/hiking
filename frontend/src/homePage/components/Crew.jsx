import React, { useState } from "react";
import { crew } from "/data.json";
import { motion } from "framer-motion";

function Crew() {
  const [members] = useState(crew);
  const [value, setValue] = useState(0);

  const { name, images, bio, role } = members[value];

  return (
    <main className="crew-bg px-5 md:px-12 pb-52 md:pb-0 lg:pb-0 pt-24 md:pt-40 lg:px-40 lg:pt-52 lg:relative min-[912px]:h-screen">
      <section className="md:pt-14 text-white flex flex-wrap justify-center md:flex-col md:items-center lg:justify-between md:gap-16 lg:flex lg:items-start lg:pt-0 lg:gap-32">
        <h1 className="section-heading text-center md:text-start mb-10 md:mb-14 lg:mb-0">
          <span className="me-5 section-number"></span>
          UPOZNAJTE NAŠU EKIPU
        </h1>
        <div className="md:order-last lg:basis-1/2 lg:absolute lg:right-10 lg:bottom-0  2xl:pe-40 3xl:pe-80">
          <motion.picture
            key={value}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 1 }}
          >
            <source srcet={images.webp} type="image/webp" />
            <img className="crew-img mx-auto" src={images.png} alt={name} />
          </motion.picture>
        </div>
        <article className="text-center lg:text-start md:flex md:flex-col lg:basis-2/3">
          <hr className="opacity-30 md:hidden pb-9" />
          <div className="flex justify-center lg:justify-start gap-6 pb-9 md:pt-14 md:pb-0 md:order-last lg:fixed bottom-12 2xl:bottom-20">
            {members.map((item, index) => (
              <button
                className={`circle-btn ${value === index ? "active" : ""}`}
                key={index}
                onClick={() => setValue(index)}
              ></button>
            ))}
          </div>
          <motion.div
            className="grid gap-3"
            key={value}
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 1 }}
          >
            <h3 className=" text-white crew-subtitle 3xl:text-[40px]">
              {role}
            </h3>
            <h2 className="crew-title 3xl:text-[70px]">{name}</h2>
            <p className="pt-3 md:mx-auto lg:mx-0 lg:text-start md:w-[590px] lg:w-[444px] 3xl:w-[600px]">
              {bio}
            </p>
          </motion.div>
        </article>
      </section>
    </main>
  );
}

export default Crew;
