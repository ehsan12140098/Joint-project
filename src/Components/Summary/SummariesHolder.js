import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tableimage from "../../Assets/images/tableimage.png";
import Qeshmair from "../../Assets/images/Qeshmair.png";
import { DottedLine } from "../../Assets/Svgs/DottedLine";
import { VerticalDivider } from "../../Assets/Svgs/VerticalDivider";

import axios from "axios";
import { Pagination } from "@mui/material";

export const SummariesHolder = () => {
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

  const getBackgroundColor = (index) => {
    // Check if the index is odd
    if ((index + 1) % 2 === 0) {
      return "#efefef"; // Background color for even indexes
    } else {
      return ""; // Default background color for odd indexes
    }
  };

  return (
    <div>
      <AllSummariesHolder>
        {tours.slice(startIndex, endIndex).map((tour, index) => (
          <EachSummaryHolder
            key={tour.id}
            style={{ background: getBackgroundColor(index) }}
          >
            <PriceHolder>
              <TomanHolder>تومان</TomanHolder>
              <PriceNumber>
                {" "}
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
        ))}
      </AllSummariesHolder>
      <Pagination
        count={Math.ceil(tours.length / toursPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
};

const AllSummariesHolder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 10px;
  /* border: 2px solid red; */
`;

const EachSummaryHolder = styled.div`
  width: 100%;
  height: 90px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  border-radius: 17px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
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

{
  /* <AllSummariesHolder>
<EachSummaryHolder1>
  <PriceHolder>
    <TomanHolder>تومان</TomanHolder>
    <PriceNumber>4,000,000</PriceNumber>
  </PriceHolder>
  <DeviderHolder>
    <VerticalDivider></VerticalDivider>
  </DeviderHolder>
  <DurationHolder>
    <DurationContainer>5 روز و 5 شب</DurationContainer>
  </DurationHolder>
  <DeviderHolder>
    <VerticalDivider></VerticalDivider>
  </DeviderHolder>
  <OriginAndDestinationHolder>
    <OriginAndDestinationContainer>
      <OriginAndDeparture>
        <DepartureDateHolder>1400/10/04</DepartureDateHolder>
        <OriginHolder>تهران</OriginHolder>
      </OriginAndDeparture>
      <DestinationAndReturn>
        <ReturnDateHolder>1400/10/04</ReturnDateHolder>
        <DestinationHolder>پاریس</DestinationHolder>
      </DestinationAndReturn>
    </OriginAndDestinationContainer>
  </OriginAndDestinationHolder>
  <DeviderHolder>
    <VerticalDivider></VerticalDivider>
  </DeviderHolder>
  <DescriptionHolder>تور فرانسه</DescriptionHolder>
</EachSummaryHolder1>
<EachSummaryHolder2>
  <PriceHolder>
    <TomanHolder>تومان</TomanHolder>
    <PriceNumber>4,000,000</PriceNumber>
  </PriceHolder>
  <DeviderHolder>
    <VerticalDivider></VerticalDivider>
  </DeviderHolder>
  <DurationHolder>
    <DurationContainer>5 روز و 5 شب</DurationContainer>
  </DurationHolder>
  <DeviderHolder>
    <VerticalDivider></VerticalDivider>
  </DeviderHolder>
  <OriginAndDestinationHolder>
    <OriginAndDestinationContainer>
      <OriginAndDeparture>
        <DepartureDateHolder>1400/10/04</DepartureDateHolder>
        <OriginHolder>تهران</OriginHolder>
      </OriginAndDeparture>
      <DestinationAndReturn>
        <ReturnDateHolder>1400/10/04</ReturnDateHolder>
        <DestinationHolder>پاریس</DestinationHolder>
      </DestinationAndReturn>
    </OriginAndDestinationContainer>
  </OriginAndDestinationHolder>
  <DeviderHolder>
    <VerticalDivider></VerticalDivider>
  </DeviderHolder>
  <DescriptionHolder>تور فرانسه</DescriptionHolder>
</EachSummaryHolder2>
</AllSummariesHolder> */
}
