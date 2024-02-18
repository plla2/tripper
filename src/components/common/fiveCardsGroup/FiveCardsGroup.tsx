import { LocalItemsType } from "../../../types";
import Card from "../card/Card";

const FiveCardsGroup = ({ data }: LocalItemsType) => {
  return (
    <div>
      {data &&
        data.map((item) => (
          <div>
            <Card item={item} />
          </div>
        ))}
    </div>
  );
};

export default FiveCardsGroup;
