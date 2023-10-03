import { useState } from "react";

const Date = () => {
  const [date, setData] = useState("");
  const [travel, setTravel] = useState({
    travelStart: "2023-09-10",
    travelEnd: "2023-09-15",
  });
  const [infoTravel, setInfoTravel] = useState("Spain");
  return (
    <div>
      <input
        value={date}
        onChange={(e) => setData(e.target.value)}
        type="date"
      />
      {date.length > 0 && <h2>{infoTravel}</h2>}
    </div>
  );
};

export default Date;
