import React, { useState } from "react";
import { destinations } from "/data.json";
import { motion } from "framer-motion";

function Destination() {
  const [planets] = useState(destinations);
  const [value, setValue] = useState(0);

  const { name, images, description, distance, travel } = planets[value];

  return (
    <main className="destination-bg px-5 md:px-12 pb-16 lg:pb-0 xl:pb-20 pt-24 md:py-40 lg:px-40 lg:pt-52 h-full ">
      <section className="flex flex-wrap justify-between h-full gap-8 md:gap-12 ">
        <h1 className="section-heading md:text-start mx-auto md:m-0 text-4xl lg:text-5xl">
          <span className="me-5 section-number"></span>
          RAZNOVRSNE DESTINACIJE
        </h1>
        <div className="w-full text-white flex flex-wrap justify-center md:justify-items-center lg:justify-between gap-8 lg:gap-12 lg:flex-nowrap 3xl:justify-around">
          <motion.picture
            key={value}
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0 }}
            transition={{ duration: 0.8 }}
            style={{ width: "40%" }}
          >
            <source srcSet={images.webp} type="image/webp" />
            <img
              className="w-full md:w-3/4 lg:w-[600px] xl:w-[600px] 3xl:w-[600px] mx-auto xl:ps-20"
              src={images.png}
              alt={name}
            />
          </motion.picture>

          <article className="text-center lg:text-start md:w-9/12 lg:w-[444px] 3xl:w-[550px]">
            <div className="flex gap-12 justify-center lg:justify-start">
              {planets.map((item, index) => (
                <button
                  className={`submenu-text submenu-btn uppercase ${
                    value === index ? "active" : ""
                  }`}
                  key={index}
                  onClick={() => setValue(index)}
                >
                  {item.name}
                </button>
              ))}
            </div>
            <motion.div
              key={value}
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, y: 30 }}
              transition={{ duration: 0.8 }}
              style={{ width: "100%" }}
            >
              <div className="card bg-black mt-4 p-2 rounded-lg shadow-lg">
                <h2 className="section-title uppercase pt-4 text-2xl md:text-3xl lg:text-4xl">
                  {name}
                </h2>
                <p className="md:mx-auto lg:mx-0 lg:text-justify">
                  {description}
                </p>
                <hr className="my-8 opacity-30" />
                <div className="flex flex-col md:flex-row justify-center lg:justify-start gap-6 md:gap-24">
                  <div>
                    <h3 className="submenu-text">BROJ VRHOVA</h3>
                    <p className="uppercase text-white pt-4 font-bellefair text-[26px] lg:text-start 3xl:text-[34px]">
                      {distance}
                    </p>
                  </div>
                  <div>
                    <h3 className="submenu-text">NAJVEĆI VRH</h3>
                    <p className="uppercase text-white pt-4 font-bellefair text-[26px] lg:text-start 3xl:text-[34px]">
                      {travel}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </article>
        </div>
      </section>
    </main>
  );
}

export default Destination;
