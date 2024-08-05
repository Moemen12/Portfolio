import { StaticImageData } from "next/image";

declare type ExperienceCardParams = {
  title: string;
  company_name: string;
  icon: StaticImageData;
  iconBg: string;
  date: string;
  points: string[];
};

declare type TechnologiesParams = {
  name: string;
  icon: StaticImageData;
};

declare type ProjectsParams = {
  name: string;
  description: string;
  tags: {
    name: string;
    backgroundColor: string;
  }[];
  image: StaticImageData;
  source_code_link: string;
  live: string;
};

declare type TestimonialParams = {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
};
