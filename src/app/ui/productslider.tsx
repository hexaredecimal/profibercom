"use client";

import LineSlider from "./Lineslider";


export default function Slider() {
  const images= [
    "/VaneOilPumps.PNG",
    "/PullSwitchSafety.PNG",
    "/IndustrialValvesampl.PNG",
    "/LiquidLevelMonitoring.PNG",
  ];


  return <div><div className="productslider-container">
      <p className="slider-header">Leading Industrial Equipment</p>
      <LineSlider />
    </div>

    <div className="images-list">
        {images.map((image, i) => (
            <img src={image} key={i} />
        ))}
    </div></div>;
}