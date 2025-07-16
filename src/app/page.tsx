import Image from "next/image";
import HeroSection from "./component/HeroSection";
import FlightSearchBox from "./component/SearchBox";
import PopularDestination from "./component/PopularDestination"
export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 ">
        
        <HeroSection/>
        <FlightSearchBox/>
        <PopularDestination/>
        {/* <Footer/> */}
        
      </div>
    </>
    
  );
}





