import { LocalItemsType } from "../../../types";

interface ItemProps {
  item: LocalItemsType["data"][number];
}

const Card = ({ item }: ItemProps) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={item.firstimage} alt="지역별 사진" />
      </div>
      <div className="content-container">
        <span className="title">{item.title}</span>
        <span className="address">{item.addr1}</span>
      </div>
    </div>
  );
};

export default Card;
