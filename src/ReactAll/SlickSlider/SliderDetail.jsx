import React from "react";
import OneCard from "./Cards/CardOne";
import TwoCard from "./Cards/CardTwo";
import ThreeCard from "./Cards/CardThree";
import FourCard from "./Cards/CardFour";
import FiveCard from "./Cards/CardFive";
import SixCard from "./Cards/CardSix";
import SevenCard from "./Cards/CardSeven";
import EightCard from "./Cards/CardEight";
import NineCard from "./Cards/CardNine";
import TenCard from "./Cards/CardTen";
import ElevenCard from "./Cards/CardEleven";
import TwelveCard from "./Cards/CardTwelve";
import ThirteenCard from "./Cards/CardThirteen";

// const SliderDetailContainer = document.querySelector(".slider-detail");

const Cards = [
  { Card: <OneCard /> },
  { Card: <TwoCard /> },
  { Card: <ThreeCard /> },
  { Card: <FourCard /> },
  { Card: <FiveCard /> },
  { Card: <SixCard /> },
  { Card: <SevenCard /> },
  { Card: <EightCard /> },
  { Card: <NineCard /> },
  { Card: <TenCard /> },
  { Card: <TenCard /> },
  { Card: <ElevenCard /> },
  { Card: <TwelveCard /> },
  { Card: <ThirteenCard /> },
];

const SliderDetail = () => {
  return (
    <div className="slider-detail">
      <ul className="d-flex">
        {Cards.map((card, index) => (
          <li key={index} id={`card-${index}`}>
            {card.Card}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SliderDetail;