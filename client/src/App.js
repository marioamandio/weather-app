import React, { useState } from "react";
import axios from "axios";
import styled from "styled-components";

import Loader from "./Loader";
import DisplayValues from "./DisplayValues";

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  flex-basis: 100%;
  padding: 2rem;
  font-family: sans-serif !important;

  @media (max-width: 500px) {
    padding: auto;
  }
`;

const Header = styled.div`
  padding: 4rem;
  text-align: center;
  background: radial-gradient(rgba(63, 23, 23, 0.2) 40%, rgb(45, 105, 182) 90%);
  background-size: cover;
  border-radius: 0.6rem;

  .title {
    font-size: 5rem;
  }

  @media (max-width: 500px) {
    .title {
      font-size: 4rem;
    }
  }

  @media (max-width: 360px) {
    padding: 2rem;

    .title {
      font-size: 3.4rem;
    }
  }
`;

const Form = styled.form`
  .address {
    width: 40vw;
    line-height: 3rem;
    border-radius: 5px;
    font-size: 20px;
    border: none;
    padding: 10px;
    box-sizing: border-box;
  }

  .address:focus {
    outline: none;
    margin-bottom: -1px;
    border-bottom: blue 1px solid;
  }

  .submit {
    font-size: 1.8rem;
    margin-left: -7.5rem;
    padding: 0.5rem 0.5rem;
    border-radius: 0.5rem;
  }

  .submit:focus {
    outline: none;
  }

  @media (max-width: 800px) {
    .address {
      width: 50%;
    }

    .submit {
      margin-left: 0.3rem;
      margin-right: 0;
      height: 5rem;
    }
  }

  @media (max-width: 500px) {
    display: flex;
    justify-content: center;
    align-items: center;
  }
`;

const App = () => {
  const [dataToFetch, setDataToFetch] = useState(false);
  const [data, setData] = useState({});
  const [displayLoader, setDisplayLoader] = useState(false);
  const [error, setError] = useState("");

  const submitForm = ev => {
    ev.preventDefault();
    const address = ev.target.address.value;
    ev.target.address.value = "";

    setDisplayLoader(true);
    setData({});
    setDataToFetch(false);
    setError("");

    axios
      .post("/api/address", {
        address
      })
      .then(response => {
        if (response.error) {
          setError(response.error);
          setDisplayLoader(false);
          return;
        }

        setDisplayLoader(true);
        setData(response.data);
        setDataToFetch(true);
        setDisplayLoader(false);
        setError("");
      });
  };

  return (
    <AppWrapper>
      <Header>
        <h1 className="title">Weather app</h1>

        <Form
          onSubmit={ev => {
            submitForm(ev);
          }}
          className="form"
        >
          <input
            type="text"
            name="address"
            placeholder="address"
            className="address"
          />
          <input type="submit" className="submit" />
        </Form>
      </Header>
      {displayLoader && <Loader />}
      {dataToFetch && <DisplayValues data={data} />}
    </AppWrapper>
  );
};

export default App;
