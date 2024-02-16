import { useState } from "react";
import LocationChanger from "../../components/location/locationChanger/LocationChanger";
import LocationCard from "../../components/location/locationCard/LocationCard";
import LocationHotPlace from "../../components/location/locationHotPlace/LocationHotPlace";

const Location = () => {
  const [currentLocation, setCurrentLocation] = useState(1);
  return (
    <>
      <LocationChanger
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
      <LocationCard currentLocation={currentLocation} />
      <LocationHotPlace currentLocation={currentLocation} />
    </>
  );
};

export default Location;
