import React from "react";
import styled from "styled-components";

export const OptionsScore = () => {
  return (
    <OptionsScoreHolder>
      <EachOptionHolder>
        <EachOptionText>کارکنان</EachOptionText>
        <EachOptionNumberAndIndicator>
          <EachOptionNumber>8.3</EachOptionNumber>
          <EachOptionIndicator></EachOptionIndicator>
        </EachOptionNumberAndIndicator>
      </EachOptionHolder>
      <EachOptionHolder>
        <EachOptionText>کارکنان</EachOptionText>
        <EachOptionNumberAndIndicator>
          <EachOptionNumber>8.3</EachOptionNumber>
          <EachOptionIndicator></EachOptionIndicator>
        </EachOptionNumberAndIndicator>
      </EachOptionHolder>
      <EachOptionHolder>
        <EachOptionText>کارکنان</EachOptionText>
        <EachOptionNumberAndIndicator>
          <EachOptionNumber>8.3</EachOptionNumber>
          <EachOptionIndicator></EachOptionIndicator>
        </EachOptionNumberAndIndicator>
      </EachOptionHolder>
      <EachOptionHolder>
        <EachOptionText>کارکنان</EachOptionText>
        <EachOptionNumberAndIndicator>
          <EachOptionNumber>8.3</EachOptionNumber>
          <EachOptionIndicator></EachOptionIndicator>
        </EachOptionNumberAndIndicator>
      </EachOptionHolder>
      <EachOptionHolder>
        <EachOptionText>کارکنان</EachOptionText>
        <EachOptionNumberAndIndicator>
          <EachOptionNumber>8.3</EachOptionNumber>
          <EachOptionIndicator></EachOptionIndicator>
        </EachOptionNumberAndIndicator>
      </EachOptionHolder>
      <EachOptionHolder>
        <EachOptionText>کارکنان</EachOptionText>
        <EachOptionNumberAndIndicator>
          <EachOptionNumber>8.3</EachOptionNumber>
          <EachOptionIndicator></EachOptionIndicator>
        </EachOptionNumberAndIndicator>
      </EachOptionHolder>
      <EachOptionHolder>
        <EachOptionText>کارکنان</EachOptionText>
        <EachOptionNumberAndIndicator>
          <EachOptionNumber>8.3</EachOptionNumber>
          <EachOptionIndicator></EachOptionIndicator>
        </EachOptionNumberAndIndicator>
      </EachOptionHolder>
    </OptionsScoreHolder>
  );
};

const OptionsScoreHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

const EachOptionHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const EachOptionText = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const EachOptionNumberAndIndicator = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 30px;
`;

const EachOptionNumber = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans(FaNum);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const EachOptionIndicator = styled.div`
  position: relative;
  width: 80%;
  height: 8px;
  border-radius: 18px;
  background: var(--10, #e6e6e6);

  /* Main */
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  &:before {
    content: "";
    position: absolute;
    border-radius: 18px;
    background: var(--Primery-Light-Color, #ede059);

    /* Main */
    box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
    top: 0;
    left: 0;
    width: 83%;
    height: 100%;
    background: var(--Primery-Light-Color, #ede059);
    z-index: 1;
  }
`;
