import img1 from "../../../assets/banner/background.jpg";
import img2 from "../../../assets/banner/banner.png";

import { Navigation } from "swiper";
import "swiper/css/navigation";
import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";

const Banner = () => {
  return (
    <div className="">
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <div className=" md:h-screen">
            <img className=" w-[100%]" src={img1} alt="sliderimg" />
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" md:h-screen">
            <img className=" w-[100%]" src={img2} alt="sliderimg" />
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Banner;
