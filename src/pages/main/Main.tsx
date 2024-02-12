import { Suspense, lazy } from "react";
import MainLocal from "../../components/main/mainLocal/MainLocal";
import MainSlider from "../../components/main/mainSlider/MainSlider";

const LazyMainFestival = lazy(
  () => import("../../components/main/mainFestival/MainFestival")
);
const LazyMainStay = lazy(
  () => import("../../components/main/mainStay/MainStay")
);
const LazyMainHealing = lazy(
  () => import("../../components/main/mainHealing/MainHealing")
);

const Main = () => {
  return (
    <>
      <MainSlider />
      <MainLocal />
      <Suspense fallback={<div>Loading...</div>}>
        <LazyMainFestival />
        <LazyMainStay />
        <LazyMainHealing />
      </Suspense>
    </>
  );
};

export default Main;
