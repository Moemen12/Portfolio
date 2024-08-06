"use client";
import { fadeIn, styles, textVariant } from "@/lib/utils";
import React from "react";
import { motion } from "framer-motion";
import { testimonials } from "@/constants";
import { TestimonialParams } from "@/types";
import Image from "next/image";
import SectionWrapper from "@/app/(root)/SectionWrapper";

const FeedbackCard = ({
  index,
  testimonial,
  name,
  designation,
  company,
  image,
}: TestimonialParams & { index: number }) => (
  <motion.div
    variants={fadeIn("", "spring", index * 0.5, 0.75)}
    className="bg-black-200 p-10 rounded-3xl xs:w-[320px] w-full"
  >
    <p className="text-white font-black text-[48px]">&quot;</p>
    <div className="mt-1">
      <p className="text-white tracking-wider text-[18px]">{testimonial}</p>
      <div className="mt-7 flex justify-between items-center gap-1">
        <div className="flex-1 flex flex-col">
          <p className="text-white font-medium text-[16px]">
            <span className="blue-text-gradient">@</span> {name}
          </p>
          <p className="mt-1 text-secondary text-[12px]">
            {designation} of {company}
          </p>
        </div>

        <Image
          loading="lazy"
          src={image}
          width={40}
          height={40}
          alt={`feedback-${name}`}
          className="w-10 h-10 rounded-full object-cover"
        />
      </div>
    </div>
  </motion.div>
);

const Feedbacks = () => {
  return (
    <div className="mt-12 bg-black-100 rounded-[20px]">
      <div
        className={`${styles.padding} bg-tertiary rounded-2xl min-h-[300px]`}
      >
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>What others say</p>
          <h2 className={styles.sectionHeadText}>Testimonials.</h2>
        </motion.div>
      </div>

      <div className={`${styles.paddingX} -mt-20 pt-14 flex flex-wrap gap-7`}>
        {testimonials.map((testimonial: TestimonialParams, index: number) => (
          <FeedbackCard key={testimonial.name} index={index} {...testimonial} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(Feedbacks, "Feedback");
