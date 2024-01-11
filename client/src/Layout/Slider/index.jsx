import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import "./index.scss";

const Slider = () => {
  return (
    <section id="sliderSection">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl4.jpg" />
          <div className="sliderTxt">
            <div className="header">
              <i>Floral</i>
              <div className="description">
                <h2>Excellent bouquets for you</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl7.jpg" />
          <div className="sliderTxt">
            <div className="header">
              <i>Fixed-height Slider</i>
              <div className="description">
                <h2>Excellent bouquets for you</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <img src="https://mobirise.com/extensions/floram4/floral-studio/assets/images/sl1-967x725.jpg" />
          <div className="sliderTxt">
            <div className="header">
              <i>Floral</i>
              <div className="description">
                <h2>Excellent bouquets for you</h2>
              </div>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
};

export default Slider;
