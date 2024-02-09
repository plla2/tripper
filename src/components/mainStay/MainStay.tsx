import { useQuery } from "@tanstack/react-query";
import { getMainStayItems } from "../../apis";
import { itemType } from "../../types";
import "./mainstay.scss";

interface stayItemType extends itemType {
  addr1: string;
  tel: string;
}

const MainStay = () => {
  const getStayItems = useQuery({
    queryKey: ["stayItems"],
    queryFn: getMainStayItems,
  });

  let selectedElements =
    getStayItems.data &&
    getStayItems.data
      .slice(0, 1)
      .concat(getStayItems.data.slice(5, 6), getStayItems.data.slice(9, 10));

  return (
    <div className="stay-container">
      <div className="stay-header">
        <p>국내여행자를 위한 추천호텔 </p>
        <a href="#">더보기</a>
      </div>
      <div className="div2">
        <div className="div3">
          {getStayItems.data &&
            selectedElements.map((item: stayItemType) => (
              <a
                key={item.contentid}
                className="div4"
                href={`/${item.contentid}`}
              >
                <div className="img-container">
                  <span>
                    <img src={item.firstimage} alt="숙박 이미지" />
                  </span>
                </div>
                <div className="text-container">
                  <span className="title">{item.title}</span>
                  <span className="addr">{item.addr1}</span>
                  <span className="tel">{item.tel}</span>
                </div>
              </a>
            ))}
        </div>
      </div>
    </div>
  );
};

export default MainStay;
