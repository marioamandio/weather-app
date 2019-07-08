import React from "react";
import moment from "moment";
import styled from "styled-components";
import DailyData from "./DailyData";
import DisplayTodayInfo from "./DisplayTodayInfo";

const Dashboard = styled.div`
  padding: 1.8rem;

  .address h3 {
    text-align: center;
    font-size: 2rem;
    font-weight: 450;
  }

  .data {
    padding: 10px 5px;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    grid-gap: 20px;
  }

  @media (max-width: 500px) {
    padding: auto;

    .data {
      margin: auto;
      display: block;
    }
  }
`;

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
    <Dashboard>
      <div className="address">
        <h3>{data.address}</h3>
      </div>
      <div className="data">
        {data.daily.map((item, i) => {
          if (i < 8) {
            if (i === 0) {
              const today = getData(item);
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
    </Dashboard>
  );
};

export default DisplayValues;
