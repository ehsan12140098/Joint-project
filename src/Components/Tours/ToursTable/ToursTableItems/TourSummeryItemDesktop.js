import React from 'react';
import styled from 'styled-components';

import Qeshmair from '../../../../Assets/images/Qeshmair.png';
import { VerticalDivider } from '../../../../Assets/Svgs/VerticalDivider';

export default function ToursSummaryItemDesktop({ tour }) {
  return (
    <EachSummaryHolder>
      <PriceHolder>
        <TomanHolder>تومان</TomanHolder>
        <PriceNumber>
          {' '}
          {tour.TourPackages[0].double_price.toLocaleString()}
        </PriceNumber>
      </PriceHolder>
      <DeviderHolder>
        <VerticalDivider></VerticalDivider>
      </DeviderHolder>
      <DurationHolder>
        <DurationContainer>{tour.accommodation}</DurationContainer>
      </DurationHolder>
      <DeviderHolder>
        <VerticalDivider></VerticalDivider>
      </DeviderHolder>
      <OriginAndDestinationHolder>
        <OriginAndDestinationContainer>
          <OriginAndDestination>
            <DestinationHolder>پاریس</DestinationHolder>
            <OriginHolder>{tour.first_city.name}</OriginHolder>
          </OriginAndDestination>
          <DepartureAndReturn>
            <ValidationDate>{tour.dates_of_departure}</ValidationDate>
            <ValidationText>تاریخ اعتبار</ValidationText>
          </DepartureAndReturn>
        </OriginAndDestinationContainer>
      </OriginAndDestinationHolder>
      <DeviderHolder>
        <VerticalDivider></VerticalDivider>
      </DeviderHolder>
      <DescriptionHolder>{tour.name}</DescriptionHolder>
    </EachSummaryHolder>
  );
}

const EachSummaryHolder = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 17px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  direction: ltr;
`;

const DeviderHolder = styled.div`
  /* border: 2px solid green; */
  height: 100%;
  width: 0.5%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const PriceHolder = styled.div`
  /* border: 2px solid green; */
  height: 100%;
  width: 18%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const PriceNumber = styled.div`
  color: #5a623a;
  font-family: IRANSans(FaNum);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 16px;
  }
`;
const TomanHolder = styled.div`
  color: #5a623a;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 10px;
  }
`;
const DurationHolder = styled.div`
  /* border: 2px solid green; */
  height: 100%;
  width: 16%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const DurationContainer = styled.div`
  display: flex;
  padding: 4px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 27px;
  background: #e6e6e6;
  color: #000;
  text-align: center;
  font-family: IRANSans(FaNum);
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  direction: rtl;
`;
const OriginAndDestinationHolder = styled.div`
  /* border: 2px solid green; */
  height: 100%;
  width: 30%;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const OriginAndDestinationContainer = styled.div`
  /* border: 2px solid green; */
  height: 80%;
  width: 80%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 5px;
`;
const OriginAndDestination = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const OriginHolder = styled.div`
  /* border: 2px solid green; */
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;
const DestinationHolder = styled.div`
  /* border: 2px solid green; */
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans(FaNum);
  font-size: 12.5px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const DepartureAndReturn = styled.div`
  /* border: 2px solid green; */
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const ValidationText = styled.div`
  /* border: 2px solid green; */
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 14px;
  }
`;
const ValidationDate = styled.div`
  /* border: 2px solid green; */
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans(FaNum);
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const AirlineHolder = styled.div`
  /* border: 2px solid green; */
  height: 100%;
  width: 16%;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const AirlineContainer = styled.div`
  /* border: 2px solid green; */
  height: 75%;
  width: 90%;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
`;
const AirlineName = styled.div`
  /* border: 2px solid green; */
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 12px;
  }
`;
const QeshmairIcon = styled.div`
  /* border: 2px solid green; */
  background-image: url(${Qeshmair});
  background-size: cover;
  background-position: center;
  width: 45px;
  height: 45px;
`;

const DescriptionHolder = styled.div`
  /* border: 2px solid green; */
  height: 100%;
  width: 24%;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  margin-right: 20px;
  color: var(--Black, #000);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 14%;
    font-size: 13px;
  }
`;
