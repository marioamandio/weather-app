import React from "react";
import styled, { keyframes } from "styled-components";

const rotation = keyframes`
    0% { transform: rotate(0); }
    100% { transform: rotate(360deg); }
`;

const LoaderWrapper = styled.div`
  display: inline-block;
  margin: 40px auto;
  animation: ${rotation} 1.5s infinite linear;

  .icon {
    fill: rgb(27, 202, 65);
  }
`;

const Loader = () => {
  return (
    <LoaderWrapper className="loader">
      <svg className="icon">
        <use xlinkHref="/images/sprite.svg#icon-spinner9" />
      </svg>
    </LoaderWrapper>
  );
};

export default Loader;
