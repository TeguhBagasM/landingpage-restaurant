import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Your Meals",
      text: "Explore our diverse menu and pick your favorite meals made from fresh, quality ingredients.",
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: "Customize your meal plans to fit your schedule and dietary preferences. We offer flexible options for every taste.",
    },
    {
      image: DeliveryMeals,
      title: "Fast Delivery",
      text: "Enjoy quick and reliable delivery services right to your doorstep. We ensure your meals arrive fresh and on time.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">How It Works</p>
        <h1 className="primary-heading">Explore Our Process</h1>
        <p className="primary-text">
          Discover how easy it is to enjoy delicious meals with our simple and efficient process.
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
