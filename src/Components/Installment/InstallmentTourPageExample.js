import React from "react";
import styled from "styled-components";
import { BrownSquareMark } from "../../Assets/Svgs/BrownSquareMark";

export const InstallmentTourPageExample = () => {
  return (
    <InstallmentTourPageDescripHolder>
      <InstallmentTourPageDescriTitle>
        مثال: محاسبه تور استانبول برای ۳ نفر
      </InstallmentTourPageDescriTitle>
      <InstallmentTourPageDescripText>
        برای توضیح بهتر راجع به شرايط اقساط، با مثالی عملی آن را برای شما شرح
        می‌دهيم. فرض كنيد شما در تاريخ ۲۰ دی ماه، يك تور استانبول برای تاريخ ۳۰
        دی را برای خريد در نظر گرفته‌اید. اگر تعداد شما ۳ نفر باشد و رقم تور
        انتخابی شما برای هر نفر ۲٫۷۰۰٫۰۰۰ تومان باشد مجموع رقم تور برای ۳ نفر
        ۸٫۱۰۰٫۰۰۰ تومان خواهد شد. شما می‌توانيد % ۵۰اين رقم يعنی ۴٫۰۵۰٫۰۰۰ تومان
        را تسهيلات دريافت كنيد. حال اگر شما مدت زمان ۶ ماه را برای باز پرداخت
        تسهيلات تور مسافرتی خود در نظر بگيريد، می‌بايست در هر ماه ۷۹۶٫۵۰۰ تومان
        بابت اقساط هر ٣ نفر پرداخت نماييد.
      </InstallmentTourPageDescripText>
      <InstallmentTourPageExampleSummariesHolder>
        <EachInstallmentTourPageExampleSummaryHolder>
          <EachInstallmentTourPageExampleSummaryText>
            قیمت تور استانبول برای هر نفر: ۲٫۷۰۰٫۰۰۰ تومان
          </EachInstallmentTourPageExampleSummaryText>
          <BrownSquareMark />
        </EachInstallmentTourPageExampleSummaryHolder>
        <EachInstallmentTourPageExampleSummaryHolder>
          <EachInstallmentTourPageExampleSummaryText>
            قیمت کل برای ۳ نفر: ۸٫۱۰۰٫۰۰۰ تومان
          </EachInstallmentTourPageExampleSummaryText>
          <BrownSquareMark />
        </EachInstallmentTourPageExampleSummaryHolder>
        <EachInstallmentTourPageExampleSummaryHolder>
          <EachInstallmentTourPageExampleSummaryText>
            پیش‌ پرداخت ۵۰٪ مبلغ تور ۴/۰۵۰/۰۰۰ تومان
          </EachInstallmentTourPageExampleSummaryText>
          <BrownSquareMark />
        </EachInstallmentTourPageExampleSummaryHolder>
        <EachInstallmentTourPageExampleSummaryHolder>
          <EachInstallmentTourPageExampleSummaryText>
            پرداخت الباقی مبلغ تور در ۶ قسط با احتساب مبلغ کارمزد: ۴٫۷۷۹٫۰۰۰
            تومان
          </EachInstallmentTourPageExampleSummaryText>
          <BrownSquareMark />
        </EachInstallmentTourPageExampleSummaryHolder>
        <EachInstallmentTourPageExampleSummaryHolder>
          <EachInstallmentTourPageExampleSummaryText>
            پرداخت اقساط تور در هر ماه برای ۳ نفر با احتساب مبلغ کارمزد: ۷۹۶٫۵۰۰
            تومان
          </EachInstallmentTourPageExampleSummaryText>
          <BrownSquareMark />
        </EachInstallmentTourPageExampleSummaryHolder>
        <EachInstallmentTourPageExampleSummaryHolder>
          <EachInstallmentTourPageExampleSummaryText>
            کل کارمزد اقساط تـور برای ۳ نفر در ۶ ماه: ۷۲۹٫۰۰۰ تومان
          </EachInstallmentTourPageExampleSummaryText>
          <BrownSquareMark />
        </EachInstallmentTourPageExampleSummaryHolder>
        <EachInstallmentTourPageExampleSummaryHolder>
          <EachInstallmentTourPageExampleSummaryText>
            کل کارمزد اقساط تور برای هر نفر در ۶ ماه: ۲۴۳٫۰۰۰ تومان
          </EachInstallmentTourPageExampleSummaryText>
          <BrownSquareMark />
        </EachInstallmentTourPageExampleSummaryHolder>
        <EachInstallmentTourPageExampleSummaryHolder>
          <EachInstallmentTourPageExampleSummaryText>
            کل قیمت تمام شده تور برای ۳ نفر با احساب کارمزد: ۸٫۸۲۹٫۰۰۰ تومان
          </EachInstallmentTourPageExampleSummaryText>
          <BrownSquareMark />
        </EachInstallmentTourPageExampleSummaryHolder>
      </InstallmentTourPageExampleSummariesHolder>
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
`;
const InstallmentTourPageExampleSummariesHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-right: 20px;
  gap: 15px;
  @media (max-width: 640px) {
    display: none;
  }
`;
const EachInstallmentTourPageExampleSummaryHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;

const EachInstallmentTourPageExampleSummaryText = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
`;
