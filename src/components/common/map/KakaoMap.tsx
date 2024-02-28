import useKakaoLoader from "../../../hooks/useKakaoLoader";
import { Map, MarkerClusterer } from "react-kakao-maps-sdk";
import { LocalItemsType } from "../../../types";
import MapEventMarker from "../mapEventMarker/MapEventMarker";

const KakaoMap = ({ data }: LocalItemsType) => {
  useKakaoLoader();
  return (
    <>
      {data && (
        <Map
          id="map"
          center={{ lat: 36.034, lng: 128.0134 }}
          style={{
            width: "60%",
            height: "450px",
            display: "flex",
            justifyContent: "center",
          }}
          level={13}
        >
          <MarkerClusterer averageCenter={true} minLevel={10}>
            {data.map((pos) => (
              <MapEventMarker data={pos} key={pos.contentid} />
            ))}
          </MarkerClusterer>
        </Map>
      )}
    </>
  );
};

export default KakaoMap;
