import React, { useState, useEffect } from "react";
import styled from "styled-components";
import { accordiondata } from "./accordiondata";
import { Accordion } from "./Accordion";

import { Link } from "react-router-dom";

export const AccordionHolder = () => {
  const [accordionData, setAccordionData] = useState([]);

  // console.log(accordionData);

  useEffect(() => {
    const slugs = ["پاسپورت", "تست-PCR", "ویزا", "مقدار-بار-مجاز"]; // Add more slugs as needed
    const fetchData = async () => {
      try {
        const dataPromises = slugs.map((slug) =>
          fetch(`/api/faq/categories/${slug}`)
            .then((response) => response.json())
            .then((data) => ({
              slug: slug,
              faqs: data.faqs.map((faq) => ({
                question: faq.ask,
                answer: faq.answer,
              })),
            }))
        );
        const allData = await Promise.all(dataPromises);
        const combinedData = allData.reduce((acc, { slug, faqs }) => {
          acc[slug] = faqs;
          return acc;
        }, {});
        setAccordionData(combinedData);
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  return (
    <MainAccordionholder>
      <DescriptionAccordion>
        <AccordionTitleText>سوالات متداول</AccordionTitleText>
        <AccordionSubtitleText>
          در صورت وجود مشکل به بخش سوالات متداول مراجعه کنید
        </AccordionSubtitleText>
      </DescriptionAccordion>
      <Accordionholder>
        {/* {accordiondata.map((section, index) => (
          <Accordion key={index} section={section} />
        ))} */}
        {Object.entries(accordionData).map(([slug, faqs]) =>
          faqs.map((faq, index) => (
            <Accordion key={`${slug}_${index}`} section={faq} />
          ))
        )}
      </Accordionholder>
      <Link to={`/QuestionBox`}>
        <MoreQuestions>
          <MoreQuestionsText> سوالات بیشتر</MoreQuestionsText>
        </MoreQuestions>
      </Link>
    </MainAccordionholder>
  );
};

const MainAccordionholder = styled.div`
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
  width: 80%;

  @media (max-width: 640px) {
    width: 90%;
  }
  /* border: 1px solid green; */
`;
const DescriptionAccordion = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const AccordionTitleText = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const AccordionSubtitleText = styled.div`
  color: #808080;
  text-align: center;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Accordionholder = styled.div`
  width: 100%;
`;
const MoreQuestions = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 35px;
  background: #ede059;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
`;
const MoreQuestionsText = styled.div`
  color: #5a623a;
  text-align: center;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
