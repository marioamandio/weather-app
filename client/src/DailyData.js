import React from "react";
import styled, { css } from "styled-components";
import { Grid_Item } from "./utils";
import img from "./images/weatherapp2.jpg";

const DailyDataWrapper = styled.div`
  font-size: 1.6rem;
  line-height: 3rem;
  background-image: linear-gradient(
      rgba(196, 223, 195, 0.6),
      rgba(196, 223, 195, 0.9)
    ),
    url(${img});
  background-size: cover;
  background-position: center;
  justify-items: center;
  border-radius: 0.6rem;
  padding: 0.5rem;
  font-weight: 600;

  .date {
    font-weight: 600;
  }

  .grid {
    background-color: #eee;
  }

  .temp-min-max {
    font-weight: 900;
    transform: scale(1.2);
  }
`;

const DailyData = ({ data }) => (
  <DailyDataWrapper
    css={css`
      ${Grid_Item}
    `}
  >
    <p className="date">{data.date}</p>
    <p>
      max temperature:&nbsp;
      <span className="temp-min-max">{data.maxTemp}</span>
      &ordm;f at&nbsp;
      <span>{data.maxTempTime}</span>
    </p>
    <p>
      min temperature:&nbsp;
      <span className="temp-min-max">{data.minTemp}</span>&ordm;f at&nbsp;
      <span>{data.minTempTime}</span>
    </p>
  </DailyDataWrapper>
);

export default DailyData;
