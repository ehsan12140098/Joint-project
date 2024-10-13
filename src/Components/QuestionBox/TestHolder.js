import React from "react";
import styled from "styled-components";

export const TestHolder = () => {
  return (
    <TestContainer>
      <TestText>تست PCR</TestText>
      <TextContainerOne>
        <TextOne>برای کودکان از چه سنی تست PCR پرواز ضروری است؟</TextOne>
        <TextTwo>
          با توجه به قوانین موجود فقط کودکان بالای 12 سال نیاز به انجام تست
          دارند.
        </TextTwo>
      </TextContainerOne>
      <TextContainerTwo>
        <ShortTextTwo>
          مدت زمان اعتبار گواهی تست منفی PCR در زمان ورود به کشور مقصد چگونه
          است؟
        </ShortTextTwo>
        <LongTextTwo>
          هنگام ورود به کشور مقصد، از زمان صدور گواهی تست منفی PCR معمولا نباید
          بیشتر از ۷۲ ساعت گذشته باشد، اما قوانین بعضی از کشور‌ها متفاوت
          می‌باشد، در نتیجه بهتر است قبل از اقدام به سفر قوانین کشور مقصد را در
          سایت یاتا تراول سنتر (www.iatatravelcentre.com) بررسی نمایید.
        </LongTextTwo>
      </TextContainerTwo>
    </TestContainer>
  );
};

const TestContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 27px;
`;
const TestText = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TextContainerOne = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 16px;
  padding: 27px 63px;
  width: 100%;
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
  direction: rtl;
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
const TextContainerTwo = styled.div`
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
const ShortTextTwo = styled.div`
  color: #000;
  text-align: right;
  direction: rtl;

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
const LongTextTwo = styled.div`
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
