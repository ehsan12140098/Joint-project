import React from "react";
import styled from "styled-components";
import { OuterSpace } from "../../Assets/Svgs/OuterSpace";
import { GrayCircle } from "../../Assets/Svgs/GrayCircle";

export const OnePart = () => {
  return (
    <OnePartHolder>
      <OnePartContainer>
        <OnePartDetails>
          <OnePartTitle>خدمات نظافتی</OnePartTitle>
          <OnePartOptionsHolder>
            <EachOptionHolder>
              <EachOptionText>خشکشویی</EachOptionText>
              <GrayCircle />
            </EachOptionHolder>
            <EachOptionHolder>
              <EachOptionText>سرویس اتو</EachOptionText>
              <GrayCircle />
            </EachOptionHolder>
            <EachOptionHolder>
              <EachOptionText>خدمتکار روزانه</EachOptionText>
              <GrayCircle />
            </EachOptionHolder>
          </OnePartOptionsHolder>
        </OnePartDetails>
        <YellowNarrowColumn>
          <OuterSpace />
        </YellowNarrowColumn>
      </OnePartContainer>
    </OnePartHolder>
  );
};

const OnePartHolder = styled.div`
  width: 100%;
  padding: 24px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  border-radius: 25px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  border: 3px solid green;
`;
const OnePartContainer = styled.div`
  width: 60%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  gap: 10px;
  border: 3px solid pink;
  @media (max-width: 640px) {
    width: 100%;
  }
`;
const OnePartDetails = styled.div`
  width: 85%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  border: 3px solid purple;
`;
const OnePartTitle = styled.div`
  color: var(--50, #808080);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const OnePartOptionsHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 10px;
  padding: 10px;
  border: 3px solid blue;
`;
const EachOptionHolder = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
const EachOptionText = styled.div`
  color: var(--50, #808080);
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const YellowNarrowColumn = styled.div`
  width: 8%;
  height: 100%;
  display: flex;
  padding: 16px 8px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: var(--Primery-Light-Color, #ede059);
  @media (max-width: 640px) {
    width: 17%;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 16%;
  }
`;
