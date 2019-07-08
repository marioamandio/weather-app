import React from "react";
import styled from "styled-components";
import "./Dashboard.css";

const renderIcon = icon => {
  if (icon.includes("cloudy") || icon === "fog") {
    icon = "cloudy";
  }
  return `/images/sprite.svg#icon-${icon}`;
};

const DisplayTodayInfo = ({ today, currently }) => {
  return (
    <div className="today-info grid-item">
      <div className="current-info">
        <p className="today-info_head">currently:</p>
        <p>temperature: {currently.currentTemperature}&ordm;f</p>
        <p>
          apparent temperature: {currently.apparenttemperature}
          &ordm;f
        </p>
      </div>
      <div className="today-info__minmax">
        <p className="today-info_head">today min and max info:</p>
        <p className="dailyData__max">
          max temperature: {today.maxTemp}&ordm;f at {today.maxTempTime}
        </p>
        <p className="dailyData__min">
          min temperature: {today.minTemp}&ordm;f at {today.minTempTime}{" "}
        </p>
      </div>
      <div className="today-summary">
        <p className="today-info_head">Summary:</p>
        <svg className="today-info__icon">
          <use xlinkHref={renderIcon(today.icon)} />
        </svg>
        <p>{today.summary}</p>
      </div>
    </div>
  );
};

export default DisplayTodayInfo;

//min temp
//max temp
//min temp time
//max temp time
//currently
//apparent currently
//summary
//
