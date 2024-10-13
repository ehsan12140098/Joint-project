import React from "react";
import styled from "styled-components";

export const HistorySchengen = () => {
  return (
    <HistoryHolder>
      <HistoryShort>تاریخچه شنگن</HistoryShort>
      <LongTextHolder>
        <LongTextHolderPartOne>
          ایده‌ یکپارچه‌سازی مجوز ورود به کشورهای اروپایی به سال‌ها قبل، پس از
          اتمام جنگ جهانی دوم، باز می‌گردد. اولین‌بار در دهه‌ی ۶۰ میلادی، در سال
          ۱۹۵۷، بود که مجموعه کشورهای اسکاندیناوی، شامل چهار کشور سوئد، دانمارک،
          فنلاند و نروژ با امضای پیمانی تصمیم به صدور مجوزی واحد برای رفت و
          آمدهای بین یکدیگر گرفتند.
        </LongTextHolderPartOne>
        <LongTextHolderPartTwo>
          ۲۷ سال بعد، در سال ۱۹۸۴، آلمان و فرانسه این ایده را برای کشورهای عضو
          اتحادیه اروپا مطرح کردند. سرانجام یک سال بعد، در ۱۴ ژوئن ۱۹۸۵، در
          منطقه‌ای به نام شینگن در کشور لوکزامبورگ، پنج کشور فرانسه، آلمان غربی،
          هلند، بلژیک و لوکزامبورگ «پیمان شینگن» را به امضا رساندند. بر اساس این
          پیمان، رفت و آمد بین مرزهای مشترک این کشورها آزاد شد. همچنین،
          فعالیت‌های مشترک متعدد دیگری نیز در زمینه‌های گوناگون بین این کشورها
          آغاز شد.
        </LongTextHolderPartTwo>

        <LongTextHolderPartThree>
          به مروز زمان الحاقیه‌های دیگری نیز به این پیمان اضافه شد. همچنین با
          گذشت سال‌های متمادی، کشورهای اروپایی دیگر نیز به این پیمان پیوستند.
          امروزه کماکان کشورهای باقی‌مانده‌ی اروپایی سعی در پیوستن به پیمان
          شینگن دارند.
        </LongTextHolderPartThree>
      </LongTextHolder>
    </HistoryHolder>
  );
};

const HistoryHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 15px;
  border-radius: 25px;
  background: #fff;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 16px 16px 32px 16px;
`;

const HistoryShort = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const LongTextHolder = styled.div`
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 300;
  line-height: 28px;
  direction: rtl;
  display: flex;
  flex-direction: column;
  gap: 15px;
`;
const LongTextHolderPartOne = styled.div``;
const LongTextHolderPartTwo = styled.div``;
const LongTextHolderPartThree = styled.div``;
