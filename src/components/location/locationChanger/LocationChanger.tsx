import { SetStateAction } from "react";
import { LOCATION_CODE } from "../../../constants";
import Button from "../../common/button/Button";
import { SwiperSlide, Swiper } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import "./locationchanger.scss";

interface PropType {
  setCurrentLocation: React.Dispatch<SetStateAction<number>>;
}
type itemType = {
  id: number;
  code: string;
  name: string;
  img: string;
};

const LocationChanger = ({ setCurrentLocation }: PropType) => {
  const handleChange = (codeNum: number) => {
    setCurrentLocation(codeNum);
  };

  return (
    <div className="location-container">
      <div className="changer-header">
        <h1>대한민국의 국내여행지</h1>
        <p>어디까지 알고계신가요?</p>
      </div>
      <Swiper
        spaceBetween={30}
        centeredSlides={false}
        slidesPerView={10}
        scrollbar={{ draggable: true }}
        navigation={true}
        className="locationSwiper"
        modules={[Navigation]}
      >
        {LOCATION_CODE.map((item: itemType) => (
          <SwiperSlide className="changer-item" key={item.code}>
            <Button
              className="changer-btn"
              onClick={() => handleChange(Number(item.code))}
            >
              <img
                className="location-icon"
                src={item.img}
                alt="아이템 아이콘"
              />
              <span>{item.name}</span>
            </Button>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default LocationChanger;
