import { useState } from "react";
import ThemeSlider from "../../components/theme/themeSlider/ThemeSlider";
import { getMainSliderItems } from "../../apis";
import { useQuery } from "@tanstack/react-query";

const Theme = () => {
  const [keyword, setKeyword] = useState<string>("캠핑");
  const [typeId, setTypeId] = useState<number>(25);

  const themeQuery = useQuery({
    queryKey: ["themeItems", keyword, typeId],
    queryFn: () => getMainSliderItems(keyword, typeId, 1, 5, "Q"),
  });
  return (
    <div>
      <ThemeSlider />
    </div>
  );
};
export default Theme;
