import React from "react";
import styled from "styled-components";
import TurkeyFlag from "../../Assets/images/TurkeyFlag.png";
import { EachOfThreeParts } from "../../Components/Common/EachOfThreeParts";
import { OnePart } from "../Common/OnePart";

export const HotelPageLanguage = () => {
  return (
    <HotelPageLanguageHolder>
      <HotelPageLanguageTitle>زبان ها</HotelPageLanguageTitle>
      <FlagsHolder>
        <EachFlagHolder />
        <EachFlagHolder />
      </FlagsHolder>
    </HotelPageLanguageHolder>
  );
};

const HotelPageLanguageHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 20px;
`;

const HotelPageLanguageTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const FlagsHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  gap: 16px;
`;

const EachFlagHolder = styled.div`
  width: 85px;
  height: 80px;
  background-image: url(${TurkeyFlag});
`;
