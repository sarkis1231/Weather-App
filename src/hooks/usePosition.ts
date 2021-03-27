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
    if (err) {
      // TODO Handle the error in better way
      setError('Please allow your browser to use location');
    }
  };
  useEffect(() => {
    const geo = navigator.geolocation;
    if (!geo) {
      setError('Geolocation is not supported');
      return;
    }
    const watcher = geo.watchPosition(onChange, onError);

    return function () {
      return geo.clearWatch(watcher);
    };
  }, []);
  return { ...position, error, loaded };
};
