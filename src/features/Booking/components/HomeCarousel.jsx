import React from "react";
import { Carousel } from "antd";

const HomeCarousel = () => {
  return (
    <div>
      <Carousel>
        <div className="bg-slate-400 h-20">1</div>
        <div className="bg-slate-400 h-20">2</div>
        <div className="bg-slate-400 h-20">3</div>
      </Carousel>
    </div>
  );
};

export default HomeCarousel;
