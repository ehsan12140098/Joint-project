import React from "react";
import styled from "styled-components";
import { PhoneConsultation } from "../../Assets/Svgs/PhoneConsultation";
import { YellowRoundedTick } from "../../Assets/Svgs/YellowRoundedTick";

export const InstallmentTourPageImportantPoints = () => {
  return (
    <InstallmentTourPagePurchaseConditionHolder>
      <InstallmentTourPagePurchaseConditionTitle>
        نکات مهم
      </InstallmentTourPagePurchaseConditionTitle>
      <InstallmentTourPagePurchaseConditionContainer>
        <EachPurchaseConditionHolder>
          <EachPurchaseConditionText>
            حساب مبدا چک می‌بایست صرفا شهر تهران باشد.
          </EachPurchaseConditionText>
          <YellowRoundedTick />
        </EachPurchaseConditionHolder>
        <EachPurchaseConditionHolder>
          <EachPurchaseConditionText>
            شروع اقساط از یکماه پس از عقد قرارداد سفر می‌باشد.{" "}
          </EachPurchaseConditionText>
          <YellowRoundedTick />
        </EachPurchaseConditionHolder>
        <EachPurchaseConditionHolder>
          <EachPurchaseConditionText>
            حتما باید چک‌های صادر شده از نوع دسته چک‌های صیادی جدید باشد.{" "}
          </EachPurchaseConditionText>
          <YellowRoundedTick />
        </EachPurchaseConditionHolder>
        <EachPurchaseConditionHolder>
          <EachPurchaseConditionText>
            صادرکننده چک‌های اقساط الزاما باید یکی از مسافرین استفاده ‌کننده از
            تور و یا اقوام درجه یک وی باشد. که در این صورت <br></br>ارائه مدارک
            شناسایی طرفین جهت احراز نسبت الزامی می‌باشد.
          </EachPurchaseConditionText>
          <YellowRoundedTick />
        </EachPurchaseConditionHolder>
        <EachPurchaseConditionHolder>
          <EachPurchaseConditionText>
            دریافت تایید حساب مسافر از بانک مبدا چک، قبل از عقد قرارداد تسهیلات
            توسط واحد حسابداری الزامیست.{" "}
          </EachPurchaseConditionText>
          <YellowRoundedTick />
        </EachPurchaseConditionHolder>
        <EachPurchaseConditionHolder>
          <EachPurchaseConditionText>
            قبل از صدور چک، تعداد و مبالغ چک‌ها می‌بایست توسط واحد حسابداری
            تایید گردد.{" "}
          </EachPurchaseConditionText>
          <YellowRoundedTick />
        </EachPurchaseConditionHolder>
        <EachPurchaseConditionHolder>
          <EachPurchaseConditionText>
            در صورت داشتن هرگونه سوال یا درخواست پیش پرداخت کمتر از ۵۰٪ با واحد
            حسابداری تماس حاصل فرمائید.{" "}
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
  gap: 4px;
`;
const EachPurchaseConditionText = styled.div`
  width: 95%;
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
`;
