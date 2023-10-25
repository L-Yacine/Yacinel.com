/* eslint-disable react-refresh/only-export-components */
/* eslint-disable react/no-unknown-property */

import { motion } from "framer-motion";
import { styles } from "../styles";
import { services } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";
import { SectionWrapper } from "../hoc";
import ServiceCard from "./ServiceCard";

const About = () => {
  return (
    <div className="-mt-[6rem]">
      <motion.div variants={textVariant()}>
        <p className={styles.sectionSubText}>Who am I exactly?</p>
        <h2 className={styles.sectionHeadText}>About me</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-4 text-gray-600 text-[18px] max-w-3xl leading-[30px] xl:text-2xl"
      >
        I am a 26 year-old Computer Science graduate with experience working
        accross multiple paradigms of software development. I have built
        projects and applications on a generally small- scale level and I am
        actively looking for oppertunities to take that to the next level.
        <br /> <span className="text-bold">Here is what I can do for you:</span>
      </motion.p>

      <div className="mt-20 flex flex-wrap gap-10">
        {services.map((service, index) => (
          <ServiceCard key={service.title} index={index} {...service} />
        ))}
      </div>
    </div>
  );
};

export default SectionWrapper(About, "about");
