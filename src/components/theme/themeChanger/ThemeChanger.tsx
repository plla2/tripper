import { SetStateAction } from "react";
import { Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { THEME_ITEMS } from "../../../constants";
import uuid from "react-uuid";
import { Button } from "@mui/material";
import "./themechanger.scss";

interface PropsType {
  keyword: string;
  setKeyword: React.Dispatch<SetStateAction<string>>;
  typeId: number;
  setTypeId: React.Dispatch<SetStateAction<number>>;
}

type itemType = {
  title: string;
  content: string;
  img: string;
  typeId: number;
};
const ThemeChanger = ({
  keyword,
  setKeyword,
  typeId,
  setTypeId,
}: PropsType) => {
  const handleChanger = (keyword: string, typeId: number) => {
    setKeyword(keyword);
    setTypeId(typeId);
  };
  return (
    <div className="theme-changer-container">
      <div className="theme-changer-title">
        <span className="theme-changer-title-head">추천! </span>
        <span>테마여행</span>
      </div>
      <Swiper
        spaceBetween={18}
        centeredSlides={false}
        slidesPerView={5}
        scrollbar={{ draggable: true }}
        navigation={true}
        className="theme-changer-swiper"
        modules={[Navigation]}
        loop={true}
      >
        {THEME_ITEMS.map((item: itemType) => (
          <SwiperSlide className="theme-changer-item" key={uuid()}>
            <Button
              className="theme-changer-btn"
              onClick={() => handleChanger(item.title, item.typeId)}
            >
              <div
                className={`theme-changer-icon-container ${
                  keyword === item.title && typeId === item.typeId
                    ? "theme-changer-icon-container-active"
                    : ""
                }`}
              >
                <img
                  className="theme-changer-icon"
                  src={item.img}
                  alt="아이템 아이콘"
                />
                <span className="theme-changer-icon-title">{item.title}</span>
              </div>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ThemeChanger;
