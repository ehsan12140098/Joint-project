import React from "react";
import styled from "styled-components";
import { SearchIcon } from "../../Assets/Svgs/SearchIcon";
import { SearchIconLeft } from "../../Assets/Svgs/SearchIconLeft";

export const CommonQuestion = () => {
  return (
    <div>
      <MainCommonQuestion>
        <SearchContainer>
          <SearchText>جستجو</SearchText>
          <SearchIconLeft />
        </SearchContainer>
        <QuestionContainer>
          <WrittenQuestion>سوال خود را بنویسید...</WrittenQuestion>
          <CommonQuestionContainer>سوالات متداول</CommonQuestionContainer>
        </QuestionContainer>
      </MainCommonQuestion>
      <MainCommonQuestionPhone>
        <TextHolder>سوالات متداول</TextHolder>
        <SubMainCommonQuestion>
          <SearchContainer>
            <SearchIconLeft />
          </SearchContainer>
          <QuestionContainer>
            <WrittenQuestion>سوال خود را بنویسید...</WrittenQuestion>
          </QuestionContainer>
        </SubMainCommonQuestion>
      </MainCommonQuestionPhone>
    </div>
  );
};

const MainCommonQuestionPhone = styled.div`
  width: 100%;
  display: none;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 8px;
  @media (max-width: 640px) {
    display: flex;
  }
`;

const TextHolder = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const SubMainCommonQuestion = styled.div`
  width: 100%;
  display: none;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px;
  border-radius: 30px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  @media (max-width: 640px) {
    display: flex;
  }
`;

const MainCommonQuestion = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 16px 24px;
  border-radius: 30px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  @media (max-width: 640px) {
    display: none;
  }
`;
const SearchContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  display: inline-flex;
  padding: 8px;
  gap: 10px;
  border-radius: 44px;
  background: var(--Primery-Light-Color, #ede059);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
`;
const SearchText = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const QuestionContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 362px;
  flex-shrink: 0;
  @media (max-width: 640px) {
    width: 190px;
  }
`;
const WrittenQuestion = styled.div`
  color: var(--40, #999);
  text-align: right;
  font-family: IRANSans;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  direction: rtl;
`;
const CommonQuestionContainer = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
