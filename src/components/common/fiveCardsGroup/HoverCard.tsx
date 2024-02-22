import { LocalItemsType } from "../../../types";
import noImage from "/images/noImage.webp";

interface ItemProps {
  item: LocalItemsType["data"][number];
}

const HoverCard = ({ item }: ItemProps) => {
  return (
    <>
      <div className="hoverCard-container">
        <div className="image-container">
          {item.firstimage ? (
            <img src={item.firstimage} alt="지역별 페스티벌 사진" />
          ) : (
            <img src={noImage} width={"100%"} alt="지역별 대체사진" />
          )}
        </div>
        <div className="showContent-container">
          <p className="title">{item.title}</p>
          <p className="address">{item.addr1}</p>
          <div className="showContent-date">
            <p className="startDate">{item.eventstartdate}</p>
            <p>-</p>
            <p className="endDate">{item.eventenddate}</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default HoverCard;
