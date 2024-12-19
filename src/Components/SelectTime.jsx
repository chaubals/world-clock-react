import { useState, useEffect } from "react";

function SelectTime({ timeZoneArray, setSelectedTimeZone, selectedTimeZone }) {
  const [dropdownValue, setDropdownValue] = useState("Select time zone");

  // This effect will run when the selected time zone changes
  useEffect(() => {
    const timeZoneName = selectedTimeZone.split("/")[1] || selectedTimeZone;
    setDropdownValue(timeZoneName); // Update the dropdown value when selectedTimeZone changes
  }, [selectedTimeZone]);

  const handleDropdownValue = (selectedTimeZone) => {
    setSelectedTimeZone(selectedTimeZone);
  };

  return (
    <div>
      <div className="dropdown">
        <button
          className="btn btn-primary dropdown-toggle m-3"
          type="button"
          data-bs-toggle="dropdown"
          aria-expanded="false"
        >
          {dropdownValue} {/* Show the current selected time zone */}
        </button>
        <ul className="dropdown-menu">
          {timeZoneArray.map((item, index) => {
            const timeZoneName = item.split("/")[1] || item;
            return (
              <li key={index}>
                <a
                  className="dropdown-item"
                  href="#"
                  onClick={() => handleDropdownValue(item)} // Update the time zone when clicked
                >
                  {timeZoneName}
                </a>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}

export default SelectTime;
