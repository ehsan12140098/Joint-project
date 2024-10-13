import React from "react";
import styled from "styled-components";
import BlueFlag from "../../Assets/images/BlueFlag.png";

export const SchengenPic = () => {
  return (
    <SchengenPicHolder>
      <SchengenPicContainer>
        <ShortText>ویزا شینگن</ShortText>
        <LongText>
          شنگن یکی از معروف‌ترین انواع ویزا است و افرادی که قصد سفر به کشورهای
          اروپایی را دارند با آن مواجه شده‌اند. شینگن به مجموعه کشورهای اروپایی
          گفته می‌شود که تحت پیمانی با همین نام، قوانین یکپارچه‌ای را در راستای
          فعالیت‌ها و مقررات مرزی و مسافرتی خود، وضع کرده‌اند. به سبب همین
          پیمان، تمامی مردم کشورهای خارج از این اتحادیه، جهت سفر و اقامت در این
          مناطق، موظف به اخذ مجوز ورود و ویزای جامع و واحد موسوم به «ویزای
          شینگن» هستند.
        </LongText>
      </SchengenPicContainer>
      <img src={BlueFlag} alt="" width="196" height="196" />
    </SchengenPicHolder>
  );
};

const SchengenPicHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  border-radius: 30px;
  background: var(--White, #fff);
  gap: 30px;
  /* Main */
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 24px 40px 40px 30px;
  @media (max-width: 760px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
`;

const SchengenPicContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 23px;
`;
const ShortText = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const LongText = styled.div`
  color: #4d4d4d;
  text-align: justify;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  direction: rtl;
`;
