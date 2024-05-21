import React from "react";
import { useState } from "react";
import { format, startOfWeek, addDays, isSameDay } from "date-fns";
import { days, monthNames } from "../../../utils/day_month";
import { Location } from "../../../utils/location";

const useHeader = () => {
  const [locations, setLocations] = useState(Location);
  const [searchCity, setSearchCity] = useState("");
  const getCurrentWeekDates = () => {
    const start = startOfWeek(new Date(), { weekStartsOn: 0 });
    return Array.from({ length: 7 }).map((_, i) => addDays(start, i));
  };

  const getHoursList = () => {
    return Array.from({ length: 24 }).map((_, i) => {
      const hour = i % 12 === 0 ? 12 : i % 12;
      const ampm = i < 12 ? "AM" : "PM";
      return `${hour}:00 ${ampm}`;
    });
  };

  const weekDates = getCurrentWeekDates().map((date) => ({
    day: format(date, "d"),
    month: monthNames[new Date(date).getMonth()],
    day_name: days[new Date(date).getDay()],
    date: date,
  }));

  const tabs = weekDates.map((weekDate, index) => ({
    label: weekDate.day,
    month: weekDate.month,

    content: locations.map((item) => (
      <div className="date-time-container">
        <div className="date_time">
          <div className="city_metadata">
            <div className="city">{item.city}</div>
            <div className="country">{item.country}</div>
          </div>

          <div>
            <div>
              {getHoursList()[0].split(" ")[0]}{" "}
              {getHoursList()[0].split(" ")[1]}
            </div>
            <div>{weekDate.day_name}</div>
          </div>
        </div>

        <div>
          <div className="hours">
            {getHoursList().map((hour, idx) => (
              <div className="time_box">
                <div key={idx}>{hour.split(" ")[0]}</div>
                <div key={idx}>{hour.split(" ")[1]}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )),
  }));

  const AddCity = () => {
    if (!searchCity) {
      alert("Please Enter City");
      return;
    }
    setLocations((prev) => [
      ...prev,
      {
        city: searchCity,
        country: "India",
      },
    ]);

    setSearchCity("");
  };

  const todayIndex = weekDates.findIndex((weekDate) =>
    isSameDay(weekDate.date, new Date())
  );
  return {
    locations,
    searchCity,
    setSearchCity,
    getHoursList,
    weekDates,
    tabs,
    AddCity,
    todayIndex,
  };
};

export default useHeader;
