import { useQuery } from "@tanstack/react-query";
import { getDetailItem } from "../../../apis";

type PropsType = {
  contentId: number;
};
type itemType = {
  title: string;
  overview: string;
  firstimage2: string;
};
const LocationDetailCard = ({ contentId }: PropsType) => {
  const getDetailItems = useQuery({
    queryKey: ["detailItem", contentId],
    queryFn: () => getDetailItem(String(contentId)),
  });
  const regex = /^[^<]*?(?=<|$)/;
  const regexOverview =
    getDetailItems.data && getDetailItems.data[0].overview.match(regex);

  return (
    <div className="detailCard-container">
      {getDetailItems.data && (
        <div className="detailCard-content">
          <div className="detailCard-header">코스</div>
          {getDetailItems.data.map((item: itemType) => (
            <div key={item.title}>
              <div className="detailCard-text">
                <div className="detailCard-title">{item.title}</div>
                <div className="detailCard-overview">{regexOverview}</div>
              </div>
              <img src={item.firstimage2} alt="" />
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default LocationDetailCard;
