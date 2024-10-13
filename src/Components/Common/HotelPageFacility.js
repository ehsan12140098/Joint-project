import React, { forwardRef } from "react";
import styled from "styled-components";
// import { OuterSpace } from "../../Assets/Svgs/OuterSpace";
import { EachOfThreeParts } from "../Common/EachOfThreeParts";
import { OnePart } from "./OnePart";

export const HotelPageFacility = forwardRef((props, ref) => {
  return (
    <HotelPageFacilityHolder ref={ref} id={props.id}>
      <HotelPageFacilityTitle>امکانات</HotelPageFacilityTitle>
      <ThreePartsFacilityHolder>
        <EachOfThreeParts />
        <EachOfThreeParts />
        <EachOfThreeParts />
      </ThreePartsFacilityHolder>
      <OnePart></OnePart>
      <OnePart></OnePart>
      <OnePart></OnePart>
    </HotelPageFacilityHolder>
  );
});

const HotelPageFacilityHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const HotelPageFacilityTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const ThreePartsFacilityHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 20px;
  }
`;
