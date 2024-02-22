import { LocalItemsType } from "../../../types";
import HoverCard from "./HoverCard";

const FiveCardsGroup = ({ data }: LocalItemsType) => {
  return (
    <>
      {data &&
        data.map((item) => (
          <div className="fivecards-wrapper" key={item.contentid}>
            <HoverCard item={item} />
          </div>
        ))}
    </>
  );
};

export default FiveCardsGroup;
