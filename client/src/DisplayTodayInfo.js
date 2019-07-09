import React from "react";
import styled from "styled-components";

const TodayInfo = styled.div`
  line-height: 2.5rem;
  padding: 2rem 0rem;
  font-size: 1.6rem;
  background-color: #eee;
  grid-column: 1 / -1;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(30rem, 1fr));
  grid-gap: 3rem;
  padding: auto;
  margin-bottom: 30px;
  text-align: center;
  border-radius: 4px;

  .head {
    font-weight: bold;
  }

  .icon {
    fill: rgb(0, 0, 0);
    height: 5rem;
    width: 5rem;
  }

  @media (max-width: 400px) {
    grid-template-columns: 100%;
    padding: 1rem;
  }

  @media (max-width: 350) {
    display: block;
    & > * {
      margin: 1.5rem;
    }
  }
`;

const renderIcon = icon => {
  if (icon.includes("cloudy") || icon === "fog") {
    icon = "cloudy";
  }
  return `/images/sprite.svg#icon-${icon}`;
};

const DisplayTodayInfo = ({ today, currently }) => {
  return (
    <TodayInfo>
      <div className="current-info">
        <p className="head">currently:</p>
        <p>temperature: {currently.currentTemperature}&ordm;f</p>
        <p>
          apparent temperature: {currently.apparenttemperature}
          &ordm;f
        </p>
      </div>
      <div className="today-info__minmax">
        <p className="head">today min and max info:</p>
        <p className="dailyData__max">
          max temperature: {today.maxTemp}&ordm;f at {today.maxTempTime}
        </p>
        <p className="dailyData__min">
          min temperature: {today.minTemp}&ordm;f at {today.minTempTime}{" "}
        </p>
      </div>
      <div className="today-summary">
        <p className="head">Summary:</p>
        <svg className="icon">
          <use xlinkHref={renderIcon(today.icon)} />
        </svg>
        <p>{today.summary}</p>
      </div>
    </TodayInfo>
  );
};

export default DisplayTodayInfo;
