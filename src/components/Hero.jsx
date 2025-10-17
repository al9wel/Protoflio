import { useEffect, useState } from "react";
import { motion } from "motion/react";
import TiltedCard from "./TitledCard";
import al9wel from "../assets/images/al9wel3.jpeg";
import { FlipWords } from "./FlipWords";
const Hero = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <>
      {show ? (
        <motion.dev
          animate={{
            borderRadius: show ? "12px" : "0px",
          }}
          transition={{ duration: 1, ease: "backOut" }}
          className="w-[97%] md:w-[95%] lg:w-[90%] bg-gray-400/20 backdrop-blur-xl round m-0 p-0 h-100 relative ">
          <TiltedCard
            imageSrc={al9wel}
            altText="Kendrick Lamar - GNX Album Cover"
            captionText="AL9WEL"
            containerHeight="300px"
            containerWidth="300px"
            rotateAmplitude={12}
            scaleOnHover={1.2}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={true}
            overlayContent={
              <p className="tilted-card-demo-text hhh  leading-3 text-gray-200 backdrop-blur-md p-2 rounded-md mt[-10px]">
                Salem Alswil
              </p>
            }
          />
          <FlipWords
            words={["Portflio", "Website", "Design"]}
            className="flip mt-[-20px] ml-[-6px] md:mt-[-30px] md:ml-[-12px] text-gray-200 tracking-wider text-4xl md:text-7xl "
          />
          <p className="mt-2 text-gray-300 max-w-45 sm:max-w-80 md:max-w-90 lg:max-w-140 p-2 tracking-wider uppercase text-[12px] sm:text-[16px] md:text-[17px] lg:text-[19px]">
            hello my name is salem alswil im{" "}
            <span className=" text-teal-800 font-bold">frontend</span> devlolper
            welcom
          </p>
        </motion.dev>
      ) : (
        <>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1, delay: 0.6, ease: "backOut" }}
            className="w-[97%] md:w-[95%] lg:w-[90%] bg-gray-400/20 backdrop-blur-xl round m-0 p-0 h-20"></motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1, delay: 0.7, ease: "backOut" }}
            className="w-[97%] md:w-[95%] lg:w-[90%] bg-gray-400/20 backdrop-blur-xl round m-0 p-0 h-20"></motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1, delay: 0.8, ease: "backOut" }}
            className="w-[97%] md:w-[95%] lg:w-[90%] bg-gray-400/20 backdrop-blur-xl round m-0 p-0 h-20"></motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1, delay: 0.9, ease: "backOut" }}
            className="w-[97%] md:w-[95%] lg:w-[90%] bg-gray-400/20 backdrop-blur-xl round m-0 p-0 h-20"></motion.div>
          <motion.div
            initial={{ y: -50, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: -10, opacity: 0 }}
            transition={{ duration: 1, delay: 1, ease: "backOut" }}
            className="w-[97%] md:w-[80%] lg:w-[90%] bg-gray-400/20 backdrop-blur-xl round m-0 p-0 h-20"></motion.div>
        </>
      )}
    </>
  );
};

export default Hero;
