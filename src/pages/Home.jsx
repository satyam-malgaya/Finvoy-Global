import React from "react";
import HomeSlider from "../components/Homeslider";
import Mapp from "../components/mapp";
const Home = () => {
  return (
    <div>
      <div className="w-full h-[75vh] ">
        <HomeSlider height="75vh" />
      </div>
      {/* section-2........ */}
       <div>
            <Mapp/>
       </div>
      {/* section-3............ */}
      <div className="">

      </div>
    </div>
  );
};

export default Home;
