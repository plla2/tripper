import { LocalItemsType } from "../../../types";

interface ItemProps {
  item: LocalItemsType["data"][number];
}

const HoverCard = ({ item }: ItemProps) => {
  return (
    <>
      <div className="hoverCard-container">
        <div className="image-container">
          <img src={item.firstimage} alt="지역별 사진" />
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
