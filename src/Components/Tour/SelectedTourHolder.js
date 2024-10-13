import React from 'react';
import styled from 'styled-components';
import TurkeyFlag from '../../Assets/images/TurkeyFlag.png';
import { MoneyIcon } from '../../Assets/Svgs/MoneyIcon';
import { EachTourHotelCalendar } from '../../Assets/Svgs/EachTourHotelCalendar';
import { EachTourDatesCalendar } from '../../Assets/Svgs/EachTourDatesCalendar';
import { Clock } from '../../Assets/Svgs/Clock';
import { Location } from '../../Assets/Svgs/Location';

export const SelectedTourHolder = () => {
  return (
    <MainSelectedTourHolder>
      <MainSelectedTourContainer>
        <PriceHolder>
          <PriceContainer>
            <StartPriceFrom>شروع قیمت از</StartPriceFrom>
            <PriceAmountHolder>
              <MoneyIcon />
              <PriceNumberHolder>5,200,000</PriceNumberHolder>
              <TomanHolder>تومان</TomanHolder>
            </PriceAmountHolder>
          </PriceContainer>
        </PriceHolder>
        <TourDetailsHolder>
          <TourTitleAndDetailHolder>
            <TitleContainer>
              {' '}
              تور استانبول با پرواز ایران ایر تور
            </TitleContainer>
            <DetailsContainer>
              <HotelsInfoHolder>
                <HotelsInfoContainer>هتل ۴ و ۵ ستاره</HotelsInfoContainer>
                <DetailSvgHolder>
                  <EachTourHotelCalendar />
                </DetailSvgHolder>
              </HotelsInfoHolder>
              <DatesHolder>
                <DatesContainer>۳ و ۱۰ و ۱۷ و ۲۴ شهریور</DatesContainer>
                <DetailSvgHolder>
                  <EachTourDatesCalendar />
                </DetailSvgHolder>
              </DatesHolder>
              <DurationHolder>
                <DurationContainer>۵ شب</DurationContainer>
                <DetailSvgHolder>
                  <Clock />
                </DetailSvgHolder>
              </DurationHolder>
              <LocationHolder>
                <LocationContainer>ترکیه، استانبول</LocationContainer>
                <DetailSvgHolder>
                  <Location />
                </DetailSvgHolder>
              </LocationHolder>
            </DetailsContainer>
          </TourTitleAndDetailHolder>
          <FlagHolder></FlagHolder>
        </TourDetailsHolder>
      </MainSelectedTourContainer>
      <MainSelectedTourContainerPhone>
        <PriceHolder>
          <PriceContainer>
            <StartPriceFrom>شروع قیمت از</StartPriceFrom>
            <PriceAmountHolder>
              <MoneyIcon />
              <PriceNumberHolder>5,200,000</PriceNumberHolder>
              <TomanHolder>تومان</TomanHolder>
            </PriceAmountHolder>
          </PriceContainer>
        </PriceHolder>
        <TourDetailsHolder>
          <TourTitleAndDetailHolder>
            <TitleContainer>تور استانبول با پرواز ایران ایر تور</TitleContainer>

            <HotelsInfoHolder>
              <HotelsInfoContainer>هتل ۴ و ۵ ستاره</HotelsInfoContainer>
              <DetailSvgHolder>
                <EachTourHotelCalendar />
              </DetailSvgHolder>
            </HotelsInfoHolder>
            <DatesHolder>
              <DatesContainer>۳ و ۱۰ و ۱۷ و ۲۴ شهریور</DatesContainer>
              <DetailSvgHolder>
                <EachTourDatesCalendar />
              </DetailSvgHolder>
            </DatesHolder>
            <DurationHolder>
              <DurationContainer>۵ شب</DurationContainer>
              <DetailSvgHolder>
                <Clock />
              </DetailSvgHolder>
            </DurationHolder>
            <LocationHolder>
              <LocationContainer>ترکیه، استانبول</LocationContainer>
              <DetailSvgHolder>
                <Location />
              </DetailSvgHolder>
            </LocationHolder>
          </TourTitleAndDetailHolder>
          <FlagHolder></FlagHolder>
        </TourDetailsHolder>
      </MainSelectedTourContainerPhone>
    </MainSelectedTourHolder>
  );
};

const MainSelectedTourHolder = styled.div`
  width: 100%;
  z-index: 2;
  @media (min-width: 640px) and (max-width: 1024px) {
    margin-top: 30px;
  }
`;

const MainSelectedTourContainer = styled.div`
  width: 100%;
  height: 105px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  @media (max-width: 640px) {
    display: none;
  }
  /* @media (min-width: 640px) and (max-width: 1024px) {
    display: flex;
  } */
`;

const PriceHolder = styled.div`
  width: 20%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 4px;
  padding: 16px 48px;
  border-radius: 25px 0px 0px 25px;
  background: #e6e6e6;
  @media (max-width: 640px) {
    width: 100%;
    border-radius: 25px;
  }
`;

const TourDetailsHolder = styled.div`
  width: 80%;
  height: 100%;
  padding: 8px;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 8px;
  border-radius: 0px 25px 25px 0px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  @media (max-width: 640px) {
    align-items: flex-start;
    gap: 0;
    border-radius: 25px;
    width: 100%;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 100%;
    gap: 0px;
  }
`;

const PriceContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-end;
  gap: 4px;
  @media (max-width: 640px) {
    width: 100%;
    align-items: center;
  }
`;
const StartPriceFrom = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 10px;
  }
`;
const PriceAmountHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  gap: 8px;
`;
const PriceNumberHolder = styled.div`
  color: #000;
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
  color: #000;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 10px;
  }
`;
const TourTitleAndDetailHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  gap: 8px;
`;
const TitleContainer = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 22px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 15px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 18px;
  }
`;
const DetailsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  align-items: center;
  gap: 16px;
  @media (min-width: 640px) and (max-width: 1024px) {
    gap: 4px;
  }
`;
const HotelsInfoHolder = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
`;
const HotelsInfoContainer = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;
const DatesHolder = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
`;
const DatesContainer = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;
const DurationHolder = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
`;
const DurationContainer = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;
const LocationHolder = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
`;
const LocationContainer = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;
const FlagHolder = styled.div`
  width: 95px;
  height: 80px;
  background-image: url(${TurkeyFlag});
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 85 px;
  }
`;
const DetailSvgHolder = styled.div`
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #e6e6e6;
`;

const MainSelectedTourContainerPhone = styled.div`
  width: 100%;
  display: none;
  flex-direction: column-reverse;
  justify-content: space-between;
  gap: 10px;
  @media (max-width: 640px) {
    display: flex;
  }
  /* @media (min-width: 640px) and (max-width: 1024px) {
    display: none;
  } */
`;
