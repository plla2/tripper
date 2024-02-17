import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { ko } from "date-fns/locale";
import dayjs from "dayjs";
import { useQuery } from "@tanstack/react-query";
import { getMainFestivalItems } from "../../../apis";

type PropsType = {
  currentLocation: number;
};

const LocationCalender = ({ currentLocation }: PropsType) => {
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const dayDate = dayjs(selectedDate);
  const formattedDate = dayDate.format("YYYYMMDD");
  const getLocalFestival = useQuery({
    queryKey: ["localFestival", currentLocation],
    queryFn: () =>
      getMainFestivalItems(Number(formattedDate), 5, currentLocation),
  });
  console.log(getLocalFestival?.data);
  return (
    <div>
      <DatePicker
        showIcon
        toggleCalendarOnIconClick
        selected={selectedDate}
        onChange={(date) => setSelectedDate(date)}
        locale={ko}
      />
    </div>
  );
};

export default LocationCalender;
