import Image from "next/image";
import HeroSection from "./component/HeroSection";
// import Navbar from "./component/Navbar";
// import Footer from "./component/Footer";
import FlightSearchBox from "./component/SearchBox";
import PopularDestination from "./component/PopularDestination"
export default function Home() {
  return (
    <>
      <div>
        
        <HeroSection/>
        <FlightSearchBox/>
        <PopularDestination/>
        {/* <Footer/> */}
        
        {/* <h1 className="text-right">hello world</h1>
        <h1 className="text-left">hello world</h1> */}
        {/* <HeroSection /> */}
      </div>
    </>
    
  );
}





