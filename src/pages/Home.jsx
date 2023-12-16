import HeroSection from "../components/HeroSection";
import Cards from "../components/Cards";
import Info from "../components/Info";
import Me from "../components/Me";
import Scroll from "./SmoothScrolling";

function Home() {
  return (
    <div>
      {/* <Scroll /> */}
      <HeroSection />
      <Cards />
      <Info />
      <Me />
    </div>
  );
}

export default Home;
