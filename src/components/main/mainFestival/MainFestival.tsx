import { useQuery } from "@tanstack/react-query";
import { getMainFestivalItems } from "../../../apis";
import { itemType } from "../../../types";
import "./mainfestival.scss";
import { useState } from "react";

interface FestivalItemType extends itemType {
  addr1: string;
}

const MainFestival = () => {
  const getMainFestival = useQuery({
    queryKey: ["mainFestival"],
    queryFn: getMainFestivalItems,
  });

  const [activeItem, setActiveItem] = useState(0);

  const changeItem = (idx: number) => {
    setActiveItem(idx);
  };

  return (
    <div className="mainFestival-wrapper">
      <h2 className="mainFestival-header">이런 페스티벌은 어떠세요!?</h2>
      <div className="mainFestival-contents">
        <ul className="mainFestival-list">
          {getMainFestival.data &&
            getMainFestival.data.map(
              (item: FestivalItemType, index: number) => (
                <li
                  key={item.contentid}
                  className={`${activeItem === index ? "active" : ""}`}
                  onClick={() => changeItem(index)}
                >
                  <div className="item-container">
                    <a className="item-link">
                      <img src={item.firstimage} alt="페스티벌 이미지" />
                      <div className="item-text">
                        <strong>{item.title}</strong>
                        <span>{item.addr1}</span>
                      </div>
                    </a>
                  </div>
                </li>
              )
            )}
        </ul>
      </div>
    </div>
  );
};

export default MainFestival;
