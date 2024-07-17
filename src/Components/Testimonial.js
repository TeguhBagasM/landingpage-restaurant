import React from "react";
import ProfilePic from "../Assets/teguh-testi.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">What Our Customers Say</h1>
        <p className="primary-text">
          Hear from our satisfied customers about their experience with us.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="profile" className="profile-pic" />
        <p>
          "The food here is absolutely amazing! Every dish is bursting with flavor and the presentation
          is top-notch. The service is friendly and fast, making every visit a delightful experience.
          Highly recommend the seafood platter and the signature dessert!"
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Teguh Bagas M</h2>
      </div>
    </div>
  );
};

export default Testimonial;
