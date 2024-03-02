import { Suspense, lazy, useState } from "react";

const LazyLocationChanger = lazy(
  () => import("../../components/location/locationChanger/LocationChanger")
);
const LazyLocationCard = lazy(
  () => import("../../components/location/locationCard/LocationCard")
);
const LazyLocationHotPlace = lazy(
  () => import("../../components/location/locationHotPlace/LocationHotPlace")
);
const LazyLocationCalender = lazy(
  () => import("../../components/location/locationCalender/LocationCalender")
);

const Location = () => {
  const [currentLocation, setCurrentLocation] = useState(1);
  return (
    <>
      <Suspense fallback={<div>Loading...</div>}>
        <LazyLocationChanger
          currentLocation={currentLocation}
          setCurrentLocation={setCurrentLocation}
        />
        <LazyLocationCard currentLocation={currentLocation} />
        <LazyLocationHotPlace currentLocation={currentLocation} />
        <LazyLocationCalender currentLocation={currentLocation} />
      </Suspense>
    </>
  );
};

export default Location;
