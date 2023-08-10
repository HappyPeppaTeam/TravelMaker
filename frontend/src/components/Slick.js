import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import "../css/slick.css";

function Slide({ settings, renderContent }) {

  return (
    <Slider className="mx-3 my-4" {...settings}>
      {renderContent}
    </Slider>
  );
}

export default Slide;