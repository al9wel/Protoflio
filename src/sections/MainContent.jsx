import About from "./About";
import Hero from "./Hero";

const MainContent = () => {
  return (
    <main className="w-full min-h-screen mt-25 flex justify-start items-center flex-col ">
      <Hero />
      <About />
    </main>
  );
};

export default MainContent;
