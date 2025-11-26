import React from "react";
import HomeSlider from "../components/Homeslider";
import Mapp from "../components/mapp";

import img1 from "../assets/m-1.avif";
import img2 from "../assets/m-2.avif";
import img3 from "../assets/m-3.avif";

const slides = [
  { url: img1, title: "Affordable Home Loans", subtitle: "Low interest rates" },
  { url: img2, title: "Quick Approval", subtitle: "Fast and simple" },
  { url: img3, title: "Expert Guidance", subtitle: "Best loan advisors" },
];
const Home = () => {
  return (
    <div>
      <div className="w-full h-[75vh] ">
        <HomeSlider slide={slides}/>
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
