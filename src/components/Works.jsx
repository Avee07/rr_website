import React from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Slider from "react-slick";

import { styles } from "../styles";
import { SectionWrapper } from "../hoc";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import MyButton from '../components/MyButton';

const ProjectCard = ({ index, name, description, tags, image, demo_link }) => {
  return (
    <motion.div variants={fadeIn("up", "spring", index * 0.5, 0.75)}>
      <Tilt
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className='bg-gray-950 p-5 rounded-2xl sm:w-[360px] w-full'
      >
        <div className='relative w-full h-[230px]'>
          <img
            src={image}
            alt='project_image'
            className='w-full h-full object-cover rounded-2xl'
          />
        </div>

        <div className='mt-5'>
          <h3 className='text-white font-bold text-[24px]'>{name}</h3>
          <p className='mt-2 text-secondary text-[14px]'>{description}</p>
        </div>

        <div className='mt-4 flex flex-wrap gap-2'>
          {tags.map((tag) => (
            <p key={`${name}-${tag.name}`} className={`text-[14px] ${tag.color}`}>
              #{tag.name}
            </p>
          ))}
        </div>

        <div onClick={() => window.open(demo_link, "_blank")}>
          <MyButton>{demo_link}</MyButton>
        </div>
      </Tilt>
    </motion.div>
  );
};

const Works = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <section>
      <motion.div variants={textVariant()}>
        <p className={`${styles.sectionSubText}`}>Our work</p>
        <h2 className={`${styles.sectionHeadText}`}>Products</h2>
      </motion.div>

      <div className='w-full flex'>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className='mt-3 text-secondary text-[17px] max-w-3xl leading-[30px]'
        >
          Here are products designed to streamline operations: Pipe Mill offers efficient pipeline management with real-time tracking and maintenance. Logistics simplifies supply chain processes with optimized route planning and inventory control. Store enhances retail management with inventory tracking, sales analytics, and customer relationship tools, ensuring smooth and profitable operations.
        </motion.p>
      </div>

      <div className='mt-20'>
        <Slider {...settings}>
          {projects.map((project, index) => (
            <ProjectCard key={`project-${index}`} index={index} {...project} />
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default SectionWrapper(Works, "products");
