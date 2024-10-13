import React from "react";
import styled from "styled-components";
import tableimage from "../../Assets/images/tableimage.png";
import Qeshmair from "../../Assets/images/Qeshmair.png";
import { FiveYellowStars } from "../../Assets/Svgs/FiveYellowStars";
import { LocationWithBackground } from "../../Assets/Svgs/LocationWithBackground";

export const EachTourCardPhone = () => {
  return (
    <EachTourCardPhoneHolder>
      <HotelNameAndHotelStars>
        <FiveYellowStars />
        <HotelName>
          <HotelPersianName>هتل گرانادا لاکچری</HotelPersianName>
          <HotelEnglishName>Granda Luxary Hotel</HotelEnglishName>
        </HotelName>
      </HotelNameAndHotelStars>
      <HotelRatingAndHotelLocation>
        <HotelLocation>
          <LocationWithBackground />
          <LocationText>Belek</LocationText>
        </HotelLocation>
        <HotelRating>
          <HotelRatingNumber> 5.9</HotelRatingNumber>
          <HotelRatingText> :امتیاز بوکینگ </HotelRatingText>
        </HotelRating>
      </HotelRatingAndHotelLocation>
      <HotelMealsAndHotelKind>
        <HotelMeals>صبحانه، نهار، شام، نوشیدنی</HotelMeals>
        <HotelKind>U.ALL</HotelKind>
      </HotelMealsAndHotelKind>
      <HotelKindBasedOnBedHolder>
        <HotelKindBasedOnBedContainerWithBackground>
          <HotelKindBasedOnBedPrice>
            <HotelKindBasedOnBedToman>تومان</HotelKindBasedOnBedToman>
            <HotelKindBasedOnBedNumber>۵,۷۵۰,۰۰۰</HotelKindBasedOnBedNumber>
          </HotelKindBasedOnBedPrice>
          <HotelKindBasedOnBedText>یک تخته</HotelKindBasedOnBedText>
        </HotelKindBasedOnBedContainerWithBackground>
        <HotelKindBasedOnBedContainerWithoutBackground>
          <HotelKindBasedOnBedPrice>
            <HotelKindBasedOnBedToman>تومان</HotelKindBasedOnBedToman>
            <HotelKindBasedOnBedNumber>۵,۷۵۰,۰۰۰</HotelKindBasedOnBedNumber>
          </HotelKindBasedOnBedPrice>
          <HotelKindBasedOnBedText>دو تخته</HotelKindBasedOnBedText>
        </HotelKindBasedOnBedContainerWithoutBackground>
        <HotelKindBasedOnBedContainerWithBackground>
          <HotelKindBasedOnBedPrice>
            <HotelKindBasedOnBedToman>تومان</HotelKindBasedOnBedToman>
            <HotelKindBasedOnBedNumber>۵,۷۵۰,۰۰۰</HotelKindBasedOnBedNumber>
          </HotelKindBasedOnBedPrice>
          <HotelKindBasedOnBedText>کودک با تخت</HotelKindBasedOnBedText>
        </HotelKindBasedOnBedContainerWithBackground>
        <HotelKindBasedOnBedContainerWithoutBackground>
          <HotelKindBasedOnBedPrice>
            <HotelKindBasedOnBedToman>تومان</HotelKindBasedOnBedToman>
            <HotelKindBasedOnBedNumber>۵,۷۵۰,۰۰۰</HotelKindBasedOnBedNumber>
          </HotelKindBasedOnBedPrice>
          <HotelKindBasedOnBedText>کودک بدون تخت</HotelKindBasedOnBedText>
        </HotelKindBasedOnBedContainerWithoutBackground>
      </HotelKindBasedOnBedHolder>
    </EachTourCardPhoneHolder>
  );
};

const EachTourCardPhoneHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 16px;
  gap: 10px;
`;
const HotelNameAndHotelStars = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const HotelName = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const HotelPersianName = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const HotelEnglishName = styled.div`
  color: #455a64;
  text-align: right;
  font-family: IRANSans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const HotelRatingAndHotelLocation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`;
const HotelRating = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
`;
const HotelRatingNumber = styled.div`
  color: #455a64;
  font-family: IRANSans;
  font-size: 17px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const HotelRatingText = styled.div`
  color: #455a64;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const HotelLocation = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 6px;
`;
const LocationText = styled.div`
  color: #455a64;
  text-align: right;
  font-family: IRANSans;
  font-size: 13px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const HotelMealsAndHotelKind = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 6px;
  width: 100%;
`;
const HotelMeals = styled.div`
  color: #455a64;
  text-align: right;
  font-family: IRANSans;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const HotelKind = styled.div`
  color: #fff;
  text-align: right;
  font-family: IRANSans;
  font-size: 15px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  background-color: #455a64;
`;
const HotelKindBasedOnBedHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  gap: 5px;
`;
const HotelKindBasedOnBedContainerWithBackground = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
  background: #f1f1f1;
`;
const HotelKindBasedOnBedContainerWithoutBackground = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 10px;
  border-radius: 5px;
  border: 1px solid #e7e7e7;
`;
const HotelKindBasedOnBedText = styled.div`
  color: #455a64;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const HotelKindBasedOnBedPrice = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 4px;
`;
const HotelKindBasedOnBedToman = styled.div`
  color: #455a64;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;
const HotelKindBasedOnBedNumber = styled.div`
  color: #5a623a;
  text-align: center;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const DepartureContainer = styled.div`
  display: flex;
  flex-direction: row;
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
  align-items: end;
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
  flex-direction: row;
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
  justify-content: end;
  align-items: center;
  /* border: 3px solid pink; */
  margin-top: 15px;
`;
