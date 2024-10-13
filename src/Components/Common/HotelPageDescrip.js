import React, { forwardRef } from "react";
import styled from "styled-components";

export const HotelPageDescrip = forwardRef((props, ref) => {
  return (
    <HotelPageDescripHolder ref={ref} id={props.id}>
      <EachHotelPageDescripHolder>
        <EachHotelPageDescripTitle>در مورد هتل</EachHotelPageDescripTitle>
        <EachHotelPageDescripText>
          هتل هیستوریکال میزییم ریزورت ( Historical Museum Resort ) هتلی ست سه
          ستاره که در منطقه بدروم شهر ترکیه واقع شده است. این هتل که از قلعه
          بدروم 1.6 کیلومتر ، آسیاب های بادی بدروم 1.1 کیلومتر ، آرامگاه
          هالیکارناسوس 1 کیلومتر و آمفی تئاتر یونانی 900 متری این هتل قرار دارد.
          این هتل در سال 2021 بازسازی شده است و 162 اتاق دارد و در نزدیکی دروازه
          میندوس و تئاتر باستانی بدروم قرار دارد که شامل اتاقهای استاندارد دابل
          یا دو نفره ، سوئیت خانوادگی ، اتاق سه نفره ویژه ، اتاق سه نفره
          استاندارد و سوئیت دوبلکس میباشد. همچنین کلیه اتاق‌ها مجهز به حمام به
          همراه حوله، سشوار و لوازم بهداشتی رایگان، تلفن ، مینی بار ، سیستم
          تهویه مطبوع ، صندوق امانات و کتری برقی میباشند. تمامی اتاق های این هتل
          دارای تلویزیون صفحه تخت ( LCD TV ) و اینترنت بیسیم ( WiFi ) رایگان می
          باشند. از دیگر امکانات این هتل میتوان به خواربارفروشی ، فروشگاه ،
          پارکینگ اختصاصی رایگان ، مبلمان فضای باز ، تلوزیون در لابی ، خدمات
          مهمان ، خدمات دربان ، بدون آسانسور (ملک تک طبقه) ، مرکز تجاری ، نجات
          غریق ، میز پذیرش 24 ساعته ، غذاخوری خصوصی ، اسنک بار ، گالری هنر
          ،کتابخانه ، زمین بازی ، مرکز خرید، تلویزیون در فضاهای مشترک ، آلارم
          بیدار باش ، برق اضطراری ، حمل چمدان به اتاق، خشکشوئی، پذیرش 24 ساعته،
          صندوق امانات، خدمات لابی، بار ، اسنک بار ، رستوران ، تهویه مطبوع ،
          سنسورهای ضد حریق، اتاق مخصوص سیگار ، اتوکشی و خشکشویی ، سیستم گرمایش ،
          نظافت روزانه ، کافی شاپ ، خدمات زیبایی ، صرافی ، شاتل فرودگاهی ،
          ترانسفر فرودگاهی ، امکانات برای معلولین ، آرایشگاه و لباسشوئی را اشاره
          کرد . همچنین سیگار کشیدن و ورود حیوانات خانگی به این هتل ممنوع میباشد.
          از دیگر امکانات تفریحی این هتل میتوان به بار کنار استخر ، صندلی های
          آفتابگیر ، شاتل رایگان ساحلی ، چترهای ساحلی ، اسپا ، رایحه درمانی ،
          آرایشگاه ، استخر روباز فصلی ، استخر کودکان ، سرسره آبی ، سالن ورزش ،
          دوچرخه سواری ، استخر آبگرم ، مرکز تناسب اندام ، دسترسی مستقیم به ساحل
          ، اسکراب بدن ، مانیکور ، پدیکور ، ماساژ ، سونا ، آبگرم ، حمام ترکی ،
          کلاس های یوگا ، باشگاه ، اتاق بخار ، اسپلونینگ ، مسیر پیاده روی ،
          دوچرخه سواری و کلوپ ساحلی میباشد. رستوران A la Carte که غذاهای
          مدیترانه‌ای را ارائه می‌کند. تمام وعده های غذایی به صورت بوفه، میان
          وعده ها و نوشیدنی های انتخابی ارائه میشود. همچنین نوشابه های ممتاز نیز
          در دسترس است. این هتل از فرودگاه میلاس 32.7 کیلومتر فاصله دارد.{" "}
        </EachHotelPageDescripText>
      </EachHotelPageDescripHolder>
    </HotelPageDescripHolder>
  );
});

const HotelPageDescripHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 45px;
`;

const EachHotelPageDescripHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: end;
  gap: 15px;
  padding: 15px 15px 35px 15px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
`;

const EachHotelPageDescripTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const EachHotelPageDescripText = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
`;
