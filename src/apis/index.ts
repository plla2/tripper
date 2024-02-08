import axios from "axios";

export const getMainSliderItems = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/searchKeyword1?serviceKey=${
        import.meta.env.VITE_API_KEY
      }&pageNo=1&numOfRows=5&MobileApp=tripper&MobileOS=ETC&keyword=코스&_type=json&arrange=O&contentTypeId=25`
    );
    return res.data.response.body.items.item;
  } catch (error) {
    console.log(error);
  }
};

export const getMainLocalItems = async (areaCode: number) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/areaBasedList1?serviceKey=${
        import.meta.env.VITE_API_KEY
      }&pageNo=1&numOfRows=3&MobileApp=tripper&MobileOS=ETC&_type=json&arrange=Q&contentTypeId=25&areaCode=${areaCode}`
    );
    return res.data.response.body.items.item;
  } catch (error) {
    console.log(error);
  }
};
