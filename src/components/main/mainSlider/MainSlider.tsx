import { useState } from "react";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import { SliderItemsType, itemType } from "../../../types";
import Button from "../../common/button/Button";
import "./mainslider.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const MainSlider = ({ data, title }: SliderItemsType) => {
  let selectedElements = data && data.slice(0, 4).concat(data.slice(5, 8));

  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>();

  const handlePrev = () => {
    if (swiperIndex === 0) {
      swiper?.slideTo(selectedElements.length - 1);
    } else {
      swiper?.slidePrev();
    }
  };
  const handleNext = () => {
    if (swiperIndex === selectedElements.length - 1) {
      swiper?.slideTo(0);
    } else {
      swiper?.slideNext();
    }
  };

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      onActiveIndexChange={(e) => setSwiperIndex(e.realIndex)}
      onSwiper={(e) => {
        setSwiper(e);
      }}
      className="mySwiper"
    >
      {data &&
        selectedElements.map((item: itemType) => (
          <SwiperSlide key={item.contentid} className="item-container">
            <div className="img-container">
              <img
                className="slide-img"
                src={item.firstimage}
                alt="캐러셀 이미지"
              />
            </div>
            <div className="content-container">
              <strong className="content-header">{title}</strong>
              <span className="slide-text">{item.title}</span>
              <a href={`/${item.contentid}`} className="slide-link">
                자세히 보기
              </a>
            </div>
          </SwiperSlide>
        ))}
      <div className="info-container">
        <div className="btn-container">
          <Button onClick={handlePrev} className="prevBtn btn">
            <IoIosArrowBack />
          </Button>
          <Button onClick={handleNext} className="nextBtn btn">
            <IoIosArrowForward />
          </Button>
        </div>
        <div className="index-container">
          <span>{swiperIndex + 1}</span>
          <span>{" / "}</span>
          <span>{data && selectedElements.length}</span>
        </div>
      </div>
    </Swiper>
  );
};

export default MainSlider;
