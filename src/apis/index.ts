import axios from "axios";

export const getMainItems = async () => {
  try {
    const res = await axios.get(
      `${import.meta.env.VITE_API_URL}/searchKeyword1?serviceKey=${
        import.meta.env.VITE_API_KEY
      }&pageNo=1&numOfRows=30&MobileApp=tripper&MobileOS=ETC&keyword=추천&_type=json`
    );
    return res.data.response.body.items.item;
  } catch (error) {
    console.log(error);
  }
};
