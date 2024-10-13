import React, { useState, useEffect } from "react";
import styled from "styled-components";
import tableimage from "../../Assets/images/tableimage.png";
import Qeshmair from "../../Assets/images/Qeshmair.png";
import eachtablebottomcloud from "../../Assets/images/eachtablebottomcloud.png";
import { DottedLine } from "../../Assets/Svgs/DottedLine";
import { EachTable } from "./EachTable";

import axios from "axios";
import { Pagination } from "@mui/material";

export const TablesHolder = () => {
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
      <AllTablesHolder>
        {tours.slice(startIndex, endIndex).map((tour) => (
          <EachTableHolder key={tour.id}>
            <TableImageHolder>
              <TableImage src={tour.image} alt="Card Image" />
            </TableImageHolder>
            <TableDetailsHolder>
              <TableDetailsContainer>
                <AirlineAndDurationHolder>
                  <DurationHolder>
                    <DurationText>{tour.accommodation} </DurationText>
                  </DurationHolder>
                  <AirlineHolder>
                    <AirlineName>{tour.airLine}</AirlineName>
                    <QeshmairIcon />
                  </AirlineHolder>
                </AirlineAndDurationHolder>
                <TableTitle>{tour.name}</TableTitle>
                <FeaturesHolder>
                  {tour.Feature.map((feature) => (
                    <EachFeatureHolder key={feature.id}>
                      <FeatureText>{feature.title}</FeatureText>
                    </EachFeatureHolder>
                  ))}
                </FeaturesHolder>
                <OriginAndDestinationHolder>
                  <OriginAndDestinationContainer>
                    <OriginContainer>
                      <OriginName>{tour.first_city.name}</OriginName>
                      <DepartureContainer>
                        <DepartureDate>{tour.dates_of_departure}</DepartureDate>
                        <DepartureText>تاریخ اعتبار</DepartureText>
                      </DepartureContainer>
                    </OriginContainer>
                    <DestinationContainer>
                      <DestinationName>{tour.source_city.name}</DestinationName>
                    </DestinationContainer>
                  </OriginAndDestinationContainer>
                  <DottedLineHolder>
                    <DottedLine />
                  </DottedLineHolder>
                </OriginAndDestinationHolder>
                <PriceHolder>
                  <PriceContainer>
                    <TomanHolder>تومان</TomanHolder>
                    <NumberHolder>
                      {tour.TourPackages[0].double_price.toLocaleString()}
                    </NumberHolder>
                  </PriceContainer>
                </PriceHolder>
              </TableDetailsContainer>
            </TableDetailsHolder>
          </EachTableHolder>
        ))}
      </AllTablesHolder>
      <Pagination
        count={Math.ceil(tours.length / toursPerPage)}
        page={page}
        onChange={handlePageChange}
      />
    </div>
  );
};

const AllTablesHolder = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(3, 1fr);
  grid-column-gap: 25px;
  grid-row-gap: 20px;
  direction: rtl;
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    grid-template-rows: repeat(9, 1fr);
  }
`;

const EachTableHolder = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 500px;
  /* border: 1px solid pink; */
  width: 100%;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  border-radius: 35px;
  /* border: 1px solid lightgray; */
  @media (max-width: 640px) {
    height: 425px;
  }
`;
const TableImageHolder = styled.div`
  position: relative;
  width: 100%;
  height: 45%;
  /* display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center; */
  /* border: 1px solid pink; */
  /* background-image: url(${tableimage});
  background-size: cover;
  background-position: center; */
  border-top-right-radius: 35px;
  border-top-left-radius: 35px;
  overflow: hidden;
  &:before {
    z-index: 2;
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    /* border-radius: 35px; */
    background: linear-gradient(
      5deg,
      #fff 20.05%,
      rgba(255, 255, 255, 0) 96.01%
    );
  }
`;
const TableImage = styled.img`
  /* border: 3px solid red; */
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  /* z-index: 2; */
`;
const TableBottomCloud = styled.div`
  width: 100%;
  height: 80%;
  position: absolute;
  bottom: 0;
  z-index: 1;
`;
const BottomCloudImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
const TableImageContent = styled.div`
  width: 90%;
  height: 80%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 30px;
  /* align-items: center; */
`;
const AirlineAndDurationHolder = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
`;
const AirlineHolder = styled.div`
  width: 40%;
  display: flex;
  padding: 4px 8px;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 4px;
  border-radius: 45px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  border: 1px solid white;
`;
const AirlineName = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const QeshmairIcon = styled.div`
  background-image: url(${Qeshmair});
  background-size: cover;
  background-position: center;
  width: 25px;
  height: 25px;
  /* border: 3px solid red; */
  z-index: 2;
`;
const TableTitle = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
  margin-bottom: 20px;
`;
const DurationHolder = styled.div`
  display: flex;
  padding: 4px 8px;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 27px;
  background: #e6e6e6;
  direction: rtl;
`;
const FeaturesHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: flex-end;
  flex-wrap: wrap;
  gap: 20px;
  direction: rtl;
`;
const EachFeatureHolder = styled.div`
  display: flex;
  padding: 4px 8px;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  border-radius: 27px;
  background: #e6e6e6;
  direction: rtl;
`;
const DurationText = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans(FaNum);
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const FeatureText = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans(FaNum);
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const TableDetailsHolder = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 3;
`;
const TableDetailsContainer = styled.div`
  /* height: 90%; */
  width: 90%;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  /* align-items: center; */
  gap: 25px;
`;
const PriceHolder = styled.div`
  display: flex;
  width: 100%;
  /* height: 26%; */
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  border-radius: 44px;
  background: #e6e6e6;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
`;
const PriceContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: center;
  align-items: center;
  gap: 8px;
`;
const TomanHolder = styled.div`
  color: #5a623a;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const NumberHolder = styled.div`
  color: #000;
  font-family: IRANSans(FaNum);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const OriginAndDestinationHolder = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: flex-end;
  align-items: flex-start;
  height: 50%;
  width: 100%;
`;
const OriginAndDestinationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: start;
  height: 90%;
  width: 90%;
`;
const OriginContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 5px;
  width: 100%;
  /* border: 1px solid pink; */
`;
const OriginName = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid purple; */
`;
const DepartureContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: 1px solid green; */
`;
const DepartureText = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid blue; */
`;
const DepartureDate = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans(FaNum);
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid red; */
`;

const DestinationContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: start;
  gap: 5px;
  width: 100%;
  /* border: 1px solid pink; */
`;
const DestinationName = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid purple; */
`;
const ReturnContainer = styled.div`
  display: flex;
  flex-direction: row-reverse;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  /* border: 1px solid green; */
`;
const ReturnText = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid blue; */
`;
const ReturnDate = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans(FaNum);
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  /* border: 1px solid red; */
`;

const DottedLineHolder = styled.div`
  width: 10%;
  display: flex;
  flex-direction: row;
  justify-content: start;
  align-items: center;
  /* border: 3px solid pink; */
  margin-top: 10px;
`;

// <DestinationContainer>
//   <DestinationName>پاریس</DestinationName>
//   <ReturnContainer>
//     <ReturnDate>1400/10/04</ReturnDate>
//     <ReturnText>پرواز برگشت</ReturnText>
//   </ReturnContainer>
// </DestinationContainer>;

// <AllTablesHolder>
//       <EachTableHolder>
//         <TableImageHolder>
//           <TableImageContent>
//             <AirlineAndDurationHolder>
//               <DurationHolder>
//                 <DurationText>4 روز و3 شب</DurationText>
//               </DurationHolder>
//               <AirlineHolder>
//                 <AirlineName>قشم ایر</AirlineName>
//                 <QeshmairIcon />
//               </AirlineHolder>
//             </AirlineAndDurationHolder>
//           </TableImageContent>
//         </TableImageHolder>
//         <TableDetailsHolder>
//           <TableDetailsContainer>
//             <TableTitle>تور فرانسه</TableTitle>
//             <OriginAndDestinationHolder>
//               <OriginAndDestinationContainer>
//                 <OriginContainer>
//                   <OriginName>تهران</OriginName>
//                   <DepartureContainer>
//                     <DepartureDate>ویژه فروردین ماه</DepartureDate>
//                     <DepartureText>تاریخ اعتبار</DepartureText>
//                   </DepartureContainer>
//                 </OriginContainer>
//                 <DestinationContainer>
//                   <DestinationName>پاریس</DestinationName>
//                 </DestinationContainer>
//               </OriginAndDestinationContainer>
//               <DottedLineHolder>
//                 <DottedLine />
//               </DottedLineHolder>
//             </OriginAndDestinationHolder>
//             <PriceHolder>
//               <PriceContainer>
//                 <TomanHolder>تومان</TomanHolder>
//                 <NumberHolder>4,000,000</NumberHolder>
//               </PriceContainer>
//             </PriceHolder>
//           </TableDetailsContainer>
//         </TableDetailsHolder>
//       </EachTableHolder>
//     </AllTablesHolder>
