import Aurora from "./components/Aurora";
import Header from "./sections/Header";
import MainContent from "./sections/MainContent";

const App = () => {
  return (
    <>
      <div className="w-[97%] md:w-[95%] lg:w-[90%] mx-auto border-x border-[#252134]">
        <Header />
        <div className="w-full h-screen absolute top-0 left-0 pointer-events-none">
          <Aurora
            scanlineFrequency={4.8}
            scanlineIntensity={0.87}
            warpAmount={5}
            speed={2}
            hueShift={50}
            noiseIntensity={0.15}
          />
        </div>
        <div className="w-full absolute top-0 left-0 pointer-events-none bg-gray-950/40"></div>
        <MainContent />
      </div>
    </>
  );
};
export default App;
