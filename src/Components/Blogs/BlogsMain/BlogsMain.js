import React from 'react';
import BlogsMainItem from './BlogsMainItem';
import PaginationComponent from 'Components/shared/PaginationComponent/PaginationComponent';

const items = [
  {
    id: 1,
    image: 'https://picsum.photos/id/1/208/120',
    title: 'میدان هیپودروم استانبول',
    description:
      'میدان هیپودروم در استانبول ترکیه در زمان امپراتوری بیزانس مرکز اجتماعات، برنامه های ورزشی و سیرک شهر قسطنطنیه (استانبول امروزی) بوده است. میدان هیپودروم در حال حاضر با نام میدان سلطان احمد شناخته می شود و هنوز قطعاتی از آثار بیزانسی در آن م',
    date: '1401/07/02',
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/2/208/120',
    title: 'منطقه میرا آنتالیا Mira City Antalya',
    description:
      'میرا یکی دیگر از شهرهای تاریخی و باستانی آنتالیا است که در فاصله 25 کیلومتری منطقه غربی فی نیکه و در نزديکی شهر دمره آنتالیا قرار گرفته است. علاوه بر سواحل آنتالیا شهر میرا خود می‌تواند یکی از دلایل سفر به این شهر باشد. این منطقه امروزه به',
    date: '1401/07/02',
    tags: ['Mira', 'آنتالیا', 'City', 'منطقه', 'Antalya', 'میرا'],
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/3/208/120',
    title: 'منطقه توریستی کارتپه',
    description:
      'کارتپه در واقع یکی از شهرستان های استان کوجاالی (Kocaeli) است که به دلیل کوه مشهور کارتپه و پیست اسکی آن و نیز فاصله نسبتا کمش از استانبول از اهمیت گردشگری بالایی برخوردار است.',
    date: '1401/07/02',
  },
  {
    id: 4,
    image: 'https://picsum.photos/id/4/208/120',
    title: 'آب ‌انبار تاریخی باسیلیکا استانبول',
    description:
      '«آب انبار باسیلیکا» (Basilica Cistern) یکی از زیبا‌ترین بناهای تاریخی و مکان‌های دیدنی استانبول است. آب انبار باسیلیکا در سال‌های ۵۶۵-۵۲۶ میلادی در دوران امپراطوری بیزانس و به دستور ژوستینیانوس اول ساخته شد. این بنای قدیمی و کهن در کنار م',
    date: '1401/07/02',
  },
  {
    id: 5,
    image: 'https://picsum.photos/id/5/208/120',
    title: 'کاخ دولما باغچه  Dolmabahçe Palace',
    description:
      'کاخ دولما باغچه که در منطقه بشیکتاش استانبول و در کنار تنگه بسفر قرار گرفته است بین سال های ۱۸۴۳ تا ۱۸۵۶ به دستور سی و یکمین امپراتور عثمانی، سلطان عبدالمجید اول ساخته شد و پس از آن، اقامتگاه و مرکز حکومت ۶ پادشاه آخر عثمانی بود.',
    date: '1401/07/02',
  },
  {
    id: 6,
    image: 'https://picsum.photos/id/6/208/120',
    title: 'موزه توهم استانبول (museum of illusions istanbul)',
    description:
      'موزه توهم استانبول که چند سالی است از افتتاح آن می گذرد به یکی از جاذبه‌های کتمان نشدنی استانبول نبدیل شده و هر ساله تعداد زیادی از توریست‌ها را به خود جذب می‌کند. برای اطلاع بیشتر از این موزه تا انتهای مقاله با بیسان سیرهمراه باشید تا دنیا',
    date: '1401/07/02',
  },
];

export default function BlogsMain() {
  const handlePageChange = () => {};

  return (
    <div>
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '16px',
          marginBottom: '32px',
        }}
      >
        {items.map(item => (
          <BlogsMainItem key={item.id} item={item} />
        ))}
      </div>
      <PaginationComponent
        count={13}
        currentPage={1}
        onChange={val => handlePageChange(val)}
      />
    </div>
  );
}
