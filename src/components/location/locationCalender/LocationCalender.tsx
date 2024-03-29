import { useState } from "react";
import DatePicker from "react-datepicker";
import { ko } from "date-fns/locale";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { getMainFestivalItems } from "../../../apis";
import { LOCATION_CODE } from "../../../constants";
import FiveCardsGroup from "../../common/fiveCardsGroup/FiveCardsGroup";
import "react-datepicker/dist/react-datepicker.css";
import "./locationCalender.scss";
import NoContent from "../../common/noContent/NoContent";

type PropsType = {
  currentLocation: number;
};

const LocationCalender = ({ currentLocation }: PropsType) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const dayDate = dayjs(selectedDate);
  const formattedDate = dayDate.format("YYYYMMDD");
  const locationName = LOCATION_CODE.find(
    (item) => item.code === String(currentLocation)
  );
  const getLocalFestival = useQuery({
    queryKey: ["localFestival", currentLocation, formattedDate],
    queryFn: () =>
      getMainFestivalItems(Number(formattedDate), 5, currentLocation),
  });

  return (
    <>
      <div className="calender-container">
        <div className="calender-header">
          <div>
            <span className="header-local">{`${locationName?.name}`}</span>
            <span className="header-content">
              의 이런 축제, 행사는 어떠신가요?
            </span>
          </div>
          <div>
            <a href="#">더보기</a>
          </div>
        </div>
        <div className="picker-container">
          <span>날짜를 선택해주세요.</span>
          <DatePicker
            showIcon
            toggleCalendarOnIconClick
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            locale={ko}
            className="calender"
          />
        </div>
      </div>
      {getLocalFestival?.data ? (
        <div className="fiveGroup-container">
          <FiveCardsGroup data={getLocalFestival?.data} />
        </div>
      ) : (
        <NoContent title="지역이나 날짜" />
      )}
    </>
  );
};

export default LocationCalender;
