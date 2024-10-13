import React from "react";
import styled from "styled-components";
import { OuterSpace } from "../../Assets/Svgs/OuterSpace";

export const EachOfThreeParts = () => {
  return (
    <EachOfThreePartsHolder>
      <EachOfThreePartsContainer>
        <EachOfThreePartsDetails>
          <EachOfThreePartsTitle>فضای بیرون</EachOfThreePartsTitle>
          <EachOfThreePartsOptions>تراس آفتاب</EachOfThreePartsOptions>
        </EachOfThreePartsDetails>
        <YellowNarrowColumn>
          <OuterSpace />
        </YellowNarrowColumn>
      </EachOfThreePartsContainer>
    </EachOfThreePartsHolder>
  );
};

const EachOfThreePartsHolder = styled.div`
  width: 31%;
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-radius: 25px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  @media (max-width: 1024px) {
    width: 100%;
  }
`;
const EachOfThreePartsContainer = styled.div`
  width: 80%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  @media (max-width: 640px) {
    justify-content: flex-end;
  }
`;
const EachOfThreePartsDetails = styled.div`
  width: 68%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 10px;
`;
const EachOfThreePartsTitle = styled.div`
  color: var(--50, #808080);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const EachOfThreePartsOptions = styled.div`
  color: var(--50, #808080);
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const YellowNarrowColumn = styled.div`
  width: 20%;
  height: 120px;
  display: flex;
  padding: 16px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: var(--Primery-Light-Color, #ede059);
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 12%;
  }
`;
