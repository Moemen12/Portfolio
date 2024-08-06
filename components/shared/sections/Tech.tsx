"use client";
import { technologies } from "@/constants";
import React, { Suspense, useEffect, useState } from "react";
import { BallCanvas } from "../canvas";
import { TechnologiesParams } from "@/types";
import SectionWrapper from "@/app/(root)/SectionWrapper";
import { motion } from "framer-motion";
import { styles, textVariant } from "@/lib/utils";
import Image from "next/image";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import Spinner from "@/components/Spinner";

const Tech: React.FC = (): React.JSX.Element => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);
  const [clickedTech, setClickedTech] = useState<string | null>(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const handleResize = () => {
        setIsWideScreen(window.innerWidth > 767);
      };

      // Set the initial state
      handleResize();

      // Add event listener
      window.addEventListener("resize", handleResize);

      // Cleanup event listener on component unmount
      return () => {
        window.removeEventListener("resize", handleResize);
      };
    }
  }, []);

  const handleClick = (name: string) => {
    setClickedTech((prev) => (prev === name ? null : name));
  };

  return (
    <>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>What I have learnt so far</p>
        <h2 className={`${styles.sectionHeadText}`}>Skills 💻.</h2>
      </motion.div>
      {/* {isWideScreen ? (
        <div className="flex flex-wrap justify-center gap-10">
          {technologies.map((technology: TechnologiesParams) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon.src} />
            </div>
          ))}
        </div>
      ) : ( */}
      <>
        <div className="grid grid-cols-2 xs:grid-cols-3 sm:grid-cols-6 mt-20 gap-3">
          {technologies.map((technology: TechnologiesParams) => (
            <TooltipProvider key={technology.name}>
              <Tooltip>
                <TooltipTrigger>
                  <div
                    className={`bg-[#1D1836] grid place-items-center rounded-xl h-full transition-transform duration-300 ${
                      clickedTech === technology.name
                        ? "scale-105 bg-violet-950"
                        : ""
                    }`}
                    onClick={() => handleClick(technology.name)}
                  >
                    <Suspense fallback={<Spinner />}>
                      <Image
                        src={technology.icon}
                        alt={technology.name}
                        className="w-4/5 h-4/5 object-contain"
                      />
                    </Suspense>
                  </div>
                </TooltipTrigger>
                <TooltipContent className="bg-[#111827] border-transparent rounded">
                  <p>{technology.name}</p>
                </TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ))}
        </div>
      </>
      {/* } */}
    </>
  );
};

export default SectionWrapper(Tech, "skills");
