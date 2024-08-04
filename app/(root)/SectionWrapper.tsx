import React from "react";
import { motion } from "framer-motion";
import { staggerContainer, styles } from "@/lib/utils";

const SectionWrapper = (Component: React.ComponentType, idName: string) => {
  return function HOC() {
    return (
      <motion.section
        variants={staggerContainer(0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, amount: 0.25 }}
        className={`${styles.padding} max-w-7xl mx-auto`}
        id={idName}
      >
        <span className="hash-span" id={idName}>
          &nbsp;
        </span>
        <Component />
      </motion.section>
    );
  };
};

export default SectionWrapper;
