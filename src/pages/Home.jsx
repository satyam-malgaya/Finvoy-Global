import React from "react";
import HomeSlider from "../components/Homeslider";
import map from '../assets/india-map.png' 
const Home = () => {
  return (
    <div>
      <div className="w-full h-[75vh] ">
        <HomeSlider height="75vh" />
      </div>
      <div className="w-full h-[110vh] flex">
       <div className="w-[55%] h-full ">
        <h1 className="text-black">About<span>Finvoy Global</span></h1>
       </div>
       <div className="w-[45%] h-full flex justify-center items-center">
        <img src={map} className="w-[70%]  object-cover object-center " alt="sorry the image is not show " />
       </div>
      </div>
    </div>
  );
};

export default Home;
