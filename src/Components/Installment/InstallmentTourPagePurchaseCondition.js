import React from "react";
import styled from "styled-components";
import { PhoneConsultation } from "../../Assets/Svgs/PhoneConsultation";
import { YellowRoundedTick } from "../../Assets/Svgs/YellowRoundedTick";

export const InstallmentTourPagePurchaseCondition = () => {
  return (
    <InstallmentTourPagePurchaseConditionHolder>
      <InstallmentTourPagePurchaseConditionTitle>
        شرايط خريد تور اقساطی
      </InstallmentTourPagePurchaseConditionTitle>
      <InstallmentTourPagePurchaseConditionContainer>
        <EachPurchaseConditionHolder>
          <EachPurchaseConditionText>
            حداقل ٧ روز كارى پيش از تاريخ سفر بايد خريد تور و آماده‌سازى مدارك
            به صورت كامل انجام شده باشد.{" "}
          </EachPurchaseConditionText>
          <YellowRoundedTick />
        </EachPurchaseConditionHolder>
        <EachPurchaseConditionHolder>
          <EachPurchaseConditionText>
            تسهيلات پرداختی حداكثر ۵۰٪ هزينه کل تور و تا سقف ۱۵ میليون تومان
            برای كل اشخاص خواهد بود.{" "}
          </EachPurchaseConditionText>
          <YellowRoundedTick />
        </EachPurchaseConditionHolder>
        <EachPurchaseConditionHolder>
          <EachPurchaseConditionText>
            باز پرداخت تسهيلات ۴ الی ٩ ماهه با كارمزد ۳% به ازای هر ماه از مجموع
            رقم تسهيلات دريافتی بوده و در قالب <br></br>پرداخت‌هایی با فاصله‌ی
            يك يا دو ماهه امكان‌پذير است.
          </EachPurchaseConditionText>
          <YellowRoundedTick />
        </EachPurchaseConditionHolder>
        <EachPurchaseConditionHolder>
          <EachPurchaseConditionText>
            در خصوص پرداخت دو ماهه، سر رسيد اولين پرداخت ۴۵ روز بعد از عقد
            قرارداد خواهد بود.
          </EachPurchaseConditionText>
          <YellowRoundedTick />
        </EachPurchaseConditionHolder>
      </InstallmentTourPagePurchaseConditionContainer>
    </InstallmentTourPagePurchaseConditionHolder>
  );
};

const InstallmentTourPagePurchaseConditionHolder = styled.div`
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

const InstallmentTourPagePurchaseConditionTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InstallmentTourPagePurchaseConditionContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 15px;
`;
const EachPurchaseConditionHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 15px;
`;
const EachPurchaseConditionText = styled.div`
  width: 95%;
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
`;
