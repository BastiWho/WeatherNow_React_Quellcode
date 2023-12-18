import React, { useState, useEffect } from 'react';
import './Cities.css'

const Cities = () => {
  const cities = ["New York", "Tokio", "Deine Stadt", "Berlin", "Madrid", "Deine Stadt","Rom", "Sydney", "Deine Stadt"];
  const [currentCityIndex, setCurrentCityIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentCityIndex((prevIndex) => (prevIndex + 1) % cities.length);
    }, 3000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className='textBody'>
      <p class="findtext">Finde hier das Wetter <br /> für <span Class="cities">{cities[currentCityIndex]}</span></p>
    </div>
  );
};

export default Cities;
