import { useState } from "react";
import LocationChanger from "../../components/location/locationChanger/LocationChanger";

const Location = () => {
  const [currentLocation, setCurrentLocation] = useState(1);
  console.log(currentLocation);
  return (
    <>
      <LocationChanger
        currentLocation={currentLocation}
        setCurrentLocation={setCurrentLocation}
      />
    </>
  );
};

export default Location;
