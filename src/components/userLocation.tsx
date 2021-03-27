import React, { FC } from 'react';

import { FlexContainer } from 'styles/shared.styled';

import { UserWeather } from 'types';
import styled from 'styled-components';

const ImageContainer = styled.div`
  img {
    width: 100px;
    height: 100px;
    border-radius: 10px;
  }
`;

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
  <FlexContainer
    width="100%"
    maxWidth="900px"
    justifyContent="space-between"
    flexWrap
    alignItems="center"
  >
    <FlexContainer
      width="100%"
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-between"
    >
      <div>
        <h1>
          {temperature}
          <sup>o</sup>C , {description}
        </h1>
        <h4>{location}</h4>
        <p>
          {region} , {country}
        </p>
      </div>

      <ImageContainer>
        <img src={img} alt="weather" />
      </ImageContainer>
    </FlexContainer>

    <FlexContainer
      width="100%"
      alignItems="center"
      justifyContent="space-between"
      margin="30px 0 0"
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
