import React from "react";

const Card = ({Name  , tool , emoji}) => {
  return (
    <div className="">
      <div className="card text-white border border-white   ">
        <div className="img-card ">
          <img
            src="https://static.dc.com/2024-09/BATMAN-85_1080x1080_KEYART_sans-years-word_UPDATED.jpg"
            alt=""
            className=""
          />
        </div>
        <div className="middle-section text-center">
          <h3 className="font-bold text-2xl uppercase">{Name}</h3>
        </div>
        <div className="bottom text-center">
          <p>{emoji} </p>
          <h3 className="">Weapon: <span className="uppercase   font-bold">{tool}</span></h3>
        </div>
      </div>
    </div>
  );
};

export default Card;
