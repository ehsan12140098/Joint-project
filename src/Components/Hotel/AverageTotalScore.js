import React from "react";
import styled from "styled-components";

export const AverageTotalScore = () => {
  return (
    <AverageTotalScoreHolder>
      <AverageTotalScoreNumber>3</AverageTotalScoreNumber>
      <AverageTotalScoreText>میانگین امتیاز کل</AverageTotalScoreText>
    </AverageTotalScoreHolder>
  );
};

const AverageTotalScoreHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  height: 90px;
  width: 100%;
  border-radius: 35px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  z-index: 2 !important;
  &:before {
    content: "";
    position: absolute;
    border-radius: 35px 0px 0px 35px;
    top: 0;
    left: 0;
    width: 77%;
    height: 100%;
    background: var(--Primery-Light-Color, #ede059);
    z-index: 1;
  }
`;

const AverageTotalScoreNumber = styled.div`
  color: #000;
  font-family: IRANSans(FaNum);
  font-size: 48.83px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  z-index: 2;
  margin-left: 16px;
`;
const AverageTotalScoreText = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
`;
