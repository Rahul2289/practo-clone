import React from "react";
import "./Styles/AppointmentStyles.css";
import data from "./Data/AppointmentData";
import Slider from "react-slick";
const Appointment = () => {
  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 4,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
        },
      },
    ],
  };
  return (
    <div>
      <p className="main-title2">
        Book an appointment for an in-clinic consultation
      </p>
      <div className="container2">
        <Slider {...settings}>
          {data.map((item, i) => {
            return (
              <div key={i} className="item-container2">
                <div className="img-container2">
                  <img src={item.img} alt={item.title} className="img1" />
                </div>
                <div className="info-container2">
                  <p className="title2">{item.title}</p>
                  <p className="info-21">{item.info}</p>
                </div>
              </div>
            );
          })}
        </Slider>
      </div>
    </div>
  );
};

export default Appointment;
