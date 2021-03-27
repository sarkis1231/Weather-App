import { useState, useEffect } from 'react';

export const usePosition: () => {
  latitude: number;
  longitude: number;
  error: string;
  loaded: boolean;
} = () => {
  const [position, setPosition] = useState({ latitude: 0, longitude: 0 });
  const [error, setError] = useState('');
  const [loaded, setLoaded] = useState(false);

  const onChange: PositionCallback = ({ coords }: GeolocationPosition) => {
    setPosition({
      latitude: coords.latitude,
      longitude: coords.longitude,
    });
    setLoaded(true);
  };
  const onError: PositionErrorCallback = (err: GeolocationPositionError) => {
    setError(err.message);
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);
    // eslint-disable-next-line
    return function () {
      return geo.clearWatch(watcher);
    };
  }, []);
  return { ...position, error, loaded };
};
