import React, { forwardRef } from "react";
import styled from "styled-components";
import { GuideColumn } from "../../Assets/Svgs/GuideColumn";
import { BlackTwitter } from "../../Assets/Svgs/BlackTwitter";
import { BlackLink } from "../../Assets/Svgs/BlackLink";
import { BlackFaceBook } from "../../Assets/Svgs/BlackFaceBook";
import { BlackInstagram } from "../../Assets/Svgs/BlackInstagram";
import { ThreeYellowStars } from "../../Assets/Svgs/ThreeYellowStars";
import { FourYellowStars } from "../../Assets/Svgs/FourYellowStars";
import { FiveYellowStars } from "../../Assets/Svgs/FiveYellowStars";

export const HotelDescription = forwardRef((props, ref) => {
  return (
    <HotelDescriptionHolder ref={ref} id={props.id}>
      <HotelDescriptionTitleHolder>
        <EachElementOfTitleHolder>کودک بدون تخت</EachElementOfTitleHolder>
        <EachElementOfTitleHolder>کودک با تخت</EachElementOfTitleHolder>
        <EachElementOfTitleHolder>دو تخته</EachElementOfTitleHolder>
        <EachElementOfTitleHolder>یک تخته</EachElementOfTitleHolder>
        <EachElementOfTitleHolder>خدمات</EachElementOfTitleHolder>
        <EachElementOfTitleHolder>هتل</EachElementOfTitleHolder>
      </HotelDescriptionTitleHolder>
      <ThreeStarsHotelPrices>
        <HotelPriceHolder>
          <TomanContainer>تومان</TomanContainer>
          <HotelPriceContainer>۴,۳۷۵,۰۰۰</HotelPriceContainer>
        </HotelPriceHolder>
        <HotelPriceHolder>
          <TomanContainer>تومان</TomanContainer>
          <HotelPriceContainer>۴,۳۷۵,۰۰۰</HotelPriceContainer>
        </HotelPriceHolder>
        <HotelPriceHolder>
          <TomanContainer>تومان</TomanContainer>
          <HotelPriceContainer>۴,۳۷۵,۰۰۰</HotelPriceContainer>
        </HotelPriceHolder>
        <HotelPriceHolder>
          <TomanContainer>تومان</TomanContainer>
          <HotelPriceContainer>۴,۳۷۵,۰۰۰</HotelPriceContainer>
        </HotelPriceHolder>
        <KindsOfService>B.B</KindsOfService>
        <HotelQualityHolder>
          <HotelQualityContainer>هتل سه ستاره</HotelQualityContainer>
          <ThreeYellowStars />
        </HotelQualityHolder>
      </ThreeStarsHotelPrices>
      <FourStarsHotelPrices>
        <HotelPriceHolder>
          <TomanContainer>تومان</TomanContainer>
          <HotelPriceContainer>۴,۳۷۵,۰۰۰</HotelPriceContainer>
        </HotelPriceHolder>
        <HotelPriceHolder>
          <TomanContainer>تومان</TomanContainer>
          <HotelPriceContainer>۴,۳۷۵,۰۰۰</HotelPriceContainer>
        </HotelPriceHolder>
        <HotelPriceHolder>
          <TomanContainer>تومان</TomanContainer>
          <HotelPriceContainer>۴,۳۷۵,۰۰۰</HotelPriceContainer>
        </HotelPriceHolder>
        <HotelPriceHolder>
          <TomanContainer>تومان</TomanContainer>
          <HotelPriceContainer>۴,۳۷۵,۰۰۰</HotelPriceContainer>
        </HotelPriceHolder>
        <KindsOfService>B.B</KindsOfService>
        <HotelQualityHolder>
          <HotelQualityContainer>هتل چهار ستاره</HotelQualityContainer>
          <FourYellowStars />
        </HotelQualityHolder>
      </FourStarsHotelPrices>
      <FiveStarsHotelPrices>
        <HotelPriceHolder>
          <TomanContainer>تومان</TomanContainer>
          <HotelPriceContainer>۴,۳۷۵,۰۰۰</HotelPriceContainer>
        </HotelPriceHolder>
        <HotelPriceHolder>
          <TomanContainer>تومان</TomanContainer>
          <HotelPriceContainer>۴,۳۷۵,۰۰۰</HotelPriceContainer>
        </HotelPriceHolder>
        <HotelPriceHolder>
          <TomanContainer>تومان</TomanContainer>
          <HotelPriceContainer>۴,۳۷۵,۰۰۰</HotelPriceContainer>
        </HotelPriceHolder>
        <HotelPriceHolder>
          <TomanContainer>تومان</TomanContainer>
          <HotelPriceContainer>۴,۳۷۵,۰۰۰</HotelPriceContainer>
        </HotelPriceHolder>
        <KindsOfService>B.B</KindsOfService>
        <HotelQualityHolder>
          <HotelQualityContainer> هتل پنج ستاره</HotelQualityContainer>
          <FiveYellowStars />
        </HotelQualityHolder>
      </FiveStarsHotelPrices>
    </HotelDescriptionHolder>
  );
});

const HotelDescriptionHolder = styled.div`
  display: flex;
  width: 100%;
  padding: 24px;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 10px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  z-index: 2;
`;

const HotelDescriptionTitleHolder = styled.div`
  display: flex;
  height: 67px;
  width: 100%;
  padding: 21px 28px 21px 28px;
  align-items: center;
  flex-direction: row;
  justify-content: space-between;
  border-radius: 15px;
  background: #ede059;
  gap: 50px;
  /* border: 3px solid purple; */
`;

const ThreeStarsHotelPrices = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 12px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  gap: 30px;
  border-radius: 15px;
  border: 1px solid var(--10, #e6e6e6);
  background: #fff;
`;
const HotelQualityHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const EachElementOfTitleHolder = styled.div`
  width: 16%;
  color: #333;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (min-width: 640px) and (max-width: 1024px) {
    font-size: 12px;
  }
`;

const HotelQualityContainer = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
`;

const KindsOfService = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const HotelPriceHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;
const HotelPriceContainer = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const TomanContainer = styled.div`
  color: #808080;
  text-align: right;
  font-family: IRANSans;
  font-size: 10px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const FourStarsHotelPrices = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 12px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  border-radius: 15px;
  border: 1px solid var(--10, #e6e6e6);
  background: var(--10, #e6e6e6);
`;
const FiveStarsHotelPrices = styled.div`
  display: flex;
  flex-direction: row;
  padding: 8px 12px;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  border-radius: 15px;
  border: 1px solid var(--10, #e6e6e6);
  background: #fff;
`;
