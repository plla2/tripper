import { Suspense, lazy, useState } from "react";
import ThemeChanger from "../../components/theme/themeChanger/ThemeChanger";
import ThemeSlider from "../../components/theme/themeSlider/ThemeSlider";
import { useQuery } from "@tanstack/react-query";
import { getMainSliderItems } from "../../apis";
import "./themePage.scss";

const LazyThemeMap = lazy(
  () => import("../../components/theme/themeMap/ThemeMap")
);
const LazyThemeCards = lazy(
  () => import("../../components/theme/themeCards/ThemeCards")
);

const Theme = () => {
  const [keyword, setKeyword] = useState<string>("캠핑");
  const [typeId, setTypeId] = useState<number>(25);

  const themeQuery = useQuery({
    queryKey: ["themeItems", keyword, typeId],
    queryFn: () => getMainSliderItems(keyword, typeId, 1, 20, "Q"),
  });

  return (
    <>
      {themeQuery.data && (
        <>
          <ThemeSlider />
          <ThemeChanger
            keyword={keyword}
            setKeyword={setKeyword}
            typeId={typeId}
            setTypeId={setTypeId}
          />
          <Suspense fallback={<div>Loading...</div>}>
            <div className="theme-map-cards-container">
              <LazyThemeMap data={themeQuery.data} />
              <LazyThemeCards data={themeQuery.data} />
            </div>
          </Suspense>
        </>
      )}
    </>
  );
};
export default Theme;
