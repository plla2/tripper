import { MapMarker } from "react-kakao-maps-sdk";
import { MapMarkerItemType } from "../../../types";
import { useState } from "react";

const MapEventMarker = ({ data }: MapMarkerItemType) => {
  const [isVisible, setIsVisible] = useState(false);

  return (
    <>
      {data && (
        <MapMarker
          key={data.contentid}
          position={{ lat: Number(data.mapy), lng: Number(data.mapx) }}
          image={{
            src: data.firstimage2,
            size: { width: 40, height: 40 },
          }}
          onMouseOver={() => setIsVisible(true)}
          onMouseOut={() => setIsVisible(false)}
        >
          {isVisible && (
            <div
              style={{
                color: "#000",
                fontSize: "16px",
                overflow: "hidden",
                textOverflow: "ellipsis",
                whiteSpace: "nowrap",
                padding: "8px",
                textAlign: "center",
              }}
            >
              {data.title}
            </div>
          )}
        </MapMarker>
      )}
    </>
  );
};

export default MapEventMarker;
