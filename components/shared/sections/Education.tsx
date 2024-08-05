"use client";
import SectionWrapper from "@/app/(root)/SectionWrapper";
import React from "react";
import { motion } from "framer-motion";
import { styles, textVariant } from "@/lib/utils";
import Link from "next/link";

const Education: React.FC = (): React.ReactNode => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>My academic journey</p>
        <h2 className={`${styles.sectionHeadText}`}>Education. 🏫</h2>
      </motion.div>
      <div className="flex items-center gap-4">
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-2 h-2 rounded-full bg-[#915eff]"></div>
          <div className="w-1 h-20 violet-gradient"></div>
        </div>

        <div className="flex flex-col">
          <p className="text-secondary">Nov 2021 - Jan 2024</p>
          <h3 className="font-semibold">
            Computer Programming -{" "}
            <Link
              className="text-violet-500"
              href={"https://www.usak.edu.tr"}
              target="_blank"
            >
              Uşak University
            </Link>
          </h3>
        </div>
      </div>
    </>
  );
};

export default SectionWrapper(Education, "education");
