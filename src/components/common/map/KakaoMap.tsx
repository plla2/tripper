import useKakaoLoader from "../../../hooks/useKakaoLoader";
import { Map } from "react-kakao-maps-sdk";

const KakaoMap = () => {
  useKakaoLoader();

  return (
    <Map
      id="map"
      center={{ lat: 33.450701, lng: 126.570667 }}
      style={{ width: "100%", height: "450px" }}
      level={3}
    />
  );
};

export default KakaoMap;
