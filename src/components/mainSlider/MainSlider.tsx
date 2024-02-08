import { useQuery } from "@tanstack/react-query";
import { getMainSliderItems } from "../../apis";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "./mainslider.scss";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

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
    </Swiper>
  );
};

export default MainSlider;
