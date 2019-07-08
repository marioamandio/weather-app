import React from "react";
import "./Dashboard.css";

const DailyData = ({ data }) => (
  <div className="dailyData grid-item">
    <p className="dailyData__date">{data.date}</p>
    <p className="dailyData__max">
      max temperature:&nbsp;
      <span className="dailyData__max--temp">{data.maxTemp}</span>
      &ordm;f at&nbsp;
      <span className="dailyData__max--hour">{data.maxTempTime}</span>
    </p>
    <p className="dailyData__min">
      min temperature:&nbsp;
      <span className="dailyData__min--temp">{data.minTemp}</span>&ordm;f
      at&nbsp;
      <span className="dailyData__min--hour">{data.minTempTime}</span>
    </p>
  </div>
);

export default DailyData;
