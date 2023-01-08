import React from "react";
// import data
import { aboutData } from "../data";
// import motion
import { motion } from "framer-motion";
// import variants
import { plateVariants, staggerContainer, fadeIn } from "../variants";

const About = () => {
  // destructure data
  const { pretitle, title, subtitle, btnText, image } = aboutData;
  return (
    <section className="min-h-[620px]">
      <div className="container mx-auto min-h-[620px]">
        {/* text & image wrapper */}
        <motion.div
          variants={staggerContainer}
          initial="hidden"
          whileInView={"show"}
          viewport={{ once: false, amount: 0.6 }}
          className="min-h-[620px] flex flex-col lg:flex-row items-center"
        >
          {/* text */}
          <motion.div
            variants={fadeIn("right", "tween", 0.5, 1.8)}
            className="flex-1 text-center lg:text-left"
          >
            <div className="pretitle">{pretitle}</div>
            <h2 className="h2 capitalize">{title}</h2>
            <p className="mb-8 max-w-[560px]">{subtitle}</p>
            <button className="btn capitalize mx-auto lg:mx-0">
              {btnText}
            </button>
          </motion.div>
          {/* image */}
          <motion.div
            variants={plateVariants}
            className="-mb-[90px] -mr-[66px] z-10"
          >
            <img src={image} alt="" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
