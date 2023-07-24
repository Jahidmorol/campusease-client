import React, { useState, useEffect } from "react";
import Testimonial from "./Testimonial";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Reviews = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/review")
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
    <div className="py-5">
      <h3 className="text-center font-bold text-2xl md:text-4xl mt-5">Students Reviews</h3>
      <div className="container mx-auto max-w-2xl mt-10">
        <Slider {...settings}>
          {users.map((item) => (
            <Testimonial key={item.id} item={item} />
          ))}
        </Slider>
      </div>
    </div>
  );
};

export default Reviews;