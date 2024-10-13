import React from "react";
import styled from "styled-components";
import { TwentyFourHour } from "../../Assets/Svgs/TwentyFourHour";
import { SevenDaysCalendar } from "../../Assets/Svgs/SevenDaysCalendar";

export const AboutUsSupport = () => {
  return (
    <AboutUsSupportHolder>
      <AboutUsSupportTop>
        <YellowFullTime>
          <SevenDaysHolder>
            <FullTimeText>7 روز هفته</FullTimeText>
            <SevenDaysCalendar />
          </SevenDaysHolder>
          <TwentyFourHolder>
            <FullTimeText>24 ساعته</FullTimeText>
            <TwentyFourHour />
          </TwentyFourHolder>
        </YellowFullTime>
        <AboutUsSupportTitle>پشتیبانی</AboutUsSupportTitle>
      </AboutUsSupportTop>
      <AboutUsSupportDescrip>
        7 روز هفته، به صورت 24 ساعته پاسخگوی شما در زمینه‌های مختلف هستیم تا
        آسایش خاطر را برای شما عزیزان از لحظه خرید تا بازگشت از سفر فراهم کنیم.{" "}
      </AboutUsSupportDescrip>
    </AboutUsSupportHolder>
  );
};

const AboutUsSupportHolder = styled.div`
  padding: 20px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 20px;
  width: 100%;
`;

const AboutUsSupportTop = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  @media (max-width: 640px) {
    flex-direction: column-reverse;
    align-items: flex-end;
    gap: 20px;
  }
`;
const AboutUsSupportTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const AboutUsSupportDescrip = styled.div`
  color: var(--50, #808080);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const YellowFullTime = styled.div`
  width: 40%;
  padding: 8px 16px;
  border-radius: 25px;
  background: #ede059;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  @media (max-width: 640px) {
    width: 100%;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 45%;
  }
`;
const SevenDaysHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;
const TwentyFourHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 2px;
`;
const FullTimeText = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans(FaNum);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
