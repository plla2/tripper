import { Swiper, SwiperSlide } from "swiper/react";
import Button from "../../common/button/Button";
import { THEME_ITEMS } from "../../../constants";
import uuid from "react-uuid";
import { A11y, Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./themeSlider.scss";

const ThemeSlider = () => {
  return (
    <div className="theme-body">
      <div className="theme-showcase">
        <div className="theme-bg">
          <div className="theme-title">
            <h1>
              <span className="theme-thin">
                한국의 아름다움을 만끽할 수 있는
              </span>{" "}
              <br />
              특별한 테마여행을 경험하세요.
            </h1>
          </div>
          <div className="theme-all-btn-wrap">
            <Button className="theme-all-btn">모든 테마 보기</Button>
          </div>
          <div className="theme-swiper">
            <Swiper
              className="theme-swiper-container"
              slidesPerView={4}
              initialSlide={1}
              spaceBetween={30}
              centeredSlides={true}
              modules={[Navigation, Pagination, A11y, Autoplay]}
              navigation={true}
              loop={true}
              autoplay={{ delay: 3000, disableOnInteraction: true }}
              speed={800}
              pagination={{
                clickable: true,
                type: "bullets",
              }}
              roundLengths={true}
            >
              <div className="theme-swiper-slide-wrapper">
                {THEME_ITEMS.map((item) => (
                  <SwiperSlide key={uuid()} className="theme-swiper-slide">
                    <a href="#" className="theme-wrap">
                      <span className="theme-item-img">
                        <img src={item.img} alt="테마 이미지" loading="lazy" />
                      </span>
                      <div className="theme-item-text">
                        <strong className="theme-item-title">
                          {item.title}
                        </strong>
                        <p>{item.content}</p>
                      </div>
                    </a>
                  </SwiperSlide>
                ))}
              </div>
            </Swiper>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ThemeSlider;
