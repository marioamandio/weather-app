import React, { Component } from "react";
import moment from "moment";
import DailyData from "./DailyData";
import DisplayTodayInfo from "./DisplayTodayInfo";
import "./Dashboard.css";

const getData = daily => {
  const dailyData = {
    date: moment.unix(daily.time).format("Do MMMM"),
    maxTemp: daily.temperatureHigh,
    maxTempTime: moment.unix(daily.temperatureHighTime).format("HH:mm"),
    minTemp: daily.temperatureLow,
    minTempTime: moment.unix(daily.temperatureLowTime).format("HH:mm"),
    summary: daily.summary,
    icon: daily.icon
  };
  return dailyData;
};

const DisplayValues = ({ data }) => {
  if (data.error) {
    return (
      <div>
        <p>{data.error}</p>
      </div>
    );
  }
  return (
    <div className="dashboard">
      <div className="dashboard-address">
        <h3>{data.address}</h3>
      </div>
      <div className="dashboard--data">
        {data.daily.map((item, i) => {
          if (i < 8) {
            if (i === 0) {
              let today = getData(item);
              return (
                <DisplayTodayInfo key={i} today={today} currently={data} />
              );
            } else {
              const dayData = getData(item);
              return <DailyData data={dayData} key={i} />;
            }
          }
          return null;
        })}
      </div>
    </div>
  );
};

export default DisplayValues;
