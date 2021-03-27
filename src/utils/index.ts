import axios from 'axios';

export async function getWeather(latitude: number, longitude: number) {
  try {
    const res = await axios.get('', {
      params: {
        query: `${latitude},${longitude}`,
      },
    });

    const userWeather = {
      temperature: res.data.current.temperature,
      description: res.data.current.weather_descriptions[0],
      location: res.data.location.name,
      region: res.data.location.region,
      country: res.data.location.country,
      wind_speed: res.data.current.wind_speed,
      pressure: res.data.current.pressure,
      precip: res.data.current.precip,
      humidity: res.data.current.humidity,
      img: res.data.current.weather_icons,
    };

    return userWeather;
  } catch (err) {
    return err;
  }
}
