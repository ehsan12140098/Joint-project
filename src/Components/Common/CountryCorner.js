import React from "react";
import styled from "styled-components";

import rectangleturkey from "../../Assets/images/rectangleturkey.png";

export const CountryCorner = () => {
  return (
    <CountryCornerHolder>
      <FlagAndNameHolder>
        <CornerTextHolder>ترکیه</CornerTextHolder>
        <CornerFlagHolder></CornerFlagHolder>
      </FlagAndNameHolder>
      <GrayInformationHolder>
        <GrayInformationContainer>جمعیت:616161 نفر</GrayInformationContainer>
        <GrayInformationContainer>زبان: فرانسوی</GrayInformationContainer>
      </GrayInformationHolder>
    </CountryCornerHolder>
  );
};

const CountryCornerHolder = styled.div`
  width: 100%;
  /* height: 150px; */
  border-radius: 35px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  z-index: 1;
  padding: 25px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 16px;
  @media (max-width: 640px) {
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    flex-direction: row-reverse;
    align-items: center;
  }
`;
const FlagAndNameHolder = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 12px;
`;
const CornerFlagHolder = styled.div`
  background-image: url(${rectangleturkey});
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;
const CornerTextHolder = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const GrayInformationHolder = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: flex-start;
  gap: 8px;
`;
const GrayInformationContainer = styled.div`
  display: flex;
  align-items: center;
  border-radius: 22px;
  background: var(--Secondary-Dark-Color, #697a80);
  padding: 4px 8px;
  color: var(--White, #fff);
  text-align: right;

  /* Sub Paragraph */
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
