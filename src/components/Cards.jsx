import React from "react";
import "../css/Cards.css";
import CardItem from "./CardItems";

function Cards() {
  return (
    <div className="cards">
      <h1>Learn to Programme !</h1>
      <div className="cards__container">
        <div className="cards__wrapper">
          <ul className="cards__items"> <CardItem
              src="images/img-1.png"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/services"
            /></ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-1.png"
              text="Explore the hidden waterfall deep inside the Amazon Jungle"
              path="/services"
            />
            <CardItem
              src="images/img-2.jpg"
              text="Travel through the Islands of Bali in a Private Cruise"
              path="/services"
            />
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              path="/services"
            />
          </ul>
          <ul className="cards__items">
            <CardItem
              src="images/img-3.jpg"
              text="Set Sail in the Atlantic Ocean visiting Uncharted Waters"
              path="/services"
            />
            <CardItem
              src="images/img-4.jpg"
              text="Experience Football on Top of the Himilayan Mountains"
              path="/products"
            />
            <CardItem
              src="images/img-8.jpg"
              text="Ride through the Sahara Desert on a guided camel tour"
              path="/sign-up"
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Cards;
