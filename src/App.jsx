import { useState, useEffect } from "react";
import "./CSS/App.css";
import Title from "./Components/Title";
import Slogan from "./Components/Slogan.";
import SelectTime from "./Components/SelectTime";
import TimeDisplay from "./Components/TimeDisplay";

function App() {
  const timeZoneArray = [
    "America/Los_Angeles", // Pacific Time
    "America/New_York", // Eastern Time
    "America/Chicago", // Central Time
    "America/Denver", // Mountain Time
    "Europe/London", // London Time
    "UTC", // UTC
    "Europe/Berlin", // Berlin Time
    "Asia/Kolkata", // Mumbai Time
    "Asia/Tokyo", // Tokyo Time
    "Australia/Sydney", // Sydney Time
  ];
  const [selectedTimeZone, setSelectedTimeZone] = useState("UTC");
  //Calculate timezone and pass the data to TimeDisplay component, which will just render the time
  return (
    <div>
      <Title />
      <Slogan />
      <SelectTime
        timeZoneArray={timeZoneArray}
        setSelectedTimeZone={setSelectedTimeZone}
        selectedTimeZone={selectedTimeZone}
      />
      <TimeDisplay selectedTimeZone={selectedTimeZone} />
    </div>
  );
}

export default App;
