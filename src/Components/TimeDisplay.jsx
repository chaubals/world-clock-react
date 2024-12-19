import { useState, useEffect } from "react";

function TimeDisplay({ selectedTimeZone }) {
  const [currentTime, setCurrentTime] = useState("");
  const [isInitialLoad, setIsInitialLoad] = useState(true); // To check if it's the first load

  useEffect(() => {
    const updateTime = () => {
      const date = new Date().toLocaleString("en-US", {
        timeZone: selectedTimeZone,
      });
      setCurrentTime(date);
    };

    // Run the updateTime once on component mount
    if (isInitialLoad) {
      updateTime();
      setIsInitialLoad(false);
    }

    // Update the time every second when the time zone changes
    const interval = setInterval(updateTime, 1000);

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [selectedTimeZone, isInitialLoad]); // Trigger when selectedTimeZone or isInitialLoad changes

  return (
    <div>
      <h2>Current date and time in {selectedTimeZone.replace("_", " ")}</h2>
      <h3 className="fw-bold m-2">{currentTime}</h3>
    </div>
  );
}

export default TimeDisplay;
