import { Suspense, lazy } from "react";
import MainLocal from "../../components/mainLocal/MainLocal";
import MainSlider from "../../components/mainSlider/MainSlider";

const LazyMainFestival = lazy(
  () => import("../../components/mainFestival/MainFestival")
);
const LazyMainStay = lazy(() => import("../../components/mainStay/MainStay"));
const LazyMainHealing = lazy(
  () => import("../../components/mainHealing/MainHealing")
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
