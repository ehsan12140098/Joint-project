import React from "react";
import styled from "styled-components";
import { EachCountry } from "./EachCountry";

export const Countries = () => {
  return (
    <CountriesHolder>
      <EachCountry />
      <EachCountry />
      <EachCountry />
      <EachCountry />
      <EachCountry />
      <EachCountry />
      <EachCountry />
    </CountriesHolder>
  );
};

const CountriesHolder = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 10px;
  /* direction: rtl; */
  /* border: 3px solid red; */
`;
