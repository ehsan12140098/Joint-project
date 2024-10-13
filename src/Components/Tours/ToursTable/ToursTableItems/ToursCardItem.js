import React from "react";
import styled from "styled-components";

import Qeshmair from "../../../../Assets/images/Qeshmair.png";

export default function ToursCardItem({ tour }) {
  return (
    <EachCardHolder>
      <CardDetailsHolder>
        <LeftColumnOfCardDetailsHolder>
          <LeftColumnOfCardDetailsContainer>
            <OriginAndDestinationHolder>
              <OriginHolder>{tour.source_city.name}</OriginHolder>
              <DestinationHolder>{tour.first_city.name}</DestinationHolder>
            </OriginAndDestinationHolder>
            <TourTimeHolder>
              <TourTimeContainer>{tour.dates_of_departure}</TourTimeContainer>
              <TourValidationText>اعتبار تور</TourValidationText>
            </TourTimeHolder>
            <DurationHolder>
              <DurationContainer>{tour.accommodation}</DurationContainer>
            </DurationHolder>
            <PriceHolder>
              <PriceContainer>
                <TomanContainer>تومان</TomanContainer>
                <PriceNumber>{tour.TourPackages[0].double_price}</PriceNumber>
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
  );
}

const EachCardHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  height: 234px;
  width: 100%;
  border-radius: 35px;
  direction: ltr;

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
