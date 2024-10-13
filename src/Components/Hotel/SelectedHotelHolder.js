import React from "react";
import styled from "styled-components";
import TurkeyFlag from "../../Assets/images/TurkeyFlag.png";
import yellowfivestar from "../../Assets/images/yellowfivestar.png";
import { MoneyIcon } from "../../Assets/Svgs/MoneyIcon";
import { EachTourHotelCalendar } from "../../Assets/Svgs/EachTourHotelCalendar";
import { EachTourDatesCalendar } from "../../Assets/Svgs/EachTourDatesCalendar";
import { Clock } from "../../Assets/Svgs/Clock";
import { Location } from "../../Assets/Svgs/Location";

export const SelectedHotelHolder = () => {
  return (
    <MainSelectedHotelHolder>
      <HotelDetailsHolder>
        <HotelNameAndRatingHolder>
          <HotelPersianNameAndRatingHolder>
            <FiveStarYellowHolder />
            <HotelPersianNameHolder>
              هتل گراند هیلاریوم استانبول
            </HotelPersianNameHolder>
          </HotelPersianNameAndRatingHolder>
          <HotelEnglishNameHolder>
            Grand hilaroium istanbul
          </HotelEnglishNameHolder>
        </HotelNameAndRatingHolder>
        <FlagHolder></FlagHolder>
      </HotelDetailsHolder>
      <HotelDetailsHolderPhoneAndIpad>
        <HotelNameAndRatingHolder>
          <HotelPersianNameHolder>
            هتل گراند هیلاریوم استانبول
          </HotelPersianNameHolder>
          <HotelEnglishNameHolder>
            Grand hilaroium istanbul
          </HotelEnglishNameHolder>
          <FiveStarYellowHolder />
        </HotelNameAndRatingHolder>
        <FlagHolder></FlagHolder>
      </HotelDetailsHolderPhoneAndIpad>
    </MainSelectedHotelHolder>
  );
};

const MainSelectedHotelHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  z-index: 2;
  border: 3px solid red;
  /* background-color: white; */
`;

const HotelDetailsHolder = styled.div`
  width: 75%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  border: 3px solid blue;

  @media (max-width: 1024px) {
    display: none;
    background-color: white;
    z-index: 3 !important;
  }
`;
const HotelDetailsHolderPhoneAndIpad = styled.div`
  width: 75%;
  height: 100%;
  display: none;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 16px;
  border: 3px solid blue;
  @media (max-width: 1024px) {
    display: flex;
    width: 100%;
    gap: 4px;
  }
`;

const HotelNameAndRatingHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
`;
const HotelPersianNameAndRatingHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 16px;
`;
const HotelPersianNameHolder = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 15px;
  }
`;
const FiveStarYellowHolder = styled.div`
  background-image: url(${yellowfivestar});
  background-size: cover;
  height: 28px;
  width: 150px;
`;
const HotelEnglishNameHolder = styled.div`
  color: var(--50, #808080);
  text-align: right;

  /* Paragraph */
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;

const FlagHolder = styled.div`
  width: 10%;
  padding-right: 85px;
  height: 80px;
  background-image: url(${TurkeyFlag});
`;
