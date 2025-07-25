import Image from "next/image";
import HeroSection from "./component/HeroSection";
import FlightSearchBox from "./component/SearchBox";
import PopularDestination from "./component/PopularDestination"
import PopularRoutes from "./component/PopularRoutes";
import ExtraFeatures from "./component/ExtraFeatures";

export default function Home() {
  return (
    <>
      <div className="bg-gradient-to-br from-teal-50 to-blue-50 ">
        
        <HeroSection/>
        <FlightSearchBox/>
        
        {/* <PopularDestination/> */}
        <PopularRoutes/>
        <ExtraFeatures/>
        {/* <Footer/> */}
        
      </div>
    </>
    
  );
}





