import MainFestival from "../../components/mainFestival/MainFestival";
import MainHealing from "../../components/mainHealing/MainHealing";
import MainLocal from "../../components/mainLocal/MainLocal";
import MainSlider from "../../components/mainSlider/MainSlider";
import MainStay from "../../components/mainStay/MainStay";

const Main = () => {
  return (
    <>
      <MainSlider />
      <MainLocal />
      <MainFestival />
      <MainStay />
      <MainHealing />
    </>
  );
};

export default Main;
