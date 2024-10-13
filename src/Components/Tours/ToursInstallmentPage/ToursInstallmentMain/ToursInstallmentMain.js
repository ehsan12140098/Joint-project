import InstallmentToursImage from 'Assets/images/installmentsTours.svg';
import ToursInstallmentMainSection from './ToursInstallmentMainSection';

import CheckImage from 'Assets/images/check.png';
import { YellowRoundedTick } from 'Assets/Svgs/YellowRoundedTick';
import { BrownSquareMark } from 'Assets/Svgs/BrownSquareMark';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const purchaseSteps = [
  'انتخاب تور مورد نظر',
  'ارائه كامل مدارك ذکر شده',
  'حضور در آژانس به منظور امضای قرارداد',
  'واریز مبلغ پیش پرداخت تور به حساب آژانس بیسان سیر',
  'رفتن به سفر و لذت بردن از خدمات ما در سفر',
  'تسویه چك‌های ارائه شده در موعد مقرر',
];

const purchaseConditions = [
  'حداقل ۳ روز كارى پيش از تاريخ سفر بايد خريد تور و آماده ‌سازى مدارك به صورت كامل انجام شده باشد.',
  'تسهيلات پرداختی حداكثر ۷۰٪ هزينه کل تور و تا سقف ۳۰ میليون تومان برای هر شخص خواهد بود.',
  ' باز پرداخت تسهيلات اعطایی بین ۱ الی ٩ ماه با كارمزد ۴٪ به ازای هر ماه از مجموع رقم تسهيلات دريافتی می‌باشد.',
];

const importantNotes = [
  'چک‌های صادر شده حتما باید از نوع دسته چک‌های صیادی جدید ( چک بنفش قابل ثبت ) باشند.(دقت داشته باشید که تمامی چک ها باید در سامانه صیاد ثبت شده باشند.)',
  'شروع اقساط از یکماه پس از عقد قرارداد می‌باشد.',
  'صادر کننده چک‌های اقساط الزاما باید یکی از مسافرین استفاده ‌کننده از تور و یا اقوام درجه یک وی باشد.',
  'دریافت تایید حساب مسافر از بانک مبدا چک، قبل از عقد قرارداد تسهیلات توسط واحد حسابداری الزامیست.',
  'قبل از صدور چک، تعداد و مبالغ چک‌ها می‌بایست توسط واحد حسابداری تایید گردد.',
  'درصورت داشتن هرگونه سوال یا درخواست تغییر در پیش پرداخت یا اقساط با واحد حسابداری تماس حاصل فرمائید.',
];

export default function ToursInstallmentMain() {
  const isSmOrBigger = useIsDesktopDisplay('sm');
  return (
    <div>
      <img
        src={InstallmentToursImage}
        alt="تور های اقساط"
        style={{
          margin: '60px auto 20px',
          display: 'block',
          width: isSmOrBigger ? 'auto' : '100%',
        }}
      />

      <div style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}>
        <ToursInstallmentMainSection title="توضیحات">
          بیسان ‌سیر با ارائه خدمتی جدید قصد دارد تا سفر رفتن را برای مسافران
          خود آسان‌تر کند تا هم کمکی به صنعت گردشگری شده باشد و هم باعث افزایش
          رضایتمندی هر چه بیشتر مسافران گردد. برای سفر با امکان بازپرداخت
          اقساطی، هیچ نیازی به داشتن ضامن یا فرآیندهای پیچیده اداری و یا رفت و
          آمد به بانک ندارید. همه فرآیند دریافت وام سفر و سپس خرید تور با اعتبار
          دریافتی در بیسان سیر، به صورت آنلاین صورت می‌پذیرد. کل بازه زمانی
          تائید اعتبار و دریافت وام سفر، بسیار کمتر از چیزیست که فکر می‌کنید.
          تورهای اقساطی بیسان سیر بدون هیچ محدودیتی و برای تمامی مقاصد، هتل ها و
          پروازها قابل رزرو می‌باشد. کافیست شما مقصد، هتل و پرواز مورد نظرتان را
          انتخاب کنید تا همکاران ما پس از ارائه قیمت و تایید شما، مدارک مورد
          نیاز را از شما تحویل گرفته و تور را برایتان رزرو کنند.
        </ToursInstallmentMainSection>

        <ToursInstallmentMainSection title="مراحل خرید تور اقساطی">
          <SectionContentList items={purchaseSteps} />
        </ToursInstallmentMainSection>

        <ToursInstallmentMainSection title="شرایط خرید تور اقساطی">
          <SectionContentList items={purchaseConditions} isTick />
        </ToursInstallmentMainSection>

        <ToursInstallmentMainSection title="امکان ارائه خدمات تور اقساط بدون پیش پرداخت">
          این خدمت برای مسافران محترمی که برای بار دوم از ما خرید می‌کنند و
          بازنشستگان یا کارمندان دولت قابل ارائه می‌باشد.
        </ToursInstallmentMainSection>

        <ToursInstallmentMainSection title="شرایط اقساط برای ساکنین محترم شهرستان ها">
          شرایط تقسیط برای مسافرین عزیزی که از شهرستان اقدام به خرید تور
          نموده‌اند نیز همانند ساکنین تهران می‌باشد، فقط این نکته را در نظر
          داشته باشید که حضور صاحب دسته چک در هنگام صدور و ثبت چک در دفتر آژانس
          بیسان سیر برای کلیه عزیزانی که قصد استفاده از تور اقساطی دارند الزامی
          می‌باشد و چک از پیش نوشته شده به هیچ عنوان پذیرفته نمی‌شود.
        </ToursInstallmentMainSection>

        <ToursInstallmentMainSection title="نکات مهم در مورد چک">
          <SectionContentList items={importantNotes} isTick />
        </ToursInstallmentMainSection>

        <ToursInstallmentMainSection title="و اما نکته آخر">
          <div>
            نگران محدودیت تعداد برگه‌های چکتان نباشید، در صورتیکه امکان ارائه چک
            به صورت ماهیانه را ندارید ( بدلیل محدودیت برگه‌های دسته چک)
            می‌توانید با هماهنگی حسابداری چکها را به صورت یک ماه در میان صادر
            کنید.
            <div style={{ paddingRight: '20px' }}>
              <div style={{ display: 'flex', gap: '20px', marginTop: '60px' }}>
                <BrownSquareMark style={{ marginTop: '8px' }} />
                در خصوص باز پرداخت یک ماه در میان، سر رسيد اولين پرداخت ۴۵ روز
                بعد از عقد قرارداد خواهد بود.
              </div>
              <img
                src={CheckImage}
                alt="check example"
                style={{
                  width: '100%',
                  objectFit: 'contain',
                  marginTop: '16px',
                }}
              />
            </div>
          </div>
        </ToursInstallmentMainSection>
      </div>
    </div>
  );
}

function SectionContentList({ items, isTick }) {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
      }}
    >
      {items.map((item, i) => (
        <SectionContentListItem
          key={item}
          item={item}
          label={i + 1}
          isTick={isTick}
        />
      ))}
    </div>
  );
}

function SectionContentListItem({ item, label, isTick = false }) {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: isTick ? 'flex-start' : 'center',
        gap: '8px',
      }}
    >
      <div style={{ width: 'max-content', flexShrink: 0 }}>
        {isTick ? (
          <YellowRoundedTick />
        ) : (
          <div
            style={{
              height: '20px',
              width: '20px',
              border: '2px solid rgb(237, 224, 89)',
              borderRadius: '4px',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              fontSize: '14px',
              fontWeight: '500',
            }}
          >
            {label}
          </div>
        )}
      </div>

      {item}
    </div>
  );
}
