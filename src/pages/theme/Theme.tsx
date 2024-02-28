import { useState } from "react";
import ThemeChanger from "../../components/theme/themeChanger/ThemeChanger";
import ThemeSlider from "../../components/theme/themeSlider/ThemeSlider";
import { useQuery } from "@tanstack/react-query";
import { getMainSliderItems } from "../../apis";
import ThemeCards from "../../components/theme/themeCards/ThemeCards";
import ThemeMap from "../../components/theme/themeMap/ThemeMap";
import "./theme.scss";

const Theme = () => {
  const [keyword, setKeyword] = useState<string>("캠핑");
  const [typeId, setTypeId] = useState<number>(25);

  const themeQuery = useQuery({
    queryKey: ["themeItems", keyword, typeId],
    queryFn: () => getMainSliderItems(keyword, typeId, 1, 5, "Q"),
  });
  console.log(keyword, typeId);
  console.log(themeQuery.data && themeQuery.data);

  return (
    <div>
      <ThemeSlider />
      <ThemeChanger
        keyword={keyword}
        setKeyword={setKeyword}
        typeId={typeId}
        setTypeId={setTypeId}
      />
      <div className="theme-map-cards-container">
        <ThemeMap />
        <ThemeCards />
      </div>
    </div>
  );
};
export default Theme;
