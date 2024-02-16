import { LocalItemsType } from "../../../types";
import Card from "../card/Card";

const FourCardsGroup = ({ data, header, headerTitle }: LocalItemsType) => {
  return (
    <div className="group-container">
      <div className="header-container">
        <span className="headerFront">{`${header} `}</span>
        <span>{`${headerTitle}`}</span>
      </div>
      <div className="cards">
        {data.map((item) => (
          <>
            <Card item={item} />
          </>
        ))}
      </div>
    </div>
  );
};

export default FourCardsGroup;
