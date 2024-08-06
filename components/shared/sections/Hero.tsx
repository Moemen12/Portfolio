"use client";
// import { motion } from "framer-motion";
import { styles } from "@/lib/utils";
import React, { useEffect, useState } from "react";
// import { ComputersCanvas } from "../canvas";
import Link from "next/link";
import { ReactTyped } from "react-typed";
import Image from "next/image";
import { cv, git_square, linkdln } from "@/public/assets";

const Hero = () => {
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
    <section className="relative w-full h-screen mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
        style={{ overflowWrap: "anywhere" }}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-5 h-5 rounded-full bg-[#915eff]"></div>
          <div className="w-1 sm:h-80 h-40 violet-gradient"></div>
        </div>

        <div className="flex flex-col">
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I&apos;m{" "}
            <ReactTyped
              strings={[
                "Moemen Saadeh",
                "a Full-Stack Developer",
                "an Arduino Enthusiast",
                "a Security Explorer",
              ]}
              typeSpeed={80}
              backSpeed={60}
              loop
              className="text-[#915eff]"
            />
          </h1>
          <div>
            <p className={`${styles.heroSubText} mt-2 text-white-100`}>
              A full-stack web developer passionate about creating dynamic and
              secure web applications, with a keen interest in exploring
              security and Arduino projects, constantly seeking innovation and
              technical excellence.
            </p>
            <div className="flex items-center gap-1 mt-4">
              <Link
                href={"/assets/moemen_cv.docx"}
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src={cv}
                  alt="cv"
                  className="w-12 h-12 cursor-pointer"
                  loading="lazy"
                />
              </Link>
              <Link href={"https://github.com/Moemen12/"}>
                <Image
                  src={git_square}
                  alt="github"
                  className="w-16 h-16"
                  loading="lazy"
                />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/moemen-saadeh-707436260"}
              >
                <Image
                  src={linkdln}
                  alt="Linkdln"
                  className="w-14 h-14"
                  loading="lazy"
                />
              </Link>
            </div>
          </div>
          {/* <div>
            <h3>About</h3>
               
          </div> */}
        </div>
      </div>
      {/* {isWideScreen && (
        <> */}
      {/* <ComputersCanvas /> */}
      {/* <div className="absolute xs:bottom-10 bottom-32 w-full flex justify-center items-center">
        <Link href={"#about"}>
          <div className="w-[35px] h-[64px] rounded-3xl border-4 border-secondary flex justify-center items-start p-2">
            <motion.div
              animate={{
                y: [0, 24, 0],
              }}
              transition={{
                duration: 1.5,
                repeat: Infinity,
                repeatType: "loop",
              }}
              className="w-3 h-3 rounded-full bg-secondary mb-1"
            />
          </div>
        </Link>
      </div> */}
      {/* </>
      )} */}
    </section>
  );
};

export default Hero;
