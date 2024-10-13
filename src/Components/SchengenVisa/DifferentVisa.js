import React from "react";
import styled from "styled-components";
import { Check } from "../../Assets/Svgs/Check";
import { Corner } from "../../Assets/Svgs/Corner";
import { YellowRoundedTick } from "../../Assets/Svgs/YellowRoundedTick";

export const DifferentVisa = () => {
  return (
    <TotalContainer>
      <TitleHolder>انواع ویزا شنگن</TitleHolder>
      <UnderTitle>
        ویزای شینگن دارای سه نوع کلی است و هریک از ویزاها با توجه به نوع سفر در
        زیر مجموعه یکی از این گروه‌‌ها قرار می‌گیرند؛
      </UnderTitle>
      <UsvVisaHolder>
        <ShortTitle>ویزای اتحادیه شینگن (USV)</ShortTitle>
        <ExplainOne>
          دارنده «ویزای اتحادیه‌ی شینگن» (Uniform Schengen Visas) مجوز ورود و
          سفر به کشورهای عضو این پیمان را برای حداکثر ۹۰ روز در بازه زمانی ۱۸۰
          روزه در اختیار دارد. این ویزا در اصل همان ویزای توریستی برای گردشگران
          محسوب می‌شود. از طرفی، این نوع از ویزا به چند دسته‌ی دیگر تقسیم می‌شود
          که شامل موارد زیر است:
        </ExplainOne>
      </UsvVisaHolder>
      <TypeAHolder>
        <TitleContainer>
          <TypeAText>ویزای نوع A</TypeAText>
          <Corner />
        </TitleContainer>
        <LongTextA>
          منظور از این ویزا، «ویزای ترانزیت فرودگاه» (Airport Transit Visa) است.
          در این صورت، مسافر حق خروج از فرودگاه کشور عضو شینگن را ندارد و فقط
          می‌تواند در یکی از فرودگاه‌های عضو این پیمان، هواپیمای خود را عوض کرده
          و به مقصد کشور دیگری در خارج از منطقه‌ شینگن برود.
        </LongTextA>
      </TypeAHolder>
      <TypeBHolder>
        <TitleContainer>
          <TypeBText>ویزای نوع B</TypeBText>
          <Corner />
        </TitleContainer>
        <LongTextB>
          این ویزا نیز نوعی ویزای عبور و ترانزیت است. با داشتن ویزای نوع B،
          مسافر می‌تواند از خاک کشورهای شینگن، در مدت حداکثر پنج روز، به مقصدی
          خارج از این منطقه، گذر کند.
        </LongTextB>
      </TypeBHolder>
      <TypeCHolder>
        <TitleContainer>
          <TypeCText>ویزای نوع C</TypeCText>
          <Corner />
        </TitleContainer>
        <LongTextC>
          ویزای نوع C در واقع روادید کوتاه‌ مدتی است برای ورود و اقامت در
          کشورهای عضو اتحادیه‌ی شینگن صادر می‌شود. دریافت‌کنندگان ویزای C با
          توجه به هدف و شرایط سفر خود، یکی از سه نوع ویزای زیر را دریافت
          می‌کنند.
        </LongTextC>
      </TypeCHolder>
      <RedNoteContainer>
        <RedNoteTitle>نکته</RedNoteTitle>
        <NoteText>
          قابل توجه اینکه در اختیار داشتن ویزای شینگن شرط لازم و کافی برای ورود
          به کلیه کشورهای منطقه شینگن نیست؛ برای نمونه، ویزاهای کوتاه مدت
          ایتالیا با نام روادید متحدالشکل کوتاه مدت (ویزای شینگن) برای اقامت
          حداکثر ۹۰ روزه در یک بازه زمانی ۱۸۰ روزه جهت سفر به حوزه شینگن صادر
          می‌شود، مشروط بر اینکه تنها مقصد یا مقصد اصلی سفر «ایتالیا» باشد.
          کشورهای عضو پیمان شینگن این اختیار را دارند که در مبادی مرزی کشورشان
          از ورود مسافرانی که بدون در نظر گرفتن دستورالعمل فوق، روادید شینگن اخذ
          کرده‌اند، جلوگیری کنند.
        </NoteText>
      </RedNoteContainer>
      <TypeAHolder>
        <TitleContainer>
          <TypeAText>ویزای یک بار ورود(Single-entry)</TypeAText>
          <Corner />
        </TitleContainer>
        <LongTextA>
          همان‌طور که از اسم ویزای یک‌بار ورود مشخص است، این ویزا تنها برای
          یک‌بار ورود به منطقه شینگن اعتبار دارد؛ به این معنی که اعتبار ویزای
          مسافر به محض ترک کردن کشوری که به آن وارد شده است، فارغ از این‌که مدت
          آن به پایان رسیده است یا خیر، منقضی خواهد شد.
        </LongTextA>
      </TypeAHolder>
      <TypeAHolder>
        <TitleContainer>
          <TypeAText> ویزای دو بار ورود (Double-entry)</TypeAText>
          <Corner />
        </TitleContainer>
        <LongTextA>
          ویزای دوبار ورود شرایطی مشابه با ویزای یک‌بار ورود دارد، با این تفاوت
          که مسافر مجوز دو بار وارد شدن به کشورهای شینگن را دارد. به خاطر داشته
          باشید که استفاده از این شرایط در محدوده‌ زمانی مشخصی قابل اجرا است.
        </LongTextA>
      </TypeAHolder>
      <TypeAHolder>
        <TitleContainer>
          <TypeAText> ویزای چند بار ورود (Multiple-entry)</TypeAText>
          <Corner />
        </TitleContainer>
        <LongTextA>
          ویزای چندبار ورود مجوز هر چندبار ورود و سفر بین کشورهای عضو شینگن را
          صادر می‌کند. به این معنی که مسافر می‌تواند به چندین کشور عضو این پیمان
          سفر کرده و در آن‌ها اقامت داشته باشد. تنها محدودیت این ویزا محدودیت
          زمانی است که برای ۹۰ روز در هر ۶ ماه از سال، اعتبار دارد. همچنین، این
          ۹۰ روز به محض ورود به هر یک از کشورهای ناحیه‌ شینگن محاسبه می‌شود.
        </LongTextA>
      </TypeAHolder>
      <TypeAHolder>
        <TitleContainer>
          <TypeAText> ویزای اعتباری منطقه محدوده (LTV)</TypeAText>
          <Corner />
        </TitleContainer>
        <LongTextA>
          این نوع از ویزا، «ویزای اعتباری منطقه‌ محدوده» (Limited Territorial
          Validity Visas) نام دارد. این ویزا به فرد اجازه می‌دهد که تنها به
          محدوده‌های مشخصی که در زمان اخذ ویزا اعلام می‌شود، سفر کرده و در آن‌ها
          اقامت داشته باشید. این ویزا به غیر از مناطق مشخص‌شده، در هیچ منطقه‌
          دیگری اعتبار ندارد و دارنده‌ آن مجوز سفر به هیچ‌یک از دیگر مناطق را
          ندارد. این ویزا بیشتر تحت شرایط خاص، مانند ویزا برای پناهندگان، اعطا
          می‌شود.
        </LongTextA>
      </TypeAHolder>
      <TypeAHolder>
        <TitleContainer>
          <TypeAText>ویزای ملی (NV)</TypeAText>
          <Corner />
        </TitleContainer>
        <LongTextA>
          از «ویزای ملی» (National Visas) به عنوان «ویزای نوع D» یاد می‌شود. این
          ویزا برای افرادی که برای تحصیل، کار یا کسانی که برای مدت‌زمان مشخصی و
          با هدف معینی، قصد اقامت در کشورهای ناحیه‌ی شینگن را دارند، صادر
          می‌شود. این ویزا نیز بسته به شرایط و هدف آن می‌تواند یک‌بار ورود یا
          چندبار ورود باشد و دارنده‌ آن باید پس از اتمام اعتبار ویزا و پایان
          دوره‌ تعیین شده، به کشور خود بازگردد. با در اختیار داشتن ویزای چند بار
          ورود نوع D، بدون نیاز به اخذ روادید دیگری می‌توان به‌ تمامی کشورهای
          ناحیه‌ شینگن بدون محدودیت سفر کرد. با این توضیحات، داوطلبان این ویزا
          باید یکی از شرایط زیر را داشته باشند:{" "}
        </LongTextA>
      </TypeAHolder>
      <CheckContainer>
        <TextOne>
          دانشجویان بین‌المللی که برای انجام پروژه‌های تحقیقاتی برای مدتی مشخص و
          نه بیشتر از یک سال، به کشورهای شینگن سفر می‌کنند.
        </TextOne>
        <YellowRoundedTick />
      </CheckContainer>
      <CheckContainer>
        <TextOne>
          دانشجویان بین‌المللی که قصد شروع تحصیل در یکی از دوره‌های تحصیلی
          کشورهای عضو پیمان شینگن را دارند. به این گروه نیز ویزای یک‌ساله اعطا
          می‌شود که برای اقامت بیشتر قابل تمدید است.
        </TextOne>
        <YellowRoundedTick />
      </CheckContainer>
      <CheckContainer>
        <TextOne>
          کار کردن یا پژوهش علمی و آموزشی در مراکز تحقیقاتی یا موسسات معتبر
          کشورهای اتحادیه‌ شینگن. این ویزا با توجه به بررسی سوابق فرد و اعضای
          خانواده‌اش صادر می‌شود.
        </TextOne>
        <YellowRoundedTick />
      </CheckContainer>
      <CheckContainer>
        <TextOne>
          متخصصانی که با هدف به اشتراک گذاشتن تخصص و مهارت خود به کشورهای عضو
          این پیمان سفر می‌کنند؛ برای مثال هنرمندان و ورزشکاران در این گروه قرار
          می‌گیرند.
        </TextOne>
        <YellowRoundedTick />
      </CheckContainer>
      <CheckContainer>
        <TextOne>
          موارد اضطراری که فرد به دلیل وضعیت پزشکی برای مدت مشخصی قادر به ترک
          ناحیه‌ شینگن نباشد.
        </TextOne>
        <YellowRoundedTick />
      </CheckContainer>
    </TotalContainer>
  );
};

const TotalContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 15px;
  width: 100%;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 16px 16px 45px 20px;
`;
const TitleHolder = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const UnderTitle = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
`;
const UsvVisaHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;
const ShortTitle = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;
const ExplainOne = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
`;
const TypeAHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;
const TitleContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 15px;
`;
const TypeAText = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;
const LongTextA = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  padding: 0px 18px;
  direction: rtl;
`;
const TypeBHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;
const TypeBText = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;
const LongTextB = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  padding: 0px 18px;
  direction: rtl;
`;
const TypeCHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;
const TypeCText = styled.div`
  color: #5a623a;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;
const LongTextC = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
  padding: 0px 18px;
  direction: rtl;
`;
const RedNoteContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-end;
  gap: 10px;
`;
const RedNoteTitle = styled.div`
  color: #ff5f5f;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 28px; /* 175% */
`;
const NoteText = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
`;
const CheckContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 15px;
`;
const TextOne = styled.div`
  width: 95%;
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px; /* 175% */
`;
