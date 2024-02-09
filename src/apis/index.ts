import axios from "axios";

export const getMainSliderItems = async (
  keyword: string,
  typeId: number,
  pageNo: number,
  numOfRows: number,
  arrange: string
) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/searchKeyword1?serviceKey=${
        import.meta.env.VITE_API_KEY
      }&pageNo=${pageNo}&numOfRows=${numOfRows}&MobileApp=tripper&MobileOS=ETC&keyword=${keyword}&_type=json&arrange=${arrange}&contentTypeId=${typeId}`
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

export const getMainFestivalItems = async () => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/searchFestival1?numOfRows=5&pageNo=1&MobileOS=ETC&MobileApp=tripper&_type=json&arrange=R&eventStartDate=20240101&serviceKey=${
        import.meta.env.VITE_API_KEY
      } `
    );
    return res.data.response.body.items.item;
  } catch (error) {
    console.log(error);
  }
};

export const getMainStayItems = async () => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/searchStay1?numOfRows=10&pageNo=2&areaCode=1&MobileOS=ETC&MobileApp=tripper&_type=json&arrange=O&sigunguCode=1&serviceKey=${
        import.meta.env.VITE_API_KEY
      } `
    );
    return res.data.response.body.items.item;
  } catch (error) {
    console.log(error);
  }
};
