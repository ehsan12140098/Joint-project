import React from "react";
import styled from "styled-components";

export const TextsHolder = () => {
  return (
    <TextContainer>
      <AboutEUropeTitle>درباره اروپا</AboutEUropeTitle>
      <FirstTextCard>
        <FirstTextCardContentHolder>
          <GuidanceTitle>راهنمای خرید تور فرانسه</GuidanceTitle>
          <GuidanceDescription>
            فرانسه، کشور نوشیدنی‌های سنتی، پنیر ، برج ایفل ، قلعه‌ها و سواحل
            زیباست و در واقع با بهترین غذاها و شراب‌ها، دره‌ها و سواحل خیره
            کننده، شهرهای تاریخی و کاخ‌های دیدنی شناخته میشود.<br></br> هر
            مسافری عاشق گشت و گذار در این کشور است، هیچ چیز مانند پیک نیک کنار
            رود سن یا گشت یک روزه در حومه شهرهای فرانسه زیبا به نظر نمیرسد. این
            کشورهر چیزیست که مردم آن را معرفی می کنند و برخی تاریخ دیرینه و جذاب
            این کشور را به قلعه‌ها و کاخ‌های زیبا ، معماری و فرهنگ بی‌نظیر
            می‌سپارد.<br></br> فرانسه افرادی را به سمت خود جلب میکند که در
            انتخاب مقصد خود برای سفر بین دنیای سنتی و مدرن، هیجان و آرامش، هنر و
            تاریخ و ... میتوانند همه را در یک قاب داشته باشند. فقط کافیست تصمیم
            به انتخاب تور فرانسه داشته باشید تا این کشور برای شما خاطره‌ای تکرار
            نشدنی رقم بزند، چراکه این کشور رتبه چهارم جهانی از نظر میراث تاریخی
            یونسکو دارد که هر سال در صدر محبوب‌ترین مقصد توریستی قرار میگیرد .
            <br></br>. با همه‌ی این زیبایی‌ها، سفر به فرانسه، یک سفر گران خواهد
            .بود و رتبه‌ی دوم متعلق به کشور پل‌ها یعنی ایتالیاست.
          </GuidanceDescription>
        </FirstTextCardContentHolder>
      </FirstTextCard>
      <FirstTextCard>
        <FirstTextCardContentHolder>
          <GuidanceTitle>راهنمای خرید تور فرانسه</GuidanceTitle>
          <GuidanceDescription>
            فرانسه، کشور نوشیدنی‌های سنتی، پنیر ، برج ایفل ، قلعه‌ها و سواحل
            زیباست و در واقع با بهترین غذاها و شراب‌ها، دره‌ها و سواحل خیره
            کننده، شهرهای تاریخی و کاخ‌های دیدنی شناخته میشود.<br></br> هر
            مسافری عاشق گشت و گذار در این کشور است، هیچ چیز مانند پیک نیک کنار
            رود سن یا گشت یک روزه در حومه شهرهای فرانسه زیبا به نظر نمیرسد. این
            کشورهر چیزیست که مردم آن را معرفی می کنند و برخی تاریخ دیرینه و جذاب
            این کشور را به قلعه‌ها و کاخ‌های زیبا ، معماری و فرهنگ بی‌نظیر
            می‌سپارد.<br></br> فرانسه افرادی را به سمت خود جلب میکند که در
            انتخاب مقصد خود برای سفر بین دنیای سنتی و مدرن، هیجان و آرامش، هنر و
            تاریخ و ... میتوانند همه را در یک قاب داشته باشند. فقط کافیست تصمیم
            به انتخاب تور فرانسه داشته باشید تا این کشور برای شما خاطره‌ای تکرار
            نشدنی رقم بزند، چراکه این کشور رتبه چهارم جهانی از نظر میراث تاریخی
            یونسکو دارد که هر سال در صدر محبوب‌ترین مقصد توریستی قرار میگیرد .
            <br></br>. با همه‌ی این زیبایی‌ها، سفر به فرانسه، یک سفر گران خواهد
            .بود و رتبه‌ی دوم متعلق به کشور پل‌ها یعنی ایتالیاست.
          </GuidanceDescription>
        </FirstTextCardContentHolder>
      </FirstTextCard>
    </TextContainer>
  );
};

const TextContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 20px;
`;
const AboutEUropeTitle = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 25px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const FirstTextCard = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
`;
const FirstTextCardContentHolder = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  background: #fff;
`;
const GuidanceTitle = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin: 15px 15px 0 0;
`;
const GuidanceDescription = styled.div`
  color: #666;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  margin: 15px;
`;

const SecondTextCard = styled.div`
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
`;
