import Aurora from "./components/Aurora";
import Header from "./components/Header";
import MainContent from "./components/MainContent";

const App = () => {
  return (
    <>
      <div
        id="header"
        className="w-[97%] md:w-[95%] lg:w-[90%] h-screen mx-auto border-x-3 border-[#252134]">
        <Header />
        {/* <div className="w-full h-screen absolute top-0 left-0 pointer-events-none">
          <Aurora
            animationType="rotate3d"
            intensity={2}
            speed={0.5}
            distort={1.0}
            paused={false}
            offset={{ x: 0, y: 0 }}
            hoverDampness={0.25}
            rayCount={24}
            mixBlendMode="lighten"
            colors={["#28a495", "#105163", "#ffffff"]}
          />
        </div> */}
        <MainContent />
      </div>
    </>
  );
};
export default App;
