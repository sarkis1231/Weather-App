import React, { FormEvent, useEffect, useState } from 'react';

// Styles
import { ThemeProvider } from 'styled-components';
import { THEME } from 'styles/THEME';
import { GlobalStyles } from 'styles/global';
import { FlexContainer } from 'styles/shared.styled';

// Hooks
import { usePosition } from 'hooks/usePosition';

// Utils
import axios from 'axios';
import { getWeather } from 'utils';

// Components
import UserLocation from 'components/userLocation';
import Navbar from 'components/Navbar';

// Types
import { UserWeather } from 'types';
import Loader from 'components/Loader';

axios.defaults.baseURL = 'http://api.weatherstack.com/current';
axios.defaults.params = { access_key: 'd3b68fc53ea84c81995c5f54bf1077f1' };

function App() {
  const { latitude, longitude, error } = usePosition();
  const [data, setData] = useState<UserWeather | null>(null);
  const [inputValue, setInputValue] = useState('');

  useEffect(() => {
    if (longitude && latitude) {
      getWeather('', latitude, longitude).then((res) => {
        if (res) {
          setData(res);
        }
      });
    }
  }, [longitude, latitude]);

  const changeRegion = (value: string) => {
    setInputValue(value);
  };

  const changeLocation = (e: FormEvent) => {
    e.preventDefault();
    getWeather(inputValue)
      .then((res) => {
        if (res) {
          setData(res);
        }
      })
  };

  if (error) {
    return <Loader title={error} />;
  }

  if (!data) {
    return <Loader title="loading" />;
  }

  const {
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
  } = data;

  return (
    <>
      <ThemeProvider theme={THEME}>
        <GlobalStyles />
        <Navbar changeLocation={changeLocation} changeRegion={changeRegion} />
        <FlexContainer
          width="100%"
          alignItems="center"
          justifyContent="center"
          margin="30px 0 0"
        >
          <UserLocation
            country={country}
            description={description}
            humidity={humidity}
            img={img}
            location={location}
            precip={precip}
            pressure={pressure}
            region={region}
            temperature={temperature}
            windSpeed={windSpeed}
          />
        </FlexContainer>
      </ThemeProvider>
    </>
  );
}

export default App;
