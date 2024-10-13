import React, { useState, useEffect } from "react";
import styled from "styled-components";
import firsteuropecardimage from "../../Assets/images/firsteuropecardimage.png";
import CardImageTest from "../../Assets/images/CardImageTest.jpg";
import { InsuranceIcon } from "../../Assets/Svgs/InsuranceIcon";
import Qeshmair from "../../Assets/images/Qeshmair.png";

import axios from "axios";
import { Pagination } from "@mui/material";

export const CardsHolder = () => {
  const [tours, setTours] = useState([]);
  const [page, setPage] = useState(1);
  const toursPerPage = 9;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("api/tours/");
        setTours(response.data); // Assuming response.data contains the array of tours
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, []);

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const startIndex = (page - 1) * toursPerPage;
  const endIndex = page * toursPerPage;

  return (
    <div>
      <AllCardsHolder>
        {tours.slice(startIndex, endIndex).map((tour) => (
          <EachCardHolder key={tour.id}>
            <CardDetailsHolder>
              <LeftColumnOfCardDetailsHolder>
                <LeftColumnOfCardDetailsContainer>
                  <OriginAndDestinationHolder>
                    <OriginHolder>{tour.source_city.name}</OriginHolder>
                    <DestinationHolder>
                      {tour.first_city.name}
                    </DestinationHolder>
                  </OriginAndDestinationHolder>
                  <TourTimeHolder>
                    <TourTimeContainer>
                      {tour.dates_of_departure}
                    </TourTimeContainer>
                    <TourValidationText>اعتبار تور</TourValidationText>
                  </TourTimeHolder>
                  <DurationHolder>
                    <DurationContainer>{tour.accommodation}</DurationContainer>
                  </DurationHolder>
                  <PriceHolder>
                    <PriceContainer>
                      <TomanContainer>تومان</TomanContainer>
                      <PriceNumber>
                        {tour.TourPackages[0].double_price}
                      </PriceNumber>
                    </PriceContainer>
                  </PriceHolder>
                </LeftColumnOfCardDetailsContainer>
              </LeftColumnOfCardDetailsHolder>
              <RightColumnOfCardDetailsHolder>
                <RightColumnOfCardDetailsContainer>
                  <TourName>{tour.name}</TourName>
                  <AirLineHolder>
                    <AirLineName>{tour.airLine}</AirLineName>
                    <QeshmairIcon />
                  </AirLineHolder>
                  <FeaturesHolder>
                    {tour.Feature.map((feature) => (
                      <EachFeatureHolder key={feature.id}>
                        <EachFeatureName>{feature.title}</EachFeatureName>
                        <EachFeatureImage src={feature.icon} />
                      </EachFeatureHolder>
                    ))}
                  </FeaturesHolder>
                </RightColumnOfCardDetailsContainer>
              </RightColumnOfCardDetailsHolder>
            </CardDetailsHolder>
            {/* <CardImageHolder /> */}
            <CardImageHolder>
              <CardImage src={tour.image_horizontal} alt="Card Image" />
            </CardImageHolder>
          </EachCardHolder>
        ))}
      </AllCardsHolder>
      <Pagination
        count={Math.ceil(tours.length / toursPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
};

const AllCardsHolder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 30px;
`;

const EachCardHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 234px;
  width: 100%;
  border-radius: 35px;

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 35px;
    background: linear-gradient(
      270deg,
      #fff 0.21%,
      rgba(255, 255, 255, 0) 99.78%
    );
    z-index: 2;
    transition: background 0.3s ease; /* Add transition for smooth color change */
  }
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  /* border: 1px solid lightgray; */

  &:hover:before {
    /* Define hover effect */
    background: linear-gradient(
      270deg,
      #fff 50.21%,
      /* Change the gradient color */ rgba(255, 255, 255, 0) 99.78%
    );
  }
`;
// const CardImageHolder = styled.div`
//   position: absolute;
//   top: 0;
//   left: 0;
//   width: 100%;
//   height: 100%;
//   background-image: url(${CardImageTest});
//   background-size: cover;
//   background-position: center;
//   border-radius: 35px;
// `;
const CardDetailsHolder = styled.div`
  position: absolute;
  top: 24px;
  left: 24px;
  width: 95%;
  height: 80%;
  z-index: 2;

  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
  @media (min-width: 640px) and (max-width: 1024px) {
    margin-left: 30px;
  }
`;

const LeftColumnOfCardDetailsHolder = styled.div`
  width: 25%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: white;
  border-radius: 24px;
`;
const RightColumnOfCardDetailsHolder = styled.div`
  width: 70%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
`;
const LeftColumnOfCardDetailsContainer = styled.div`
  width: 85%;
  height: 154px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 8px;
`;
const OriginAndDestinationHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--Black, #000);
  text-align: right;
  font-family: IRANSans;
  font-size: 17px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const TourValidationText = styled.div``;
const DestinationHolder = styled.div``;

const TourTimeHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  color: var(--Black, #000);
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const OriginHolder = styled.div``;
const TourTimeContainer = styled.div``;

const DurationHolder = styled.div`
  display: flex;
  padding: 4px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 27px;
  background: var(--10, #e6e6e6);
`;
const DurationContainer = styled.div`
  color: var(--Black, #000);
  text-align: center;
  font-family: IRANSans(FaNum);
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  direction: rtl;
`;
const PriceHolder = styled.div`
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 40px;
  border-radius: 44px;
  background: #697a80;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
`;
const PriceContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const PriceNumber = styled.div`
  color: #fff;
  font-family: IRANSans(FaNum);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const TomanContainer = styled.div`
  color: #fff;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const RightColumnOfCardDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;
const TourName = styled.h3`
  color: var(--Black, #000);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 4;
`;
const AirLineHolder = styled.div`
  display: flex;
  padding: 8px 8px 8px 24px;
  justify-content: flex-end;
  align-items: center;
  gap: 4px;
  border-radius: 16px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
`;
const QeshmairIcon = styled.div`
  background-image: url(${Qeshmair});
  background-size: cover;
  background-position: center;
  width: 43px;
  height: 38px;
  /* border: 3px solid red; */
  z-index: 2;
`;
const AirLineName = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const FeaturesHolder = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  margin-top: 8px;
`;
const EachFeatureHolder = styled.div`
  display: flex;
  padding: 4px 8px 4px 16px;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  border-radius: 31px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
`;
const EachFeatureName = styled.div`
  color: var(--Black, #000);
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const EachFeatureImage = styled.img``;

const CardImageHolder = styled.div`
  position: relative; /* Change position to relative */
  width: 100%;
  height: 100%;
  border-radius: 35px;
  overflow: hidden; /* Hide any overflow from the image */
`;

const CardImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover; /* Make sure the image covers the container */
`;

// const FirstColumnOfCardDetailsHolder = styled.div`
//   width: 45%;
//   height: 100%;
// `;
// const OriginHolder = styled.div`
//   width: 100%;
//   height: 40%;
//   /* border: 2px solid green; */
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;
// const OriginContainer = styled.div`
//   color: #000;
//   text-align: right;
//   font-family: IRANSans;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;
// const DepartureTextAndDate = styled.div`
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between;
// `;
// const DepartureDate = styled.div`
//   color: #000;
//   text-align: right;
//   font-family: IRANSans(FaNum);
//   font-size: 12.8px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;
// const DepartureText = styled.div`
//   color: #000;
//   text-align: right;
//   font-family: IRANSans;
//   font-size: 12.8px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;
// const DurationHolder = styled.div`
//   width: 100%;
//   height: 20%;
//   /* border: 2px solid blue; */
//   display: flex;
//   flex-direction: row;
//   align-items: center;
// `;

// const LeftLineOfDuration = styled.div`
//   width: 25%;
//   height: 2px;
//   background: #ccc;
// `;
// const DurationContainer = styled.div`
//   width: 70%;
//   height: 100%;
//   color: #000;
//   text-align: center;
//   font-family: IRANSans(FaNum);
//   font-size: 12.8px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   display: flex;
//   flex-direction: column;
//   justify-content: center;
//   align-items: center;
//   border-radius: 27px;
//   background: #e6e6e6;
// `;

// const RightLineOfDuration = styled.div`
//   width: 25%;
//   height: 2px;
//   background: #ccc;
// `;

// const DestinationHolder = styled.div`
//   width: 100%;
//   height: 40%;
//   /* border: 2px solid green; */
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
// `;
// const DestinationContainer = styled.div`
//   color: #000;
//   text-align: right;
//   font-family: IRANSans;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;

// const SecondColumnOfCardDetailsHolder = styled.div`
//   width: 10%;
//   height: 100%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   /* border: 3px solid red; */
// `;

// const VerticalLine = styled.div`
//   width: 2px;
//   height: 80%;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   background: #ccc;
// `;
// const ThirdColumnOfCardDetailsHolder = styled.div`
//   width: 45%;
//   height: 100%;
//   display: flex;
//   flex-direction: column;
//   justify-content: space-between;
//   align-items: end;
// `;
// const CardTitle = styled.div`
//   height: 15%;
//   display: flex;
//   align-items: end;
//   color: #000;
//   text-align: right;
//   font-family: IRANSans;
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
// `;
// const Benefits = styled.div`
//   height: 12%;
//   display: flex;
// `;
// const InsuranceHolder = styled.div`
//   display: flex;
//   padding: 4px 8px 4px 16px;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;
//   border-radius: 31px;
//   background: #fff;
//   box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
// `;
// const InsuranceText = styled.div`
//   color: #000;
//   text-align: right;
//   font-family: IRANSans;
//   font-size: 12.8px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
// `;

// const PriceHolder = styled.div`
//   height: 25%;
//   display: flex;
//   padding: 8px 30px;
//   justify-content: center;
//   align-items: center;
//   gap: 8px;
//   border-radius: 44px;
//   background: #697a80;
//   box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
// `;

// const NumberHolder = styled.div`
//   color: #fff;
//   font-family: IRANSans(FaNum);
//   font-size: 20px;
//   font-style: normal;
//   font-weight: 700;
//   line-height: normal;
//   @media (min-width: 640px) and (max-width: 1024px) {
//     font-size: 18px;
//   }
// `;
// const TomanHolder = styled.div`
//   color: #fff;
//   font-family: IRANSans;
//   font-size: 12.8px;
//   font-style: normal;
//   font-weight: 300;
//   line-height: normal;
//   @media (min-width: 640px) and (max-width: 1024px) {
//     font-size: 10px;
//   }
// `;

{
  /* <FirstColumnOfCardDetailsHolder>
            <OriginHolder>
              <OriginContainer>تهران</OriginContainer>
              <DepartureTextAndDate>
                <DepartureDate>1400/10/04</DepartureDate>
                <DepartureText> پرواز رفت</DepartureText>
              </DepartureTextAndDate>
            </OriginHolder>
            <DurationHolder>
              <LeftLineOfDuration></LeftLineOfDuration>
              <DurationContainer> روز و 7 شب 8</DurationContainer>
              <RightLineOfDuration></RightLineOfDuration>
            </DurationHolder>
            <DestinationHolder>
              <DestinationContainer>پاریس</DestinationContainer>
              <DepartureTextAndDate>
                <DepartureDate>1400/10/04</DepartureDate>
                <DepartureText> پرواز برگشت</DepartureText>
              </DepartureTextAndDate>
            </DestinationHolder>
          </FirstColumnOfCardDetailsHolder>
          <SecondColumnOfCardDetailsHolder>
            <VerticalLine></VerticalLine>
          </SecondColumnOfCardDetailsHolder>
          <ThirdColumnOfCardDetailsHolder>
            <CardTitle>تور سه روزه</CardTitle>
            <Benefits>
              <InsuranceHolder>
                <InsuranceText>بیمه</InsuranceText>
                <InsuranceIcon />
              </InsuranceHolder>
            </Benefits>
            <PriceHolder>
              <TomanHolder>تومان</TomanHolder>
              <NumberHolder>4,000,000</NumberHolder>
            </PriceHolder>
          </ThirdColumnOfCardDetailsHolder> */
}
