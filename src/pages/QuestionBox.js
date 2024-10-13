import React, { useState } from "react";
import styled from "styled-components";
import { Navbar3 } from "../Components/Common/Navbar3";
import { BreadcrumbHolder } from "../Components/Common/BreadcrumbHolder";
import { CommonQuestion } from "../Components/QuestionBox/CommonQuestion";
import { OptionsHolder } from "../Components/QuestionBox/OptionsHolder";
import { PassportHolder } from "../Components/QuestionBox/PassportHolder";
import { TestHolder } from "../Components/QuestionBox/TestHolder";
import { ReturnHolder } from "../Components/QuestionBox/ReturnHolder";
import { Exchange } from "../Components/QuestionBox/Exchange";
import { MoreQuestion } from "../Components/QuestionBox/MoreQuestion";
import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";

export const QuestionBox = () => {
  const [selectedOption, setSelectedOption] = useState({
    slug: "پاسپورت",
    name: "پاسپورت",
  });
  const handleOptionSelect = (slug, name) => {
    setSelectedOption({ slug, name });
  };
  return (
    <TotalHotelPageHolder>
      <MainHotelPageHolder>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbAndAboutUsTitleHolder>
          <BreadcrumbHolder />
          <CommonQuestion />
        </BreadcrumbAndAboutUsTitleHolder>
        <SubMainHotelPageHolder>
          <OptionsHolder onOptionSelect={handleOptionSelect} />
          <PassportHolder selectedOption={selectedOption} />
        </SubMainHotelPageHolder>
      </MainHotelPageHolder>
    </TotalHotelPageHolder>
  );
};

const TotalHotelPageHolder = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background-image: url(${nav1background});
    z-index: 2;
  }
  @media (max-width: 640px) {
    &:before {
      background-image: url(${phonenavbarbackground});
      background-size: cover;
      height: 300px;
      z-index: 1;
    }
  }
`;

const MainHotelPageHolder = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  z-index: 2;
  @media (max-width: 200px) {
    display: none;
  }
`;

const Navbar3Holder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const MainHotelPageHolderPhone = styled.div`
  width: 80%;
  margin: auto;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  z-index: 2;
  @media (max-width: 1024px) {
    display: flex;
  }
`;

const BreadcrumbAndAboutUsTitleHolder = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
`;
const AboutUsTitleHolder = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SubMainHotelPageHolder = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;
const PlusQuestion = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const ShortQuestionContainer = styled.div`
  border-radius: 35px;
  background: var(--Primery-Light-Color, #ede059);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
  padding: 8px 16px;
  gap: 10px;
`;
const TextPlus = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
