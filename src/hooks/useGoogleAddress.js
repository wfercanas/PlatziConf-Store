import { useState, useEffect } from 'react';

const useGoogleAddress = (place) => {
  const [map, setMap] = useState({});
  const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${place.address}${place.city}${place.country}&key=${process.env.API_KEY_GMAPS}`;

  useEffect(async () => {
    const response = await fetch(API);
    const data = await response.json();
    setMap(data.results[0].geometry.location);
  }, []);

  return map;
};

export { useGoogleAddress };
