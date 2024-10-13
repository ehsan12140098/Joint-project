import HomePageSectionTitle from '../HomePageSectionTitle';
import HomePageServicesItem from './HomePageServicesItem';
import fulltime from 'Assets/animations/fulltime.json';
import safely from 'Assets/animations/safely.json';
import bestprice from 'Assets/animations/best price.json';
import target from 'Assets/animations/Target.json';
import tour from 'Assets/animations/tour.json';
import visa from 'Assets/animations/visa.json';
import HomePageContainer from '../HomePageContainer';

const items = [
  {
    id: 1,
    title: 'آخرین قیمت را از ما بپرس',
    description:
      'اگر اهل سفر هستی و مدیریت هزینه‌هات یکی از مهمترین کارهایی هستش که باید انجام بدی! قبل از اینکه بلیطتت رو نهایی کنی، کافیه یه سر به سایت ما بزنی تا از دیدن قیمت‌هامون شگفت زده بشی.',
    img: 'https://bisanseir.com/static/home/svg/services/best%20price.svg',
    animation: bestprice,
  },
  {
    id: 2,
    title: 'با خیال راحت سفر کن',
    description:
      'از شروع تا پایان سفرتون، در کنار شما هستیم. پس اگر توی سفر نیاز به متخصص داشتی، کافیه با ما در ارتباط باشی. پس تورت رو بخر و دیگه نگران بقیه چیزا نباش. صفر تا صد تورت با ما، لذت بردن از لحظه‌هاتون با شما.',
    img: 'https://bisanseir.com/static/home/svg/services/best%20price.svg',
    animation: safely,
  },
  {
    id: 3,
    title: '24 ساعته کنارتیم',
    description:
      'معنای واقعی عبارت 7/24 را با بیسان سیر تجربه کن. در طول هفته در هر ساعت از شبانه روز، به گرمی آماده پاسخگویی به شما هستیم پس با خیال راحت تلفنت رو بردار و هر سوالی که در مورد سفرت داری رو بپرس.',
    img: 'https://bisanseir.com/static/home/svg/services/best%20price.svg',
    animation: fulltime,
  },
  {
    id: 4,
    title: '...ویزات رو بدون مشکل بگیر',
    description:
      'در کوتاه ترین زمان ممکن، ویزاتون توی دستتونه. توی صفحه ویزامون همه شرایط رو توضیح دادیم. از اونجا فرم اخذ ویزا رو پر کن و برای ما بفرست. خیلی سریع فرم اولیه رو چک می‌کنیم و نواقص پروندتون رو بهتون می‌گیم. اینجوری کلی از اتلاف وقت جلوگیری می‌شه.',
    img: 'https://bisanseir.com/static/home/svg/services/best%20price.svg',
    animation: visa,
  },
  {
    id: 5,
    title: '...تورت رو خودت بساز',
    description:
      'از تورهای تکراری با تعداد شب‌های محدود خسته شدی؟! می‌تونی با کمک ما تورت رو خودت بسازی بدون محدودیت زمانی! اگر تجربه اولتونه، اصلا نترسید! با همفکری ما خیلی راحت به چیزی که دوست دارید می‌رسید',
    img: 'https://bisanseir.com/static/home/svg/services/best%20price.svg',
    animation: tour,
  },
  {
    id: 6,
    title: '...رضایتتون هدف ماست',
    description:
      'در نهایت رضایت شما از سفرتون، باعث افتخار و دلگرمی ماست. همه سعی ما ساختن سفری رویایی و سرشار از حس خوبه. این حق شماست که با قیمتی منصفانه، خدمات عالی و با کیفیتی را دریافت کنید.',
    img: 'https://bisanseir.com/static/home/svg/services/best%20price.svg',
    animation: target,
  },
];

export default function HomePageServices() {
  return (
    <HomePageContainer>
      <section
        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        <HomePageSectionTitle style={{ marginBottom: '20px' }}>
          چرا بیسان سیر؟
        </HomePageSectionTitle>
        <div
          style={{
            display: 'flex',
            flexWrap: 'wrap',
            justifyContent: 'space-evenly',
          }}
        >
          {items.map(item => (
            <HomePageServicesItem key={item.id} item={item} />
          ))}
        </div>
      </section>
    </HomePageContainer>
  );
}
