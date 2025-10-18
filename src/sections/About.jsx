import React from "react";
import Orb from "../components/Orb";

const About = () => {
  return (
    <div className="h-screen w-full relative mt-40">
      <div style={{ width: "100%", height: "600px", position: "relative" }}>
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>
    </div>
  );
};

export default About;
