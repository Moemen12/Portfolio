"use client";
import { technologies } from "@/constants";
import React, { useEffect, useState } from "react";
import { BallCanvas } from "../canvas";
import { TechnologiesParams } from "@/types";
import SectionWrapper from "@/app/(root)/SectionWrapper";

const Tech: React.FC = (): React.ReactNode => {
  const [isWideScreen, setIsWideScreen] = useState<boolean>(false);

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

  return (
    <>
      {isWideScreen && (
        <div className="flex flex-wrap justify-center gap-10">
          {technologies.map((technology: TechnologiesParams) => (
            <div className="w-28 h-28" key={technology.name}>
              <BallCanvas icon={technology.icon.src} />
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default SectionWrapper(Tech, "Tech");
