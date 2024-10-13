import React from "react";
import styled from "styled-components";
import bisangif from "../../Assets/gifs/bisangif.gif";
import phonenavbarbackground from "../../Assets/images/phonenavbarbackground.png";

export const FirstNavbarSubstitute = () => {
  return (
    <FirstNavbarSubstituteHolder>
      <FirstNavbarSubstituteContainer>
        <FirstNavbarSubstituteTitle>
          آژانس مسافرتی بیسان‌سیر
        </FirstNavbarSubstituteTitle>
        <FirstNavbarSubstituteSubtitle>
          رویاهات رو تور کن !!!
        </FirstNavbarSubstituteSubtitle>
      </FirstNavbarSubstituteContainer>
      <StyledImage src={bisangif} alt="Motion Graphic" />
    </FirstNavbarSubstituteHolder>
  );
};

const FirstNavbarSubstituteHolder = styled.div`
  display: none;
  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: flex-end;
    align-items: center;
    gap: 8px;
    z-index: 3;
    margin-top: 30px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    margin-top: 2px;
    margin-bottom: 100px;
  }
`;

const FirstNavbarSubstituteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  @media (min-width: 640px) and (max-width: 1024px) {
    align-items: flex-end;
  }
`;
const FirstNavbarSubstituteTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 900;
  line-height: normal;
`;
const FirstNavbarSubstituteSubtitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: center;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const StyledImage = styled.img`
  width: px !important;
  height: 64px !important;
`;
