import { useState } from "react";
import { LocalItemsType } from "../../../types";
import Button from "../../common/button/Button";
import noContentImg from "/images/noImage.webp";
import "./themecards.scss";

const ThemeCards = ({ data }: LocalItemsType) => {
  const [count, setCount] = useState(5);
  const slicedData = data && data.slice(0, count);
  const moreHandler = () => {
    setCount((count) => count + 5);
  };
  return (
    <>
      {data && (
        <div className="themecard-container">
          <div className="themecard-items-wrapper">
            {slicedData.map((item) => (
              <div className="themecard-item" key={item.contentid}>
                <div className="themecard-item-img">
                  {item.firstimage ? (
                    <img src={item.firstimage} alt="아이템 이미지" />
                  ) : (
                    <img src={noContentImg} alt="대체 이미지" />
                  )}
                </div>
                <div className="themecard-item-text">
                  <span>{item.title}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="themecard-btn">
            {data[count + 1] ? (
              <Button onClick={moreHandler} className="themecard-more">
                더보기
              </Button>
            ) : (
              <Button className="themecard-no-more">마지막</Button>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default ThemeCards;
