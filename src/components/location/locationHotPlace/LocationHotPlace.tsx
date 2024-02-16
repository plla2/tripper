import { useQuery } from "@tanstack/react-query";
import { getMainLocalItems } from "../../../apis";
import FourCardsGroup from "../../common/fourCardsGroup/FourCardsGroup";
import { LOCATION_CODE } from "../../../constants";
import "./locationhotplace.scss";

type PropsType = {
  currentLocation: number;
};

const LocationHotPlace = ({ currentLocation }: PropsType) => {
  const locationName = LOCATION_CODE.find(
    (item) => item.code === String(currentLocation)
  );
  const getHotPlace = useQuery({
    queryKey: ["hotplace", currentLocation],
    queryFn: () => getMainLocalItems(currentLocation, 12, 4),
  });
  const getHotFood = useQuery({
    queryKey: ["hotfood", currentLocation],
    queryFn: () => getMainLocalItems(currentLocation, 39, 4),
  });
  return (
    <div className="hotPlace-container">
      <h1>우리 지역 핫플이 궁금하세요?</h1>
      {getHotPlace.data && (
        <FourCardsGroup
          data={getHotPlace.data}
          header={`${locationName?.name}`}
          headerTitle={`추천 여행지`}
        />
      )}
      {getHotFood.data && (
        <FourCardsGroup
          data={getHotFood.data}
          header={`${locationName?.name}`}
          headerTitle={`추천 맛집`}
        />
      )}
    </div>
  );
};

export default LocationHotPlace;
