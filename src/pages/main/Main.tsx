import MainLocal from "../../components/main/mainLocal/MainLocal";
import MainSlider from "../../components/main/mainSlider/MainSlider";
import MainFestival from "../../components/main/mainFestival/MainFestival";
import MainStay from "../../components/main/mainStay/MainStay";
import MainHealing from "../../components/main/mainHealing/MainHealing";
import { useQuery } from "@tanstack/react-query";
import { getMainSliderItems } from "../../apis";

const Main = () => {
  const getMainSlider = useQuery({
    queryKey: ["mainSliderItem"],
    queryFn: () => getMainSliderItems("코스", 25, 15, 7, "Q"),
  });
  return (
    <>
      {getMainSlider.data && (
        <>
          <MainSlider data={getMainSlider.data} title="Tripper만의 코스 추천" />
          <MainLocal />
          <MainFestival />
          <MainStay />
          <MainHealing />
        </>
      )}
    </>
  );
};

export default Main;
