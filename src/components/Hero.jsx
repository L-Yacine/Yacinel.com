import { motion } from "framer-motion";

import { styles } from "../styles";

import { yacine, bwmap, worldmap } from "../assets";

const Hero = () => {
  return (
    <>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={bwmap}
          alt="world map"
          className="w-full h-full sm:block hidden "
        />
      </div>
      <div className="absolute top-0 left-0 z-0 h-[100vh] w-screen">
        <img
          src={worldmap}
          alt="world map"
          className="w-full h-full sm:hidden block object-cover"
        />
      </div>
      <section
        className="relative flex sm:flex-row flex-col w-full h-screen mx-auto 
        sm:bg-hero bg-hero-mobile overflow-hidden"
      >
        <div
          className={`absolute inset-0 sm:top-[250px] top-[150px] 
          lg:top-[150px] xl:top-[250px] ${styles.paddingX} 
          max-w-7xl mx-auto flex flex-row items-start
          justify-between gap-3`}
        >
          <div className="flex flex-col justify-center items-center mt-5 ml-3">
            <div className="w-5 h-5 rounded-full bg-[#0a0a0a] " />
            <div className="w-1 sm:h-80 h-40 bw-gradient " />
          </div>

          <div>
            <h1
              className={`${styles.heroHeadText} text-eerieBlack font-poppins uppercase`}
            >
              Hi, I&apos;m <br />
              <span
                className="bg-gradient-to-tl from-gray-900 via-gray-800 to-tertiary bg-clip-text text-transparent xs:text-[60px] sm:text-[90px] 
                text-tertiary text-[50px] font-overcame-bold
                font-extrabold uppercase xl:text-[140px] xl:leading-[120px]"
              >
                Yacine
              </span>
            </h1>
            <p className={`${styles.heroSubText} mt-2 text-[#484443] mr-9`}>
              Software Engineer | Web Developer based in Algeria.{" "}
            </p>
          </div>
          <div
            className="w-screen flex flex-col items-start 
            justify-center sm:-ml-[3rem] xxs:mt-4"
          ></div>

          <div></div>
        </div>

        <div
          className="absolute xs:bottom-10 bottom-32 w-full 
          flex justify-center items-center"
        >
          <a href="#about">
            <div
              className="w-[35px] h-[64px] rounded-3xl border-4 
             border-dim flex
            justify-center items-start p-2"
            >
              <motion.div
                animate={{
                  y: [0, 24, 0],
                }}
                transition={{
                  duration: 1.5,
                  repeat: Infinity,
                  repeatType: "loop",
                }}
                className="w-3 h-3 rounded-full bg-taupe mb-1"
              />
            </div>
          </a>
        </div>

        <div>
          <img
            className="absolute bottom-0 ml-[50vw] 
            lg:ml-[65vw] md:ml-[50vw] xmd:ml-[50vw] 2xl:ml-[73vw]
            sm:h-[70vh] xs:h-[58vh]  md:h-[70vh] xl:h-[80vh]"
            src={yacine}
            alt="YacineL"
          />
        </div>
      </section>
    </>
  );
};

export default Hero;
