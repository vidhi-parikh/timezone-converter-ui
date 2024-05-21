import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import Tab from "../UI/Tab/Tab";
import "./LocationCard.css";
import useLocation from "./hooks/useLocation";

const LocationCard = () => {
  const {
    locations,
    searchCity,
    setSearchCity,
    getHoursList,
    weekDates,
    tabs,
    AddCity,
    todayIndex,
  } = useLocation();

  return (
    <div className="header">
      <input
        type="text"
        value={searchCity}
        placeholder="City"
        className="timezone-input"
        onChange={(e) => setSearchCity(e.target.value)}
      />
      <button className="search" onClick={AddCity}>
        search
      </button>
      <input className="date-holder" type="date" />
      <div>
        <Tab tabs={tabs} initialActiveTab={todayIndex} />
      </div>
    </div>
  );
};

export default LocationCard;
