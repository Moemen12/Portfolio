"use client";

import SectionWrapper from "@/app/(root)/SectionWrapper";
import React from "react";
import { motion } from "framer-motion";
import { fadeIn, styles, textVariant } from "@/lib/utils";
import ReactFlipCard from "reactjs-flip-card";
import FrontPackageCard from "@/components/ui/FrontPackageCard";
import BackPackageCard from "@/components/ui/BackPackageCard";
import { packages } from "@/constants";
import { PackagesParams } from "@/types";

const Package: React.FC = (): React.JSX.Element => {
  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Discover my creations</p>
        <h2 className={`${styles.sectionHeadText}`}>Packages. 📦</h2>
      </motion.div>
      <div className="flex items-center gap-4 mt-12">
        {packages.map((pkg: PackagesParams) => {
          return (
            <motion.div
              key={pkg.name}
              variants={fadeIn("right", "spring", 0.5, 0.75)}
              className="green-pink-gradient p-[1px] rounded-[20px] shadow-card xs:w-[250px] w-full h-[200px] cursor-pointer"
            >
              <ReactFlipCard
                frontComponent={<FrontPackageCard pkg={pkg} />}
                backComponent={<BackPackageCard pkg={pkg} />}
                containerCss="w-full h-full"
              />
            </motion.div>
          );
        })}
      </div>
    </>
  );
};

export default SectionWrapper(Package, "packages");
