import Aurora from "./components/Aurora";
import Header from "./components/Header";
import PixelBlast from "./components/PixelBlast";
import Prism from "./components/Prism";
const App = () => {
  return (
    <>
      <div
        id="header"
        className="w-[97%] md:w-[95%] lg:w-[90%] h-screen mx-auto border-x-3 border-[#252134]">
        <Header />
        <div className="w-full h-screen relative">
          {/* <PixelBlast
            variant="diamond"
            pixelSize={5}
            color="#39b399"
            patternScale={3}
            patternDensity={1.2}
            pixelSizeJitter={0.5}
            enableRipples
            rippleSpeed={0.4}
            rippleThickness={0.12}
            rippleIntensityScale={1.5}
            liquid={true}
            liquidStrength={0.12}
            liquidRadius={1.2}
            liquidWobbleSpeed={5}
            speed={0.6}
            edgeFade={0.25}
          /> */}
          <Aurora
            colorStops={["#3A29FF", "#FF94B4", "#FF3232"]}
            blend={0.5}
            amplitude={1.0}
            speed={0.5}
          />
          <div className="w-full h-screen top-0 absolute mt-20 flex justify-center items-center pointer-events-none"></div>
        </div>
      </div>
    </>
  );
};
export default App;
