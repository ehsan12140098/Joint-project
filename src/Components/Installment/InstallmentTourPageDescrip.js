import React from "react";
import styled from "styled-components";
import { PhoneConsultation } from "../../Assets/Svgs/PhoneConsultation";

export const InstallmentTourPageDescrip = () => {
  return (
    <InstallmentTourPageDescripHolder>
      <InstallmentTourPageDescriTitle>توضیحات</InstallmentTourPageDescriTitle>
      <InstallmentTourPageDescripText>
        بیسان‌سیر با ارائه خدمتی جدید قصد دارد تا سفر رفتن را برای مسافران خود
        آسان‌تر کند تا هم کمکی به صنعت گردشگری شده باشد و هم باعث افزایش
        رضایتمندی مسافران گردد. <br></br>یکی از محبوب‌ترین راه‌‌های خرید تورهای
        مسافرتی، تور اقساطی می‌باشد. مسافران عزیز به غیر از تکمیل مدارک لازم جهت
        دریافت تسهیلات، درگیر مراحل مختلف این کار نمی‌باشند. <br></br>روش کار
        بیسان‌سیر به اینصورت است که با شرکت سرمایه‌گذار باسابقه‌ و معتبری همکاری
        می‌کند و جهت هر چه آسان‌تر شدن این کار، تمامی مسئولیت بررسی مدارک،
        پرداخت اقساط و پیگیری تسویه حساب‌ها به عهده بیسان‌سیر می‌باشد.
      </InstallmentTourPageDescripText>
    </InstallmentTourPageDescripHolder>
  );
};

const InstallmentTourPageDescripHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 15px;
  padding: 15px 15px 15px 15px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
`;

const InstallmentTourPageDescriTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InstallmentTourPageDescripText = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  direction: rtl;
`;
