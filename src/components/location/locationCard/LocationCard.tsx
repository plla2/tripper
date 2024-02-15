import { useQuery } from "@tanstack/react-query";
import { getMainLocalItems } from "../../../apis";
import LocationDetailCard from "../locationDetailCard/LocationDetailCard";
import "./locationcard.scss";

type PropsType = {
  currentLocation: number;
};
type itemType = {
  contentid: number;
};

const LocationCard = ({ currentLocation }: PropsType) => {
  const getLocalItems = useQuery({
    queryKey: ["locationItems", currentLocation],
    queryFn: () => getMainLocalItems(currentLocation, 25, 3),
  });

  return (
    <div className="card-container">
      {getLocalItems.data &&
        getLocalItems.data.map((item: itemType) => (
          <div className="card-item" key={item.contentid}>
            <LocationDetailCard contentId={item.contentid} />
          </div>
        ))}
    </div>
  );
};

export default LocationCard;
