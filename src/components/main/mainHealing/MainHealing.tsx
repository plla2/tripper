import { useQuery } from "@tanstack/react-query";
import { getMainSliderItems } from "../../../apis";
import { itemType } from "../../../types";
import "./mainhealing.scss";

const MainHealing = () => {
  const getMainHealing = useQuery({
    queryKey: ["mainHealingItems"],
    queryFn: () => getMainSliderItems("힐링", 25, 2, 10, "O"),
  });
  let selectedElements =
    getMainHealing.data &&
    getMainHealing.data
      .slice(3, 4)
      .concat(
        getMainHealing.data.slice(5, 6),
        getMainHealing.data.slice(7, 8),
        getMainHealing.data.slice(9, 10)
      );

  return (
    <div className="healing-container">
      <div className="healing-header">
        <h2 className="header">힐링이 필요하다면 여기로!</h2>
        <a href="#">더보기</a>
      </div>
      <div className="healing-wrapper">
        <div className="healing-itemBox">
          {getMainHealing.data &&
            selectedElements.map((item: itemType, index: number) => (
              <div className={`item item${index}`} key={item.contentid}>
                <a href={`/${item.contentid}`}>
                  <span>
                    <img src={item.firstimage} alt="힐링 이미지" />
                  </span>
                  <div className="title-box">
                    <span className="title">{item.title}</span>
                  </div>
                </a>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainHealing;
