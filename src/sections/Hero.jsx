import { useEffect, useState } from "react";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
import TiltedCard from "../components/TitledCard";
import al9wel from "../assets/images/al9wel3.jpeg";
import { FlipWords } from "../components/FlipWords";
import Aurora from "../components/Aurora";
import TextType from "../components/TextType";
import { twMerge } from "tailwind-merge";
const Hero = () => {
  const [show, setShow] = useState(true);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShow(true);
    }, 2000);
    return () => {
      clearTimeout(timer);
    };
  }, []);
  return (
    <div className="w-full h-screen sticky top-0 mx-auto  flex justify-start items-center flex-col">
      <motion.dev
        initial={{ opacity: 0 }}
        animate={{
          borderRadius: show ? "20px" : "0px",
          opacity: 1,
        }}
        transition={{ duration: 5, ease: "backOut" }}
        className="w-[97%] md:w-[95%] lg:w-[90%] bg-gray-400/20 backdrop-blur-xl mt-10 md:mt-22 round p-2 md:pb-8 relative ">
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
        <h1 style={{ marginTop: "-120px" }} className="block sm:hidden"></h1>
        <FlipWords
          words={["Portflio", "Website", "Design"]}
          className="flip sm:mt-[-20px] ml-[-6px] md:mt-[-30px] md:ml-[-12px] text-gray-200 tracking-wider text-4xl md:text-7xl "
        />
        <div className="relative w-full pl-2">
          <TextType
            text={["Text typing effect", "for your websites", "Happy coding!"]}
            as="p"
            loop={true}
            typingSpeed={75}
            pauseDuration={1500}
            showCursor={true}
            cursorCharacter="▎"
            textColors={["#166e58", "#166e58", "#166e58"]}
            className={
              "mt-6 bg-[#15131D]  text-gray-300 max-w-200 sm:max-w-80 md:max-w-90 lg:max-w-140 py-1 px-3 tracking-wider uppercase text-[14px] sm:text-[16px] md:text-[17px] lg:text-[19px]"
            }
          />
        </div>
      </motion.dev>
      <div className=" z-10 mt-5 sm:mt-30  mx-auto md:text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{
            opacity: 1,
            y: 0,
            transition: {
              duration: 1,
              delay: 0.5 + 1 * 0.2,
              ease: [0.25, 0.4, 0.25, 1],
            },
          }}>
          <h1 className="text-[28px]  sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl font-bold mb-6 md:mb-8 tracking-tight">
            <span className="bg-clip-text hh text-transparent bg-gradient-to-b from-gray-200 to-white/10">
              Elevate Your Digital Vision
            </span>
            <br />
            <span
              className={twMerge(
                "bg-clip-text hh text-transparent text-[22px] sm:text-5xl md:text-5xl lg:text-6xl xl:text-7xl text-start bg-gradient-to-r from-emerald-900 via-white/90 to-green-950 "
              )}>
              Crafting Exceptional Websites
            </span>
          </h1>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
