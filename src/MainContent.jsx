import About from "./sections/About";
import Hero from "./sections/Hero";
import Header from "./sections/Header";
import Aurora from "./components/Aurora";
const MainContent = () => {
  return (
    <div className=" w-full min-h-screen ">
      <Header />
      <div className="w-full h-[100vh] mt-20 absolute top-0 left-0 pointer-events-none">
        <Aurora
          scanlineFrequency={4.8}
          scanlineIntensity={0.87}
          warpAmount={5}
          speed={2}
          hueShift={50}
          noiseIntensity={0.15}
        />
      </div>
      <main className="w-[97%] md:w-[95%] lg:w-[90%] h-[200vh] mx-auto mt-2 border-x border-[#252134]">
        <Hero />
        <About />
      </main>
    </div>
  );
};

export default MainContent;
