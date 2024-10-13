import React from "react";
import styled from "styled-components";
import similarhotel from "../../Assets/images/similarhotel.png";
import threewhitestar from "../../Assets/images/threewhitestar.png";

export const SimilarHotels = () => {
  return (
    <SimilarHotelsHolder>
      <SimilarHotelsTitleHolder>هتل های مشابه</SimilarHotelsTitleHolder>
      <EachSimilarHotelHolder>
        <EachSimilarHotelContentHolder>
          <EachSimilarHotelTitle>
            Grand hilaroium istanbul
          </EachSimilarHotelTitle>
          <EachSimilarHotelRating></EachSimilarHotelRating>
        </EachSimilarHotelContentHolder>
      </EachSimilarHotelHolder>
      <EachSimilarHotelHolder>
        <EachSimilarHotelContentHolder>
          <EachSimilarHotelTitle>
            Grand hilaroium istanbul
          </EachSimilarHotelTitle>
          <EachSimilarHotelRating></EachSimilarHotelRating>
        </EachSimilarHotelContentHolder>
      </EachSimilarHotelHolder>
      <EachSimilarHotelHolder>
        <EachSimilarHotelContentHolder>
          <EachSimilarHotelTitle>
            Grand hilaroium istanbul
          </EachSimilarHotelTitle>
          <EachSimilarHotelRating></EachSimilarHotelRating>
        </EachSimilarHotelContentHolder>
      </EachSimilarHotelHolder>
    </SimilarHotelsHolder>
  );
};

const SimilarHotelsHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 30px;
`;

const SimilarHotelsTitleHolder = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const EachSimilarHotelHolder = styled.div`
  position: relative;
  width: 100%;
  height: 220px;
  background-image: url(${similarhotel});
  background-size: cover;
  background-position: center;
  border-radius: 35px;
  &:before {
    content: "";
    position: absolute;
    border-radius: 35px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 35px;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 65.09%, #000 91.22%);
    z-index: 1; /* Set z-index to place it behind the image */
  }
`;

const EachSimilarHotelContentHolder = styled.div`
  width: 80%;
  height: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: center;
  padding-bottom: 15px;
`;

const EachSimilarHotelTitle = styled.div`
  color: #fff;
  text-align: center;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  z-index: 2;
`;

const EachSimilarHotelRating = styled.div`
  width: 45%;
  height: 10%;
  background-image: url(${threewhitestar});
  background-size: cover;
  background-position: center;
  z-index: 2;
`;
