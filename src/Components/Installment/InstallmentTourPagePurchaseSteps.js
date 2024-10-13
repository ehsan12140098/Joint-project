import React from "react";
import styled from "styled-components";
import { PhoneConsultation } from "../../Assets/Svgs/PhoneConsultation";
import { YellowRoundedFirst } from "../../Assets/Svgs/YellowRoundedFirst";
import { YellowRoundedSecond } from "../../Assets/Svgs/YellowRoundedSecond";
import { YellowRoundedThird } from "../../Assets/Svgs/YellowRoundedThird";
import { YellowRoundedFourth } from "../../Assets/Svgs/YellowRoundedFourth";
import { YellowRoundedFifth } from "../../Assets/Svgs/YellowRoundedFifth";
import { YellowRoundedSixth } from "../../Assets/Svgs/YellowRoundedSixth";

export const InstallmentTourPagePurchaseSteps = () => {
  return (
    <InstallmentTourPagePurchaseStepsHolder>
      <InstallmentTourPagePurchaseStepsTitle>
        مراحل خريد تور اقساطی
      </InstallmentTourPagePurchaseStepsTitle>
      <InstallmentTourPagePurchaseStepsContainer>
        <EachPurchaseStepsHolder>
          <EachPurchaseStepsText>انتخاب تور مورد نظر</EachPurchaseStepsText>
          <YellowRoundedFirst />
        </EachPurchaseStepsHolder>
        <EachPurchaseStepsHolder>
          <EachPurchaseStepsText>
            حضور در آژانس به منظور امضای قرارداد{" "}
          </EachPurchaseStepsText>
          <YellowRoundedSecond />
        </EachPurchaseStepsHolder>
        <EachPurchaseStepsHolder>
          <EachPurchaseStepsText>
            ارائه كامل مدارك ذکر شده در بخش بعدی{" "}
          </EachPurchaseStepsText>
          <YellowRoundedThird />
        </EachPurchaseStepsHolder>
        <EachPurchaseStepsHolder>
          <EachPurchaseStepsText>
            واريز ۵۰٪ مبلغ كل تور به حساب آژانس بيسان‌سير{" "}
          </EachPurchaseStepsText>
          <YellowRoundedFourth />
        </EachPurchaseStepsHolder>
        <EachPurchaseStepsHolder>
          <EachPurchaseStepsText>
            رفتن به سفر و لذت بردن از خدمات ما در سفر{" "}
          </EachPurchaseStepsText>
          <YellowRoundedFifth />
        </EachPurchaseStepsHolder>
        <EachPurchaseStepsHolder>
          <EachPurchaseStepsText>
            پرداخت چك‌های ارائه شده در موعد مقرر{" "}
          </EachPurchaseStepsText>
          <YellowRoundedSixth />
        </EachPurchaseStepsHolder>
      </InstallmentTourPagePurchaseStepsContainer>
    </InstallmentTourPagePurchaseStepsHolder>
  );
};

const InstallmentTourPagePurchaseStepsHolder = styled.div`
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

const InstallmentTourPagePurchaseStepsTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InstallmentTourPagePurchaseStepsContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;
const EachPurchaseStepsHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;
const EachPurchaseStepsText = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
`;
