import busanIcon from "../assets/localIcons/busan.webp";
import cheonbukIcon from "../assets/localIcons/cheonbuk.webp";
import cheonnamIcon from "../assets/localIcons/cheonnam.webp";
import chungbukIcon from "../assets/localIcons/chungbuk.webp";
import chungnamIcon from "../assets/localIcons/chungnam.webp";
import daeguIcon from "../assets/localIcons/daegu.webp";
import daejeonIcon from "../assets/localIcons/daejeon.webp";
import gwangjuIcon from "../assets/localIcons/gwangju.webp";
import gyeongbukIcon from "../assets/localIcons/gyeongbuk.webp";
import gyeongnamIcon from "../assets/localIcons/gyeongnam.webp";
import gyeonggiIcon from "../assets/localIcons/gyeonggi.webp";
import incheonIcon from "../assets/localIcons/incheon.webp";
import jejuIcon from "../assets/localIcons/jeju.webp";
import kangwonIcon from "../assets/localIcons/kangwon.webp";
import seoulIcon from "../assets/localIcons/seoul.webp";
import ulsanIcon from "../assets/localIcons/ulsan.webp";
import cafe from "/images/themeSliderImg/cafe.jpg";
import winter from "/images/themeSliderImg/winter.jpg";
import camping from "/images/themeSliderImg/camping.jpg";
import child from "/images/themeSliderImg/child.jpg";
import culture from "/images/themeSliderImg/culture.jpg";
import healing from "/images/themeSliderImg/healing.jpg";
import history from "/images/themeSliderImg/history.jpg";
import hotplace from "/images/themeSliderImg/hotplace.jpg";
import korea from "/images/themeSliderImg/korea.jpg";
import nature from "/images/themeSliderImg/nature.jpg";
import night from "/images/themeSliderImg/night.jpg";
import shopping from "/images/themeSliderImg/shopping.jpg";
import walk from "/images/themeSliderImg/walk.png";
import special from "/images/themeSliderImg/special.jpg";

export const HEADER_LIST = [
  {
    id: 1,
    text: "지역별",
    url: "/location",
  },
  {
    id: 2,
    text: "테마별",
    url: "/theme",
  },
  {
    id: 3,
    text: "숙박",
    url: "/stay",
  },
  {
    id: 4,
    text: "여행추천",
    url: "/recommend",
  },
  {
    id: 5,
    text: "여행지도",
    url: "/map",
  },
  {
    id: 6,
    text: "걷기코스",
    url: "/walking",
  },
];

export const FOOTER_LIST = [
  {
    id: 0,
    text: "GITHUB",
    url: "https://github.com/plla2",
  },
  {
    id: 1,
    text: "PORTFOLIO",
    url: "https://plla2.netlify.app/",
  },
  {
    id: 2,
    text: "BLOG",
    url: "https://jhbljs92.tistory.com/",
  },
];

export const LOCATION_CODE = [
  {
    id: 0,
    name: "서울",
    code: "1",
    img: seoulIcon,
  },
  {
    id: 1,
    name: "인천",
    code: "2",
    img: incheonIcon,
  },
  {
    id: 2,
    name: "대전",
    code: "3",
    img: daejeonIcon,
  },
  {
    id: 3,
    name: "대구",
    code: "4",
    img: daeguIcon,
  },
  {
    id: 4,
    name: "광주",
    code: "5",
    img: gwangjuIcon,
  },
  {
    id: 5,
    name: "부산",
    code: "6",
    img: busanIcon,
  },
  {
    id: 6,
    name: "울산",
    code: "7",
    img: ulsanIcon,
  },
  {
    id: 8,
    name: "경기",
    code: "31",
    img: gyeonggiIcon,
  },
  {
    id: 9,
    name: "강원",
    code: "32",
    img: kangwonIcon,
  },
  {
    id: 10,
    name: "충북",
    code: "33",
    img: chungbukIcon,
  },
  {
    id: 11,
    name: "충남",
    code: "34",
    img: chungnamIcon,
  },
  {
    id: 12,
    name: "경북",
    code: "35",
    img: gyeongbukIcon,
  },
  {
    id: 13,
    name: "경남",
    code: "36",
    img: gyeongnamIcon,
  },
  {
    id: 14,
    name: "전북",
    code: "37",
    img: cheonbukIcon,
  },
  {
    id: 15,
    name: "전남",
    code: "38",
    img: cheonnamIcon,
  },
  {
    id: 16,
    name: "제주",
    code: "39",
    img: jejuIcon,
  },
];

export const THEME_ITEMS = [
  {
    title: "캠핑",
    content: "자연 속에서 캠프파이어를 즐기며 자유로운 분위기를 만들어보세요.",
    img: camping,
    typeId: 25,
  },
  {
    title: "역사",
    content: "과거의 흔적을 따라가는 여행, 역사의 숨결을 느껴보세요.",
    img: history,
    typeId: 25,
  },
  {
    title: "한옥",
    content: "전통 가옥에서 편안한 시간을 보내며 한국의 아름다움을 느껴보세요.",
    img: korea,
    typeId: 12,
  },
  {
    title: "명소",
    content: "아름다운 관광지를 탐험하며 특별한 순간을 만들어보세요.",
    img: hotplace,
    typeId: 25,
  },
  {
    title: "문화",
    content: "다채로운 문화 체험을 통해 새로운 시각을 얻어보세요.",
    img: culture,
    typeId: 25,
  },
  {
    title: "생태",
    content: "자연의 조화로움을 느끼며 생태계의 아름다움을 발견해보세요.",
    img: nature,
    typeId: 25,
  },
  {
    title: "아이",
    content: "가족 모두가 함께 즐길 수 있는 즐거운 여행을 경험해보세요.",
    img: child,
    typeId: 25,
  },
  {
    title: "산책",
    content: "아름다운 풍경을 배경으로 여유로운 산책을 즐겨보세요.",
    img: walk,
    typeId: 25,
  },
  {
    title: "치유",
    content: "마음을 치유하는 여행으로 일상의 스트레스를 잊어보세요.",
    img: healing,
    typeId: 25,
  },
  {
    title: "이색",
    content: "독특하고 특별한 경험을 만나보며 색다른 여행을 즐겨보세요.",
    img: special,
    typeId: 25,
  },
  {
    title: "쇼핑",
    content: "다양한 상품들을 살펴보며 특별한 선물을 찾아보세요.",
    img: shopping,
    typeId: 38,
  },
  {
    title: "야경",
    content: "환상적인 야경을 감상하며 로맨틱한 순간을 만들어보세요.",
    img: night,
    typeId: 25,
  },
  {
    title: "카페",
    content: "분위기 있는 카페에서 휴식을 취하며 여행의 피로를 푸세요.",
    img: cafe,
    typeId: 38,
  },
  {
    title: "겨울",
    content: "설경 속에서 겨울 특유의 아름다움을 만끽해보세요.",
    img: winter,
    typeId: 25,
  },
];
