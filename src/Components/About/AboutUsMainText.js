import React from "react";
import styled from "styled-components";

export const AboutUsMainText = () => {
  return (
    <AboutUsMainTextHolder>
      <AboutUsMainTextContainer>
        بیسان‌سیر با بروزرسانی اطلاعات خود در زمینه تورهای مسافرتی و خدمات اخذ
        ویزای توریستی و تحصیلی، توسط پرسنلی با تجربه، کارآزموده و متعهد در تلاش
        است که با ارائه خدماتی متمایز به شما اثبات کند که در این حرفه بهترین
        است. هدف اصلی بیسان‌سیر جلب نظر شما مسافران عزیز و ارائه بهترین مشاوره و
        برنامه‌ریزی درخصوص انتخاب مناسب‌ترین پروازها و هتل‌ها برای سفرتان
        می‌باشد تا آرامش و لذت‌تان در طول سفر چند برابر گردد. از اصول حرفه‌ای
        این مجموعه، اخلاق حرفه‌ای و تعهد بر توافقات با مشتری می‌باشد که موجب
        متمایز شدن بیسان‌سیر با رقبا گردیده است. همیشه رضایت کامل مسافران را
        مهمترین هدف خود قرار داده و با ارائه خدماتی نو و با کیفیت به مسافران
        توانسته‌ایم در این صنعت به سرعت رشد کنیم.
      </AboutUsMainTextContainer>
    </AboutUsMainTextHolder>
  );
};

const AboutUsMainTextHolder = styled.div`
  padding: 20px 20px 25px 20px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 60%;
  }
`;

const AboutUsMainTextContainer = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
`;
