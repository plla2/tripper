import { useQuery } from "@tanstack/react-query";
import MainSlider from "../../components/main/mainSlider/MainSlider";
import { getMainStayItems } from "../../apis";

const Stay = () => {
  const getStaySlider = useQuery({
    queryKey: ["mainSliderItem"],
    queryFn: getMainStayItems,
  });
  return (
    <div>
      <MainSlider data={getStaySlider.data} title="Tripper만의 숙소 추천" />
    </div>
  );
};

export default Stay;
