import { useQuery } from "@tanstack/react-query";
import axios from "axios";

function App() {
  const OPEN_KEY =
    "ID43EM%2FixQiOJbYb9kyZ3coo6DpQnKI7F8BT7LuhMdxB6s%2FNyzBVFAOlvyODT%2Fxf4aFJzFb1hYcGfEP8JrDi9A%3D%3D";
  const isY = "37.715133";
  const isX = "126.734086";
  const getData = async () => {
    try {
      const res = await axios.get(
        `http://apis.data.go.kr/B551011/KorService1/locationBasedList1?serviceKey=${OPEN_KEY}&pageNo=1&numOfRows=15&MobileApp=tripper&MobileOS=ETC&mapX=${isX}&mapY=${isY}&radius=19000&contentTypeId=25&_type=json`
      );
      console.log(res.data.response.body.items.item);
      return res.data.response.body.items.item;
    } catch (error) {
      console.log(error);
    }
  };

  const get = useQuery({ queryKey: ["datas"], queryFn: getData });

  return (
    <>
      <div>
        <ul>
          {get.data?.map((item) => (
            <li key={item.contentid}>
              <p>{item.title}</p>
              <img src={item?.firstimage} alt="" />
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}

export default App;
