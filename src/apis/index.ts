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

export const getMainLocalItems = async (
  areaCode: number,
  contentTypeId: number,
  numOfRows: number
) => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/areaBasedList1?serviceKey=${
        import.meta.env.VITE_API_KEY
      }&pageNo=1&numOfRows=${numOfRows}&MobileApp=tripper&MobileOS=ETC&_type=json&arrange=Q&contentTypeId=${contentTypeId}&areaCode=${areaCode}`
    );
    return res.data.response.body.items.item;
  } catch (error) {
    console.log(error);
  }
};

export const getMainFestivalItems = async (
  startDate: number,
  numOfRows: number,
  areaCode: number
) => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/searchFestival1?numOfRows=${numOfRows}&pageNo=1&MobileOS=ETC&MobileApp=tripper&_type=json&arrange=R&areaCode=${areaCode}&eventStartDate=${startDate}&serviceKey=${
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

export const getDetailItem = async (contentId: string) => {
  try {
    const res = await axios.get(
      `${
        import.meta.env.VITE_API_URL
      }/detailCommon1?MobileOS=ETC&MobileApp=tripper&_type=json&contentId=${contentId}&contentTypeId=25&defaultYN=Y&overviewYN=Y&firstImageYN=Y&serviceKey=${
        import.meta.env.VITE_API_KEY
      } `
    );
    return res.data.response.body.items.item;
  } catch (error) {
    console.log(error);
  }
};
