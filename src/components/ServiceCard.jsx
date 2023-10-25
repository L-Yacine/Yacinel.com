/* eslint-disable react/prop-types */
import { motion } from "framer-motion";
import { fadeIn } from "../utils/motion";

const ServiceCard = ({ index, title, icon }) => {
  return (
    <motion.div
      variants={fadeIn("right", "spring", 0.5 * index, 0.75)}
      className="xs:w-[250px] w-full card-gradient p-[1px] rounded-[15px] shadow-lg"
    >
      <motion.div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-[#39253a] rounded-xl py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col "
      >
        <img src={icon} alt={title} className="w-16 h-16 object-contain" />
        <h3 className="text-[#ffd4cc] text-[18px]  font-bold text-center">
          {title}
        </h3>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
