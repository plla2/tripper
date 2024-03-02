import MainLocal from "../../components/main/mainLocal/MainLocal";
import MainSlider from "../../components/main/mainSlider/MainSlider";
import MainFestival from "../../components/main/mainFestival/MainFestival";
import MainStay from "../../components/main/mainStay/MainStay";
import MainHealing from "../../components/main/mainHealing/MainHealing";

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
