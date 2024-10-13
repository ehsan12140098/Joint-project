import React from "react";
import styled from "styled-components";
import { Corner } from "../../Assets/Svgs/Corner";

export const DocumentSchengen = () => {
  return (
    <DocumentTotal>
      <DocumentNeed>
        <TitleDoc>مدارک مورد نیاز ویزا شنگن</TitleDoc>
        <TextDoc>
          قبل از هر موردی باید هماهنگی‌های لازم را با سفارت کشور مقصد انجام
          دهید. مدارک مورد نیاز برای اخذ ویزای شینگن در اکثر کشورهای عضو این
          پیمان شبیه به یکدیگر است و تنها در برخی از جزئیات و موارد، تفاوت کمی
          دارند. به هر ترتیب، مدارک اصلی که باید همراه داشته باشید، شامل موارد
          زیر است:
        </TextDoc>
      </DocumentNeed>
      <VisaContainer>
        <VisaForm>فرم تکمیل‌شده‌ برای درخواست ویزا</VisaForm>
        <Corner />
      </VisaContainer>
      <VisaText>
        به طور کلی اولین مرحله برای اخذ ویزای هر کشور تکمیل فرم درخواست روادید
        آن است. این فرم باید از سفارت مربوطه دریافت شود. هر چند که این کشورها
        عضو شینگن هستند، ممکن است فرم درخواست ویزای هر یک از آن‌ها متفاوت باشد؛
        در نتیجه لازم است از سفارت‌های آن‌ها دریافت شود
      </VisaText>
      <VisaContainer>
        <VisaDoc>اصل گذرنامه فعلی و گذرنامه‌های قبلی</VisaDoc>
        <Corner />
      </VisaContainer>
      <TextOne>
        همچنین گذرنامه باید تا حداقل ۶ ماه پس از درخواست روادید، اعتبار داشته
        باشد
      </TextOne>
      <VisaContainer>
        <PicVisa>دو قطعه عکس 3.5 در 4.5</PicVisa>
        <Corner />
      </VisaContainer>
      <TextTwo>
        عکس ها رنگی تمام رخ با زمینه‌ی سفید که باید با ظاهر وقت صاحب عکس
        هم‌خوانی داشته و جدید باشد و بهتر است با عکس پاسپورت متفاوت باشد
      </TextTwo>
      <VisaContainer>
        <Official>مدارک شغلی رسمی</Official>
        <Corner />
      </VisaContainer>
      <TextThree>
        مانند جواز کسب، روزنامه‌ی شغلی، فیش حقوقی و گواهی اشتغال به کار یا تحصیل
        لازم است. همچنین، اسناد ملکی شخص متقاضی و منابع مالی وی همراه با گردش
        حساب رسمی مورد نیاز خواهد بود
      </TextThree>
      <VisaContainer>
        <MoneyDoc>
          مدارک مربوط به تمکن مالی از قبیل گردش حساب و اسناد ملکی
        </MoneyDoc>
        <Corner />
      </VisaContainer>
      <TextFour>
        گردش حساب شما باید به لاتین و برای ۳ ماهه گذشته باشد وتمکن مالی هم نیز
        باید به یورو بیان شود
      </TextFour>
      <VisaContainer>
        <TicketPlane>بلیط رفت و برگشت هواپیما</TicketPlane>
        <Corner />
      </VisaContainer>
      <TextFive>
        برای رزرو بلیط هواپیما، می‌توانید از خدمات کارشناسان ویزای بیسان سیر
        استفاده کنید
      </TextFive>
      <VisaContainer>
        <ReservHotel>برگه تایید رزرو هتل</ReservHotel>
        <Corner />
      </VisaContainer>
      <TextSix>برگه تایید رزرو هتل برای افرادی است که دعوت نامه ندارند</TextSix>
    </DocumentTotal>
  );
};

const DocumentTotal = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 15px;
  width: 100%;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 16px 16px 35px 20px;
`;
const DocumentNeed = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 15px;
  width: 100%;
`;

const TitleDoc = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const TextDoc = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  direction: rtl;
`;
const VisaContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: baseline;
  gap: 15px;
`;
const VisaForm = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;
const VisaText = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  padding: 0px 18px;
`;
const VisaDoc = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;
const TextOne = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  padding: 0px 18px;
`;
const PicVisa = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;
const TextTwo = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  padding: 0px 18px;
`;
const Official = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;
const TextThree = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  padding: 0px 18px;
`;
const MoneyDoc = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
  width: 95%;
`;
const TextFour = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  padding: 0px 18px;
`;
const TicketPlane = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;
const TextFive = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  padding: 0px 18px;
`;
const ReservHotel = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;
const TextSix = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  padding: 0px 18px;
`;
