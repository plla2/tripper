import { useState } from "react";
import { useQuery } from "@tanstack/react-query";
import { getMainSliderItems } from "../../apis";
import { Swiper, SwiperClass, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import { IoIosArrowBack } from "@react-icons/all-files/io/IoIosArrowBack";
import { IoIosArrowForward } from "@react-icons/all-files/io/IoIosArrowForward";
import "./mainslider.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import Button from "../common/button/Button";

type itemTypes = {
  contentid: string;
  firstimage: string;
  title: string;
};

const MainSlider = () => {
  const getMainSlider = useQuery({
    queryKey: ["mainSliderItem"],
    queryFn: getMainSliderItems,
  });

  const [swiperIndex, setSwiperIndex] = useState(0);
  const [swiper, setSwiper] = useState<SwiperClass>();

  const handlePrev = () => {
    swiper?.slidePrev();
  };
  const handleNext = () => {
    swiper?.slideNext();
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
      {getMainSlider.isLoading && <div>Loading...</div>}
      {getMainSlider.data &&
        getMainSlider.data.map((item: itemTypes) => (
          <SwiperSlide key={item.contentid} className="item-container">
            <div className="img-container">
              <img
                className="slide-img"
                src={item.firstimage}
                alt="캐러셀 이미지"
              />
            </div>
            <div className="content-container">
              <strong className="content-header">Tripper만의 코스 추천</strong>
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
          <span>{getMainSlider.data && getMainSlider.data.length}</span>
        </div>
      </div>
    </Swiper>
  );
};

export default MainSlider;
