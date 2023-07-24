import React, { useState, useEffect } from "react";
import Testimonial from "./Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import backgroundImageUrl from "/reveiw.jpg";

const Reviews = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("https://campusease-server.vercel.app/review")
      .then((res) => res.json())
      .then((data) => setUsers(data));
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div
      className="py-5 flex items-center justify-center bg-fixed h-screen relative bg-cover bg-center bg-no-repeat bg-slate-300"
      style={{ backgroundImage: `url(${backgroundImageUrl})` }}
    >
      {/* Overlay */}
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-40"></div>

        <div className="w-[20rem] md:w-full">
        <h3 className="text-center font-bold text-2xl md:text-4xl mt-5 text-white relative">
        Students Reviews
      </h3>
      <div className=" mx-auto max-w-2xl mt-10">
        <Slider {...settings}>
          {users.map((item) => (
            <Testimonial key={item.id} item={item} />
          ))}
        </Slider>
      </div>
        </div>
    </div>
  );
};

export default Reviews;
