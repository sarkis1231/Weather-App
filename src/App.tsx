import React, { useEffect, useState } from 'react';
import { ThemeProvider } from 'styled-components';
import { THEME } from 'styles/THEME';
import { GlobalStyles } from 'styles/global';
import { usePosition } from 'hooks/usePosition';
import axios from 'axios';
import { getWeather } from 'utils';

axios.defaults.baseURL = 'http://api.weatherstack.com/current';
axios.defaults.params = { access_key: 'd3b68fc53ea84c81995c5f54bf1077f1' };

function App() {
  const { latitude, longitude } = usePosition();
  const [data, setData] = useState({});
  useEffect(() => {
    if (longitude && latitude) {
      console.log('working..');
      getWeather(latitude, longitude).then((res) => {
        if (res) {
          setData((prev) => ({ ...prev, ...res }));
        }
      });
    }
  }, [longitude, latitude]);

  console.log(data);

  return (
    <>
      <ThemeProvider theme={THEME}>
        <GlobalStyles />
        <h1>Hello</h1>
      </ThemeProvider>
    </>
  );
}

export default App;
