import { useRef, useState, useEffect } from "react";
import { motion, useMotionValue, useSpring, animate } from "motion/react";

const springValues = {
  damping: 30,
  stiffness: 100,
  mass: 2,
};

export default function TiltedCard({
  imageSrc,
  altText = "Tilted card image",
  captionText = "",
  containerHeight = "300px",
  containerWidth = "100%",
  scaleOnHover = 1.1,
  rotateAmplitude = 16, // ميل أكثر وضوحًا عند التحريك اليدوي
  showMobileWarning = true,
  showTooltip = true,
  overlayContent = null,
  displayOverlayContent = false,
}) {
  const ref = useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const rotateX = useSpring(useMotionValue(0), springValues);
  const rotateY = useSpring(useMotionValue(0), springValues);
  const scale = useSpring(1, springValues);
  const opacity = useSpring(0);
  const rotateFigcaption = useSpring(0, {
    stiffness: 350,
    damping: 30,
    mass: 1,
  });

  const [lastY, setLastY] = useState(0);
  const [autoTilt, setAutoTilt] = useState(true);

  // 💫 حركة تلقائية أوضح وأكثر ديناميكية
  useEffect(() => {
    if (!autoTilt) return;

    const controlsX = animate(rotateX, [0, 10, 0, -10, 0], {
      duration: 4, // أسرع
      repeat: Infinity,
      ease: "easeInOut",
    });

    const controlsY = animate(rotateY, [0, -10, 0, 10, 0], {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut",
    });

    return () => {
      controlsX.stop();
      controlsY.stop();
    };
  }, [autoTilt, rotateX, rotateY]);

  function handleMouse(e) {
    if (!ref.current) return;
    setAutoTilt(false); // إيقاف الحركة التلقائية عند التفاعل

    const rect = ref.current.getBoundingClientRect();
    const offsetX = e.clientX - rect.left - rect.width / 2;
    const offsetY = e.clientY - rect.top - rect.height / 2;

    const rotationX = (offsetY / (rect.height / 2)) * -rotateAmplitude;
    const rotationY = (offsetX / (rect.width / 2)) * rotateAmplitude;

    rotateX.set(rotationX);
    rotateY.set(rotationY);

    x.set(e.clientX - rect.left);
    y.set(e.clientY - rect.top);

    const velocityY = offsetY - lastY;
    rotateFigcaption.set(-velocityY * 0.6);
    setLastY(offsetY);
  }

  function handleMouseEnter() {
    scale.set(scaleOnHover);
    opacity.set(1);
    setAutoTilt(false);
  }

  function handleMouseLeave() {
    opacity.set(0);
    scale.set(1);
    rotateX.set(0);
    rotateY.set(0);
    rotateFigcaption.set(0);
    setAutoTilt(true);
  }

  return (
    <motion.figure
      initial={{ opacity: 0, scale: 0 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1, ease: "backOut" }}
      ref={ref}
      className=" absolute top-[-80px] lg:top[40-px] right-[-70px] md:right-0 w-full h-full [perspective:1000px] flex flex-col items-center justify-center"
      style={{
        height: containerHeight,
        width: containerWidth,
      }}
      onMouseMove={handleMouse}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}>
      {showMobileWarning && (
        <div className="absolute top-4 text-center text-sm block sm:hidden">
          This effect is not optimized for mobile. Check on desktop.
        </div>
      )}

      <motion.div
        className="relative [transform-style:preserve-3d] w-[200px] h-[200px] md:w-[300px] md:h-[300px]"
        style={{
          rotateX,
          rotateY,
          scale,
        }}>
        <motion.img
          src={imageSrc}
          alt={altText}
          className="w-[200px] h-[200px] md:w-[300px] md:h-[300px] rounded-2xl border border-green-400 absolute top-0 grayscale-100 hover:grayscale-70 duration-200 left-0 object-cover will-change-transform [transform:translateZ(0)]"
          style={{
            boxShadow: "0 20px 40px rgba(0,0,0,0.25)", // ظل أقوى لعمق أكبر
          }}
        />

        {displayOverlayContent && overlayContent && (
          <motion.div className="absolute top-0 left-0 z-[2] will-change-transform [transform:translateZ(30px)]">
            {overlayContent}
          </motion.div>
        )}
      </motion.div>

      {showTooltip && (
        <motion.figcaption
          className="pointer-events-none absolute left-0 top-0 rounded-[4px] bg-white px-[10px] py-[4px] text-[10px] text-[#2d2d2d] opacity-0 z-[3] hidden sm:block"
          style={{
            x,
            y,
            opacity,
            rotate: rotateFigcaption,
          }}>
          {captionText}
        </motion.figcaption>
      )}
    </motion.figure>
  );
}
