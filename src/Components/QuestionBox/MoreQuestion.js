import React from "react";
import styled from "styled-components";

export const MoreQuestion = () => {
  return (
    <MoreQuestionHolder>
      <MoreQuestionContainer>
        <QuestionText>سوالات بیشتر</QuestionText>
      </MoreQuestionContainer>
    </MoreQuestionHolder>
  );
};

const MoreQuestionHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;
const MoreQuestionContainer = styled.div`
  padding: 8px 16px;
  gap: 10px;
  border-radius: 41px;
  background: var(--White, #fff);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
`;

const QuestionText = styled.div`
  color: var(--Secondary-Dark-Color, #697a80);
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
