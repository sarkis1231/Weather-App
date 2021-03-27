import React, { FC } from 'react';

import { FlexContainer } from 'styles/shared.styled';

import { UserWeather } from 'types';

const UserLocation: FC<UserWeather> = ({
  temperature,
  description,
  location,
  region,
  country,
  windSpeed,
  pressure,
  precip,
  humidity,
  img,
}: UserWeather) => (
  <FlexContainer width="100%" alignItems="center" justifyContent="space-evenly">
    <div className="row">
      <div className="col-md-3 weather-temp">
        <h1>
          {temperature}
          <sup>o</sup>C , {description}
        </h1>
        <h4>{location}</h4>
        <p>
          {region} , {country}
        </p>
      </div>

      <div className="col-md-9">
        <img className="mainImg" src={img} alt="weather-img" />
      </div>
    </div>

    <FlexContainer
      width="60%"
      alignItems="center"
      justifyContent="space-between"
    >
      <div>
        <p>
          <b>Wind Speed</b>(km/hr)
        </p>
        <h2>{windSpeed}</h2>
      </div>

      <div>
        <p>
          <b>Preassure</b>(millibar)
        </p>
        <h2>{pressure}</h2>
      </div>

      <div>
        <p>
          <b>Precipitation</b>(mm)
        </p>
        <h2>{precip}</h2>
      </div>

      <div>
        <p>
          <b>Humidity</b>(%)
        </p>
        <h2>{humidity}</h2>
      </div>
    </FlexContainer>
  </FlexContainer>
);

export default UserLocation;
