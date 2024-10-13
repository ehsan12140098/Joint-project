import React from "react";
import styled from "styled-components";
import { Check } from "../../Assets/Svgs/Check";

export const ImportantNote = () => {
  return (
    <TotalNote>
      <RedNote>
        نکات مهمی که برای اخذ ویزای شنگن باید به آن‌ها توجه کنید
      </RedNote>
      <CheckContainer>
        <TextOne>
          لازم به اشاره است که مدارک باید همراه با ترجمه‌ی رسمی به سفارت ارائه
          شود.
        </TextOne>
        <Check />
      </CheckContainer>
      <CheckContainer>
        <TextTwo>
          بلیط پرواز رفت و برگشت به کشور مقصد یا رزرو بلیط لازم خواهد بود.
        </TextTwo>
        <Check />
      </CheckContainer>
      <LongTextHolder>
        <CheckContainer>
          <TextThree>بیمه مسافرتی</TextThree>
          <Check />
        </CheckContainer>
        <LongTextOne>
          متقاضیان روادید باید برای کل مدت‌ زمان سفر بیمه‌مسافرتی فردی یا جمعی
          داشته باشند. شرکت بیمه‌گذار نیز باید نماینده‌ معتبری در کشور مقصد
          داشته باشد.
        </LongTextOne>
      </LongTextHolder>
      <LongTextHolder>
        <CheckContainer>
          <TextFour>واچر هتل</TextFour>
          <Check />
        </CheckContainer>
        <LongTextTwo>
          همراه داشتن برگه‌ی تاییدیه‌ رزرو هتل یا اصل‌ دعوت‌نامه‌ای‌ که شخص
          دعوت‌کننده از کشور مقصد برای متقاضی فرستاده است.
        </LongTextTwo>
      </LongTextHolder>
    </TotalNote>
  );
};

const TotalNote = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 15px;
  width: 100%;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 16px;
`;
const RedNote = styled.div`
  color: #ff5f5f;
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const CheckContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 15px;
  width: 100%;
`;
const TextOne = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  width: 90%;
`;
const TextTwo = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  width: 90%;
`;
const TextThree = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
  width: 90%;
`;
const TextFour = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
  width: 80%;
`;
const LongTextOne = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  padding: 0px 37px 0px 0px;
  direction: rtl;
`;
const LongTextTwo = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  padding: 0px 37px;
  padding: 0px 37px 0px 0px;
  direction: rtl;
`;
const LongTextHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 5px;
`;
