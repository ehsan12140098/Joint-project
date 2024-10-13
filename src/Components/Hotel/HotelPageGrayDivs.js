import React from "react";
import styled from "styled-components";
import { PhoneConsultation } from "../../Assets/Svgs/PhoneConsultation";

export const HotelPageGrayDivs = () => {
  return (
    <HotelPageGrayDivsHolder>
      <HotelPageEachGrayDivHolder>زبان ها</HotelPageEachGrayDivHolder>
      <HotelPageEachGrayDivHolder>امکانات</HotelPageEachGrayDivHolder>
      <HotelPageEachGrayDivHolder>توضیحات</HotelPageEachGrayDivHolder>
    </HotelPageGrayDivsHolder>
  );
};

const HotelPageGrayDivsHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
`;

const HotelPageEachGrayDivHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 47px;
  background: var(--S-50, #e3ebed);
  padding: 16px 28px;
  color: var(--Secondary-Dark-Color, #697a80);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 640px) {
    padding: 8px 16px;
    font-size: 15px;
  }
`;
