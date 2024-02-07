// const settings = {
//   fade: true,
//   dots: true,
//   infinite: true,
//   slidesToShow: 1,
//   slidesToScroll: 1,
//   autoplay: true,
//   autoplaySpeed: 4000,
//   className: "slider-items",
//   arrows: false,
// };

// const sliderRef = useRef<Slider>(null);
// const sliderElement = sliderRef.current;
// const play = () => {
//   if (sliderElement) {
//     sliderElement.slickPlay();
//   }
// };
// const pause = () => {
//   if (sliderElement) {
//     sliderElement.slickPause();
//   }
// };
// <div className="slider-container">
//   <ul>
//     <Slider {...settings} ref={sliderRef}>
//       {get.data &&
//         get.data.map((item: itemTypes) => (
//           <li key={item.contentid} className="item-container">
//             <img
//               className="slide-img"
//               src={item.firstimage}
//               alt="캐러셀 이미지"
//             />
//             <div className="content-container">
//               <span className="slide-text">{item.title}</span>
//               <a href="#" className="slide-link">
//                 자세히 보기
//               </a>
//             </div>
//           </li>
//         ))}
//     </Slider>
//   </ul>
//   <div className="btn-container">
//     <Button onClick={play}>
//       <FaPlay />
//     </Button>
//     <Button onClick={pause}>
//       <FaPause />
//     </Button>
//   </div>
// </div>

// import Button from "../common/button/Button";
// import Slider from "react-slick";
// import { FaPlay } from "@react-icons/all-files/fa/FaPlay";
// import { FaPause } from "@react-icons/all-files/fa/FaPause";

// const progressBar = useRef<SVGSVGElement>(null);
// const progressContent = useRef<HTMLSpanElement>(null);

// const onAutoPlayTimeLeft = (timeLeft: number, percentage: number) => {
//   const progressBarElement = progressBar.current;
//   const progressContentElement = progressContent.current;
//   if (progressBarElement && progressContentElement) {
//     progressBarElement.style.setProperty(
//       "--progress",
//       String(1 - percentage)
//     );
//     progressContentElement.textContent = `${Math.ceil(timeLeft / 1000)}s`;
//   }
// };

{
  /* <div className="autoplay-progress" slot="container-end">
        <svg viewBox="0 0 48 48" ref={progressBar}>
          <circle cx="24" cy="24" r="20"></circle>
        </svg>
        <span ref={progressContent}></span>
      </div> */
}

import { useQuery } from "@tanstack/react-query";
import { getMainItems } from "../../apis";
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
  const get = useQuery({
    queryKey: ["mainSliderItem"],
    queryFn: getMainItems,
  });

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4000,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Autoplay, Pagination, Navigation]}
      className="mySwiper"
    >
      {get.data &&
        get.data.map((item: itemTypes) => (
          <SwiperSlide key={item.contentid} className="item-container">
            <img
              className="slide-img"
              src={item.firstimage}
              alt="캐러셀 이미지"
            />
            <div className="content-container">
              <span className="slide-text">{item.title}</span>
              <a href="#" className="slide-link">
                자세히 보기
              </a>
            </div>
          </SwiperSlide>
        ))}
    </Swiper>
  );
};

export default MainSlider;
