import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../common/button/Button";
import { THEME_ITEMS } from "../../../constants";
import uuid from "react-uuid";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const ThemeSlider = () => {
  return (
    <div className="theme-showcase">
      <div className="theme-bg">
        <div className="title">
          <h1>
            한국의 아름다움을 만끽할 수 있는 특별한 테마여행을 경험하세요.
          </h1>
        </div>
        <div className="theme-all-btn">
          <Button>모든 테마 보기</Button>
        </div>
        <div className="swiper">
          <Swiper
            className="theme-swiper"
            spaceBetween={30}
            centeredSlides={true}
            modules={[Navigation, Pagination, A11y, Autoplay]}
            navigation={true}
            loop={true}
            autoplay={{ delay: 3000, disableOnInteraction: false }}
            pagination={true}
            roundLengths={true}
          >
            {THEME_ITEMS.map((item) => (
              <SwiperSlide key={uuid()}>
                <div className="theme-swiper-slide">
                  <a href="#">
                    <span className="theme-item-img">
                      <img src={item.img} alt="테마 이미지" loading="lazy" />
                    </span>
                    <div className="theme-item-text">
                      <strong>{item.title}</strong>
                      <p>{item.content}</p>
                    </div>
                  </a>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </div>
    </div>
  );
};

export default ThemeSlider;
