import axios from 'axios';

export async function getWeather(
  query?: string,
  latitude?: number,
  longitude?: number
) {
  const res = await axios.get('', {
    params: {
      query: `${query?.length ? query : `${latitude},${longitude}`}`,
    },
  });

  if (res.data.success === false) {
    return; // TODO I should handle validation here
  }

  const userWeather = {
    temperature: res.data.current.temperature,
    description: res.data.current.weather_descriptions[0],
    location: res.data.location.name,
    region: res.data.location.region,
    country: res.data.location.country,
    windSpeed: res.data.current.wind_speed,
    pressure: res.data.current.pressure,
    precip: res.data.current.precip,
    humidity: res.data.current.humidity,
    img: res.data.current.weather_icons,
  };
  return userWeather;
}
