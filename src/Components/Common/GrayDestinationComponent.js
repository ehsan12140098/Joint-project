import React from "react";
import styled from "styled-components";

export const GrayDestinationComponent = () => {
  return (
    <DestinationHolder>
      <DestinationTitleHolder>
        مقصد بعدی خود را انتخاب کنید
      </DestinationTitleHolder>
      <GrayDestinationContainer>
        <EachGrayDestination>آنتالیا</EachGrayDestination>
        <EachGrayDestination>آنتالیا</EachGrayDestination>
        <EachGrayDestination>آنتالیا</EachGrayDestination>
        <EachGrayDestination>آنتالیا</EachGrayDestination>
        <EachGrayDestination>آنتالیا</EachGrayDestination>
        <EachGrayDestination>آنتالیا</EachGrayDestination>
      </GrayDestinationContainer>
    </DestinationHolder>
  );
};

const DestinationHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 18px;
  z-index: 3;
`;

const DestinationTitleHolder = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  color: #5a623a;
  font-family: IRANSans;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const GrayDestinationContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, 1fr);
  grid-template-rows: 1fr;
  grid-column-gap: 20px;
  grid-row-gap: 0px;
  margin-left: 100px;
  @media (max-width: 640px) {
    grid-template-columns: repeat(3, 1fr);
    grid-template-rows: repeat(2, 1fr);
    grid-row-gap: 20px;
    margin-left: 0px;
  }
`;
const EachGrayDestination = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 8px 24px;
  border-radius: 37px;
  border: 1px solid #e3ebed;
  background: #e3ebed;

  /* Main */
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);

  color: #697a80;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
