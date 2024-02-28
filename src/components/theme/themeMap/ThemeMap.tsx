import { LocalItemsType } from "../../../types";
import KakaoMap from "../../common/map/KakaoMap";
import "./themeMap.scss";

const ThemeMap = ({ data }: LocalItemsType) => {
  return (
    <div className="themeMap-container">{data && <KakaoMap data={data} />}</div>
  );
};

export default ThemeMap;
