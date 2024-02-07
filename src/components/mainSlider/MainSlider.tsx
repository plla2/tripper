import { useQuery } from "@tanstack/react-query";
import { getMainItems } from "../../apis";
import Slider from "react-slick";
import "./mainslider.scss";
import "slick-carousel/slick/slick.scss";
import "slick-carousel/slick/slick-theme.scss";

const MainSlider = () => {
  const get = useQuery({
    queryKey: ["mainSliderItem"],
    queryFn: getMainItems,
  });
  const settings = {
    dots: true,
    fade: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    waitForAnimate: false,
  };

  return (
    <div className="slider-container">
      <Slider {...settings}>
        {get.data &&
          [...get.data.slice(0, 3), get.data[4], get.data[7]].map((item) => (
            <div key={item.contentid}>
              <img src={item.firstimage} alt="캐러셀 이미지" />
              <span>{item.title}</span>
              <a href="#">자세히 보기</a>
            </div>
          ))}
      </Slider>
    </div>
  );
};

export default MainSlider;
