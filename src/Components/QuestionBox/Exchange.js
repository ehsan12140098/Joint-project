import React from "react";
import styled from "styled-components";

export const Exchange = () => {
  return (
    <ExchangeContainer>
      <ExchangeText>ارز مسافرتی </ExchangeText>
      <TextContainerOne>
        <TextOne>
          آیا ارزمسافرتی را می توان از آژانس های مسافرتی دریافت نمود ؟
        </TextOne>
        <TextTwo>
          خیر ، معمولا مسافران برای تهیه ارز مسافرتی باید مدارک سفر خود از جمله
          بلیط و ویزا را به صرافی ارائه داده و حواله ارزی دریافت کنند .
        </TextTwo>
      </TextContainerOne>
      <TextContainerTwo>
        <ShortTextTwo>
          حداکثر رقم مجاز وجه نقد ارز که میتوان از کشور به ازاء هر نفر خارج کرد
          چقدر است؟
        </ShortTextTwo>
        <LongTextTwo>
          همراه داشتن ارز خارجی بیش از ۵ هزار یورو مشمول مقررات و ضوابط ناظر بر
          ارز همراه مسافر بوده و مستلزم اظهار به گمرک می‌باشد.
        </LongTextTwo>
      </TextContainerTwo>
    </ExchangeContainer>
  );
};

const ExchangeContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 27px;
`;
const ExchangeText = styled.div`
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
