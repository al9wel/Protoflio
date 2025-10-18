import { useEffect, useState } from "react";
import { motion } from "motion/react";
import TiltedCard from "../components/TitledCard";
import al9wel from "../assets/images/al9wel3.jpeg";
import { FlipWords } from "../components/FlipWords";
import TextType from "../components/TextType";
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
    <>
      <motion.dev
        animate={{
          borderRadius: show ? "12px" : "0px",
        }}
        transition={{ duration: 1, ease: "backOut" }}
        className="w-[97%] md:w-[95%] lg:w-[90%] bg-gray-400/20 backdrop-blur-xl mt-10 md:mt-22 round m-0 p-2 md:pb-8 relative ">
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

        {/* <p className="mt-2 text-gray-300 max-w-200 sm:max-w-80 md:max-w-90 lg:max-w-140 p-2 tracking-wider uppercase text-[14px] sm:text-[16px] md:text-[17px] lg:text-[19px]">
          hello my name is salem alswil im{" "}
          <span className=" text-teal-800 font-bold">frontend</span> devlolper
          welcom
        </p> */}
        <div className=" relative w-full pl-2">
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
    </>
  );
};

export default Hero;
