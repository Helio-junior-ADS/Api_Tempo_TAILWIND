import React from "react";
import propTypes from 'prop-types';


const Card = ({data}) => {
  const {
    location,
    current
  } = data
 
  return (
    <div className=" bg-white p-6 mt-10 rounded-lg shadow-md min-w-[220px]">
      <div className="text-center ">
        <span className="block text-lg font-bold text-slate-700 ">{location.name}</span>
        <span className=" text-slate-400 text-sm font-medium">{`${location.region},${location.country}`}</span>        
      </div>
      <div className="font-bold text-slate-700 justify-center flex mt-4 mb-2">
        <span className="text-8xl">{current.temp_c}</span>
        <span className="text-2xl mt-2">°C</span>
      </div>
      <div className="flex justify-center flex-col items-center">
        <img src={current.condition.icon} alt='weather icon'/>
        <span className="text-slate-700 font-medium">Nublado</span>
      </div>
    </div>
  );
};

export default Card;

Card.propTypes = {
  data: propTypes.object,
}.isRequired;


