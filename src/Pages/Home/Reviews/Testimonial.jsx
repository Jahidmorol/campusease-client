import React from "react";
import './Testimonial.css';

const Testimonial = ({item}) => {
  return (
    <div>
      <section className="testimonial-section bg-cyan-100">
        <div>
          <div className="testimonial">
            <p className="text-1xl font-semibold p-5">{item.review}</p>
            <div className="tests">
              <div className="test ml-5">
                <h4 className="font-semibold text-2xl text-start">
                  Name: Smith
                </h4>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Testimonial;
