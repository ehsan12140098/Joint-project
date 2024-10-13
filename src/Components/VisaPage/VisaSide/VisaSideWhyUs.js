import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import VisaSideWhyUsItem from './VisaSideWhyUsItem';
import {
  MailMan,
  RunningMan,
  CommentingMan,
  NiceHand,
  CreditCart,
  FiveStar,
  Support,
  Health,
  Verify,
} from 'Assets/Svgs/Icons';
// import { Calendar } from 'Assets/Svgs/Calendar';
// import { MailMan } from 'Assets/Svgs/MailMan';
// import { RunningMan } from 'Assets/Svgs/RunningMan';
// import { CommentingMan } from 'Assets/Svgs/CommentingMan';
// import { NiceHand } from 'Assets/Svgs/NiceHand';
// import { CreditCart } from 'Assets/Svgs/CreditCart';
// import { FiveStar } from 'Assets/Svgs/FiveStar';

const items = [
  {
    title: 'اطلاعات به روز شرایط اخذ ویزا',
    description:
      'ما بی‌وقفه در حال بررسی آخرین تحولات فی‌ما‌بین کشورها در جهت اخذ ویزا هستیم تا بتوانیم بهترین روش را پیشنهاد دهیم.',
    icon: <MailMan />,
  },
  {
    title: 'سرعت در اخذ ويزا',
    description:
      'ما معمولاً از كوتاه‌ترین و در عین حال مطمئن‌ترین راه برای اخذ ویزا استفاده می‌کنیم.',
    icon: <RunningMan />,
  },
  {
    title: 'مشاوره تخصصی رایگان',
    description:
      'همکاران ما با اشراف کامل پیرامون موضوعات مرتبط با اخذ ویزا همواره آماده‌ راهنمایی شما هستند',
    icon: <CommentingMan />,
  },
  {
    title: 'بهترین روش اخذ ویزا',
    description:
      'روش اخذ ویزا با توجه به نیاز و پتانسل شما انتخاب می‌شود، پس باید بهترین راه‌ها برای ویزا شدن را بشناسیم.',
    icon: <NiceHand />,
  },
  {
    title: 'صرفه‌جویی در هزینه',
    description:
      'وقتی کوتاه‌ترین و بهترین روش اخذ ویزا را بشناسید و انتخاب کنید، طبیعتاً هزینه‌های اخذ ویزا کاهش پیدا خواهد کرد.',
    icon: <CreditCart />,
  },
  {
    title: 'رضایت بالای مشتریان',
    description:
      'اکثر مسافرانی که با ما برای گرفتن ویزا اقدام کرده‌اند، تبدیل به مشتریان وفادارمان شده‌اند.',
    icon: <FiveStar />,
  },
  {
    title: 'پشتیبانی مستمر',
    description:
      'همکاران ما برای پاسخگویی و رفع هرگونه مشکل احتمالی همیشه در دسترس هستند، از لحظه شروع تا زمان صدور ویزا همراه شما هستیم.',
    icon: <Support />,
  },
  {
    title: 'مورد اعتماد مشتریان',
    description:
      'با افتخار اعلام می‌کنیم که، ما اکثراً توسط مسافرین قبلی‌ به مخاطبین جدیدمان معرفی می‌شویم.',
    icon: <Verify />,
  },
  {
    title: 'صداقت',
    description:
      'با نگاهی اجمالی به وبسایت بیسان‌سیر ، متوجه توضیح صادقانه ما در تمامی بخش‌ها خواهید شد.',
    icon: <Health />,
  },
];

export default function VisaSideWhyUs() {
  return (
    <div>
      <SectionTitle>چرا بهتر است ما براى شما ويزا بگيريم؟</SectionTitle>
      <div
        style={{
          marginTop: '28px',
          display: 'flex',
          flexDirection: 'column',
          gap: '24px',
        }}
      >
        {items.map(item => (
          <VisaSideWhyUsItem key={item.title} item={item} />
        ))}
      </div>
    </div>
  );
}
