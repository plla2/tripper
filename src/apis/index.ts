import axios from "axios";

export const getMainSliderItems = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/searchKeyword1?serviceKey=${
        import.meta.env.VITE_API_KEY
      }&pageNo=1&numOfRows=30&MobileApp=tripper&MobileOS=ETC&keyword=코스&_type=json&arrange=O&contentTypeId=25`
    );
    return res.data.response.body.items.item.slice(0, 5);
  } catch (error) {
    console.log(error);
  }
};
