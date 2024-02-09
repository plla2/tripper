import MainFestival from "../../components/mainFestival/MainFestival";
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
    </>
  );
};

export default Main;
