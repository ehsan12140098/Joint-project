import React, { useEffect, useState, useRef } from "react";
import styled from "styled-components";
import axios from "axios";
import { useParams } from "react-router-dom";

import { Navbar3 } from "../Components/Common/Navbar3";
import { Consultation } from "../Components/Common/Consultation";
import { VisaPageGuide } from "../Components/Common/VisaPageGuide";

import nav1background from "../Assets/images/nav1background.png";
import phonenavbarbackground from "../Assets/images/phonenavbarbackground.png";
import BlueFlag from "../Assets/images/BlueFlag.png";

const API_URL = "/api/visa/";

export const CountryVisa = () => {
  const { slug } = useParams();
  const [countryData, setCountryData] = useState(null);

  useEffect(() => {
    const fetchCountryData = async () => {
      try {
        const response = await axios.get(`${API_URL}${slug}`);
        setCountryData(response.data);
      } catch (error) {
        console.error("Error fetching country data:", error);
      }
    };

    fetchCountryData();
  }, [slug]);

  // const questionRefs = countryData?.visa_discretion.map(() => useRef());

  if (!countryData) {
    return <div>Loading...</div>;
  }

  const discretionTitles = countryData.visa_discretion.map(
    (discretion) => discretion.title
  );

  // console.log(discretionTitles);

  // console.log(
  //   "Length of countryData.visa_discretion:",
  //   countryData.visa_discretion.length
  // );

  return (
    <div>
      <TotalHotelPageHolder>
        <MainHotelPageHolder>
          <Navbar3Holder>
            <Navbar3 />
          </Navbar3Holder>
          <SubMainSchengenVisaHolder>
            <LeftSideSubMain>
              <VisaPageGuide discretionTitles={discretionTitles} />
              <Consultation />
            </LeftSideSubMain>
            <RightSideSubMain>
              <SchengenPicHolder>
                <SchengenPicContainer>
                  <ShortText>{countryData.title}</ShortText>
                  <LongText>{countryData.discretion}</LongText>
                </SchengenPicContainer>
                <ImageHolder src={countryData.image} alt={countryData.title} />
              </SchengenPicHolder>
              <PartsHolder>
                {countryData.visa_discretion.map((discretion, index) => (
                  <QuestionHolder key={index}>
                    <ShortQuestionHolderTitle>
                      {discretion.title}
                    </ShortQuestionHolderTitle>
                    <DangerHolder
                      dangerouslySetInnerHTML={{
                        __html: discretion.discretion,
                      }}
                    />
                  </QuestionHolder>
                ))}
              </PartsHolder>
            </RightSideSubMain>
          </SubMainSchengenVisaHolder>
        </MainHotelPageHolder>
      </TotalHotelPageHolder>
    </div>
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
  @media (max-width: 1024px) {
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

const SubMainSchengenVisaHolder = styled.div`
  width: 95%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
  @media (max-width: 1024px) {
    flex-direction: column;
    align-items: center;
    gap: 30px;
  }
`;

const LeftSideSubMain = styled.div`
  width: 28%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  gap: 16px;
`;

const RightSideSubMain = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 48px;
`;

const SchengenPicHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 30px;
  background: var(--White, #fff);
  gap: 30px;
  /* Main */
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 24px 40px 40px 30px;
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;

const SchengenPicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 23px;
`;
const ShortText = styled.h1`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const LongText = styled.p`
  color: #4d4d4d;
  text-align: justify;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  direction: rtl;
`;
const ImageHolder = styled.img`
  width: 196px;
  height: 196px;
  border-radius: 50%;
`;
const QuestionHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 15px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 16px;
`;
const ShortQuestionHolderTitle = styled.h2`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const DangerHolder = styled.div`
  direction: rtl;
`;
const PartsHolder = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;
