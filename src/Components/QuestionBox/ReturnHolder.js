import React from "react";
import styled from "styled-components";

export const ReturnHolder = () => {
  return (
    <ReturnContainer>
      <TextHolder>شرایط استرداد</TextHolder>
      <TextContainer>
        <TextOne>استرداد پروازهای سیستمی به چه صورت میباشد؟</TextOne>
        <TextTwo>
          استرداد پروازها بستگی به زمان کنسل کردن پرواز دارد، اینکه شما چند روز
          و یا چند ساعت قبل از زمان پرواز اقدام برای کنسلی پرواز انجام داده
          باشید و مورد دیگر اینکه استرداد پروازها بسته به سیاست و قوانین شرکت
          های هواپیمایی متفاوت است.
        </TextTwo>
      </TextContainer>
    </ReturnContainer>
  );
};

const ReturnContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 27px;
`;
const TextHolder = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 16px;
  padding: 27px 63px;
  border-radius: 30px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  @media (max-width: 1024px) {
    padding: 27px;
  }
`;
const TextOne = styled.div`
  color: #000;
  text-align: right;

  /* H4 */
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1024px) {
    font-size: 18px;
  }
`;
const TextTwo = styled.div`
  color: #000;
  text-align: right;
  direction: rtl;
  /* Paragraph */
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1024px) {
    font-size: 14px;
  }
`;
