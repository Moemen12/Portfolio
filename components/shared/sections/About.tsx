"use client";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, styles, textVariant } from "@/lib/utils";
import { services } from "@/constants";
import Image, { StaticImageData } from "next/image";
import { Tilt } from "react-tilt";
import SectionWrapper from "@/app/(root)/SectionWrapper";

const ServiceCard = ({
  title,
  icon,
}: {
  index: string;
  title: string;
  icon: StaticImageData;
}) => {
  return (
    <Tilt className="xs:w-[250px] w-full">
      <motion.div
        variants={fadeIn("right", "spring", 0.5, 0.75)}
        className="w-full green-pink-gradient p-[1px] rounded-[20px] shadow-card"
      >
        <div className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col">
          <Image src={icon} alt={title} className="w-16 h-16 object-contain" />
          <h3 className="text-white text-[20px] font-bold text-center">
            {title}
          </h3>
        </div>
      </motion.div>
    </Tilt>
  );
};

const About = () => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Introduction</p>
        <h2 className={`${styles.sectionHeadText}`}>Overview.</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-secondary text-[17px] max-w-3xl leading-[30px]"
      >
        Experienced Full-Stack Developer with a strong background in React.js,
        MongoDB, Nest.js, and Laravel. Proficient in building scalable
        applications and RESTful APIs, ensuring optimal performance and
        scalability. Skilled in implementing responsive design principles and
        maintaining code integrity through rigorous testing practices. Adept at
        collaborating with diverse teams to deliver innovative solutions and
        meeting project deadlines.
      </motion.p>
      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service) => (
          <ServiceCard key={service.title} index={service.title} {...service} />
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
