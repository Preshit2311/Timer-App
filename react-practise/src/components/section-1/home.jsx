import React, { useEffect, useState } from "react";
import { Heart } from "lucide-react";
import Card from "./card";
import Nav from "./nav";

let Cards = [
  {
    id: 1,
    name: "Batman - The Dark Knight",
    power: "Stealth and Intelligence",
    level: 95,
    city: "Gotham",
    weapon: "Batarang",
  },
  {
    id: 2,
    name: "Bruce Wayne",
    power: "Strategic Mind & Wealth",
    level: 90,
    city: "Gotham",
    weapon: "Utility Belt",
  },
  {
    id: 3,
    name: "Batman Beyond",
    power: "Futuristic Tech Suit",
    level: 92,
    city: "Neo-Gotham",
    weapon: "Advanced Bat Suit",
  },
  {
    id: 4,
    name: "Batman - The Detective",
    power: "World's Greatest Detective",
    level: 88,
    city: "Gotham",
    weapon: "Detective Gadgets",
  },
  {
    id: 5,
    name: "Batman - The Vigilante",
    power: "Fear and Combat Skills",
    level: 97,
    city: "Gotham",
    weapon: "Batmobile",
  },
];

const Home = () => {
  const [love, setLove] = useState(false);

  function click() {
    setLove(!love);
  }


  return (
    <div>
      <div
        onClick={click}
        className="grid lg:grid-cols-3  gap-2.5 lg:w-[80%]  lg:mx-auto m-10"
      >
        {Cards.map((e) => {
          return (
            <Card
              emoji={
                <Heart
                  color={love ? "red" : "white"}
                  fill={love ? "red" : "white"}
                />
              }
              Name={e.name}
              city={e.city}
              tool={e.weapon}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Home;
