import logo from "../assets/images/logo.svg";
import BubbleMenu from "../components/BubbleMenu";
import Socials from "../components/Socials";
// eslint-disable-next-line no-unused-vars
import { motion } from "motion/react";
const navItems = [
  {
    label: "About Me",
    href: "#aboutMe",
    ariaLabel: "About Me",
    rotation: 8,
    hoverStyles: { bgColor: "#10b981", textColor: "#ffffff" },
    delay: 0.7,
  },
  {
    label: "Projects",
    href: "#projects",
    ariaLabel: "Projects",
    rotation: 8,
    hoverStyles: { bgColor: "#f59e0b", textColor: "#ffffff" },
    delay: 0.8,
  },
  {
    label: "Working On",
    href: "#workingOn",
    ariaLabel: "Working On",
    rotation: 8,
    hoverStyles: { bgColor: "#ef4444", textColor: "#ffffff" },
    delay: 0.9,
  },
];

const Header = () => {
  return (
    <motion.header
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      exit={{ y: -10, opacity: 0 }}
      transition={{ duration: 2, delay: 0, ease: "anticipate" }}
      className=" top-0 left-0 w-full z-50 bg-[#0E0C15]/70 backdrop-blur-sm border-b border-[#252134]">
      <nav className="flex justify-between items-center h-20 pr-12 md:pr-4 lg:pr-12 text-[#CAC6DD] overflow-hidden">
        <motion.a
          // initial={{ y: -50, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // exit={{ y: -10, opacity: 0 }}
          // transition={{ duration: 1, delay: 0.5, ease: "backOut" }}
          href="#home"
          className="flex items-center h-35 md:h-45 overflow-hidden">
          <img src={logo} className="h-full w-auto object-contain" alt="logo" />
        </motion.a>
        {/* smallscreens nav */}
        <motion.div
          // initial={{ y: -50, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // exit={{ y: -10, opacity: 0 }}
          // transition={{ duration: 1, delay: 0.7, ease: "backOut" }}
          className="md:hidden">
          <BubbleMenu
            items={navItems}
            menuAriaLabel="Toggle navigation"
            menuBg="#15131D"
            menuContentColor="white"
            useFixedPosition={false}
            animationEase="back.out(1.5)"
            animationDuration={0.5}
            staggerDelay={0.12}
          />
        </motion.div>
        {/* largescreens nav */}
        <div className="hidden md:block">
          <div className="flex items-center justify-center gap-2">
            {navItems.map((item) => {
              return (
                <motion.a
                  // initial={{ y: -50, opacity: 0 }}
                  // animate={{ y: 0, opacity: 1 }}
                  // exit={{ y: -10, opacity: 0 }}
                  // transition={{
                  //   duration: 1,
                  //   delay: item.delay,
                  //   ease: "backOut",
                  // }}
                  key={item.label}
                  href={item.href}
                  className="bg-[#15131D] p-3 rounded-2xl border border-[#252134] uppercase text-[12px] lg:text-sm hover:bg-[#252134] duration-200">
                  {item.label}
                </motion.a>
              );
            })}
          </div>
        </div>
        <motion.div
          // initial={{ y: -50, opacity: 0 }}
          // animate={{ y: 0, opacity: 1 }}
          // exit={{ y: -10, opacity: 0 }}
          // transition={{
          //   duration: 1,
          //   delay: 1.1,
          //   ease: "backOut",
          // }}
          className="hidden md:block">
          <Socials />
        </motion.div>
      </nav>
    </motion.header>
  );
};

export default Header;
