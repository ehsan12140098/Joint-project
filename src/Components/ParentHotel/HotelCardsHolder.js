import React, { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
import firsteuropecardimage from "../../Assets/images/firsteuropecardimage.png";
import { FiveYellowStars } from "../../Assets/Svgs/FiveYellowStars";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

export const HotelCardsHolder = () => {
  const [hotelData, setHotelData] = useState({ results: [] });
  const [currentPage, setCurrentPage] = useState(1);
  const [totalPages, setTotalPages] = useState(0);
  const perPage = 9; // Number of hotels per page

  useEffect(() => {
    // Function to fetch hotel data for the current page
    const fetchHotelData = async () => {
      try {
        const response = await axios.get("/api/hotels/", {
          params: {
            page: currentPage,
            limit: perPage,
          },
        });
        // Update state with fetched hotel data
        setHotelData(response.data);
        setTotalPages(Math.ceil(response.data.count / perPage));
      } catch (error) {
        console.error("Error fetching hotel data:", error);
      }
    };

    // Call the fetchHotelData function
    fetchHotelData();
  }, [currentPage]); // Fetch data when currentPage changes

  // Function to handle page change
  const handlePageChange = (pageNumber) => {
    setCurrentPage(pageNumber);
  };

  return (
    <div>
      <AllCardsHolder>
        {hotelData.results.map((hotel, index) => (
          <EachCardHolder key={index}>
            <CardDetailsHolder>
              <FirstColumnOfCardDetailsHolder>
                <OriginHolder>
                  <OriginContainer>{hotel.name}</OriginContainer>
                </OriginHolder>
                <DestinationHolder>
                  <DestinationContainer>{hotel.en_name}</DestinationContainer>
                </DestinationHolder>
                <FiveYellowStars />
              </FirstColumnOfCardDetailsHolder>
              <SecondColumnOfCardDetailsHolder>
                <VerticalLine></VerticalLine>
              </SecondColumnOfCardDetailsHolder>
            </CardDetailsHolder>
            <CardImageHolder src={hotel.image} />
          </EachCardHolder>
        ))}
      </AllCardsHolder>
      {/* <div>
        {currentPage > 1 && (
          <button onClick={() => handlePageChange(currentPage - 1)}>
            Previous
          </button>
        )}
        {currentPage < totalPages && (
          <button onClick={() => handlePageChange(currentPage + 1)}>
            Next
          </button>
        )}
      </div> */}
      <Stack spacing={2} direction="row" justifyContent="center">
        <Pagination
          variant="outlined"
          count={totalPages}
          page={currentPage}
          onChange={(event, page) => handlePageChange(page)}
          sx={{
            "& .MuiPaginationItem-previousNext": {
              backgroundColor: "rgb(226, 232, 240)",
            },

            "& .MuiPaginationItem-page.Mui-selected": {
              backgroundColor: "rgb(237, 224, 89)",
            },
            "& .MuiPaginationItem-page:hover": {
              backgroundColor: "inherit", // Set hover background color to transparent
            },
          }}
        />
      </Stack>
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
  justify-content: center;
  align-items: center;
  height: 190px;
  width: 100%;
  border-radius: 35px;
  /* border: 1px solid white; */

  &:before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 35px;
    background: linear-gradient(90deg, #fff 50%, rgba(255, 255, 255, 0) 93.21%);
  }
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
  /* border: 1px solid lightgray; */
`;
const CardImageHolder = styled.img`
  width: 70%;
  height: 99%;
  border-radius: 35px;
  /* border: 3px solid red; */
`;
const CardDetailsHolder = styled.div`
  width: 60%;
  height: 80%;
  /* border: 3px solid blue; */
  z-index: 2;
  margin-left: 40px;
  display: flex;
  flex-direction: row;
  justify-content: end;
  align-items: center;
  @media (min-width: 640px) and (max-width: 1024px) {
    margin-left: 30px;
  }
`;
const FirstColumnOfCardDetailsHolder = styled.div`
  width: 85%;
  height: 100%;
  /* border: 3px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 8px;
`;
const OriginHolder = styled.div`
  width: 100%;
  /* height: 40%; */
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const OriginContainer = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  font-weight: 700;
`;
const DepartureTextAndDate = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const DepartureDate = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans(FaNum);
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const DepartureText = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const DurationHolder = styled.div`
  width: 100%;
  height: 20%;
  /* border: 2px solid blue; */
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const LeftLineOfDuration = styled.div`
  width: 25%;
  height: 2px;
  background: #ccc;
`;
const DurationContainer = styled.div`
  width: 70%;
  height: 100%;
  color: #000;
  text-align: center;
  font-family: IRANSans(FaNum);
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 27px;
  background: #e6e6e6;
`;

const RightLineOfDuration = styled.div`
  width: 25%;
  height: 2px;
  background: #ccc;
`;

const DestinationHolder = styled.div`
  width: 100%;
  /* height: 40%;    */
  /* border: 2px solid green; */
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin-bottom: 8px;
`;
const DestinationContainer = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const SecondColumnOfCardDetailsHolder = styled.div`
  width: 15%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  /* border: 3px solid red; */
`;

const VerticalLine = styled.div`
  width: 1px;
  height: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #ccc;
`;
const ThirdColumnOfCardDetailsHolder = styled.div`
  width: 45%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
`;
const CardTitle = styled.div`
  height: 15%;
  display: flex;
  align-items: end;
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const Benefits = styled.div`
  height: 12%;
  display: flex;
`;
const InsuranceHolder = styled.div`
  display: flex;
  padding: 4px 8px 4px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 31px;
  background: #fff;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
`;
const InsuranceText = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const PriceHolder = styled.div`
  height: 25%;
  display: flex;
  padding: 8px 30px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 44px;
  background: #697a80;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.05);
`;

const NumberHolder = styled.div`
  color: #fff;
  font-family: IRANSans(FaNum);
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 18px;
  }
`;
const TomanHolder = styled.div`
  color: #fff;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 10px;
  }
`;
