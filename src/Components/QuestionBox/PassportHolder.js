import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";

export const PassportHolder = ({ selectedOption }) => {
  const [faqData, setFaqData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `/api/faq/categories/${selectedOption.slug}`
        );
        setFaqData(response.data.faqs);
      } catch (error) {
        console.error("Error fetching FAQ data:", error);
      }
    };

    fetchData();
  }, [selectedOption.slug]);

  return (
    <PassportContainer>
      <TextHolder>{selectedOption.name}</TextHolder>
      {faqData.map((faq, index) => (
        <TextContainer key={index}>
          <TextOne>{faq.ask}</TextOne>
          <TextTwo>{faq.answer}</TextTwo>
        </TextContainer>
      ))}
    </PassportContainer>
  );
};

const PassportContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 27px;
  margin-top: 12px;
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
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 16px;
  padding: 27px 63px;
  border-radius: 30px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);

  @media (max-width: 1024px) {
    padding: 27px;
  }
`;
const TextOne = styled.div`
  color: #000;
  text-align: right;
  direction: rtl;
  /* H4 */
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;
const TextTwo = styled.div`
  color: #000;
  text-align: right;
  direction: rtl;
  /* Paragraph */
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;
