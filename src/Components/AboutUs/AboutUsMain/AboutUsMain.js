import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';

import AboutUsMainSlider from './AboutUsMainSlider.js/AboutUsMainSlider';
import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import { BlackLocation } from 'Assets/Svgs/BlackLocation';
import { SevenDaysCalendar } from 'Assets/Svgs/SevenDaysCalendar';
import { TwentyFourHour } from 'Assets/Svgs/TwentyFourHour';
import styled from 'styled-components';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import AboutUsServices from '../AboutUsServices';

export default function AboutUsMain() {
  const isLgOrBigger = useIsDesktopDisplay('lg');
  const isSmOrBigger = useIsDesktopDisplay('sm');
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '32px' }}>
      <AboutUsMainSlider />
      <div
        style={{
          display: 'flex',
          gap: '20px',
          flexDirection: isSmOrBigger ? 'row' : 'column-reverse',
        }}
      >
        <Section
          sx={{ width: isLgOrBigger ? '100%' : isSmOrBigger ? '50%' : '100%' }}
        >
          <p>
            بیسان‌سیر با بروزرسانی اطلاعات خود در زمینه تورهای مسافرتی و خدمات
            اخذ ویزای توریستی و تحصیلی، توسط پرسنلی با تجربه، کارآزموده و متعهد
            در تلاش است که با ارائه خدماتی متمایز به شما اثبات کند که در این
            حرفه بهترین است.
          </p>
          <p>
            هدف اصلی بیسان‌سیر جلب نظر شما مسافران عزیز و ارائه بهترین مشاوره و
            برنامه‌ریزی درخصوص انتخاب مناسب‌ترین پروازها و هتل‌ها برای سفرتان
            می‌باشد تا آرامش و لذت‌تان در طول سفر چند برابر گردد.
          </p>
          <p>
            از اصول حرفه‌ای این مجموعه، اخلاق حرفه‌ای و تعهد بر توافقات با مشتری
            می‌باشد که موجب متمایز شدن بیسان‌سیر با سایر رقبا گردیده است، همیشه
            رضایت کامل مسافران را مهمترین هدف خود قرار داده و با ارائه خدماتی نو
            و با کیفیت به مسافران توانسته‌ایم در این صنعت به سرعت رشد و پیشرفت
            کنیم.
          </p>
          <p>
            ما در حوزه گردشگری حرف‌های زیادی برای گفتن داریم و به خود می‌بالیم
            که همه روزه برتعداد مشتریان وفادارمان افزوده می‌شود.
          </p>
        </Section>
        {!isLgOrBigger && (
          <AboutUsServices sx={{ width: isSmOrBigger ? '50%' : '100%' }} />
        )}
      </div>
      <Section>
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: isSmOrBigger ? 'center' : 'flex-start',
            flexDirection: isSmOrBigger ? 'row' : 'column',
            gap: '20px',
          }}
        >
          <SectionTitle>پشتیبانی</SectionTitle>
          <div
            style={{
              padding: '8px 20px',
              backgroundColor: 'rgb(237, 224, 89)',
              borderRadius: '24px',
              display: 'flex',
              alignItems: 'center',
              gap: '20px',
            }}
          >
            <SupportDurationBox>
              <TwentyFourHour size="24" /> 24 ساعته
            </SupportDurationBox>
            <SupportDurationBox>
              <SevenDaysCalendar size="24" />۷ روز هفته
            </SupportDurationBox>
          </div>
        </div>
        <p>
          7 روز هفته، به صورت 24 ساعته پاسخگوی شما در زمینه‌های مختلف هستیم تا
          آسایش خاطر را برای شما عزیزان از لحظه خرید تا بازگشت از سفر فراهم
          کنیم.
        </p>
      </Section>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '8px',
          fontWeight: '300',
          lineHeight: '24px',
          color: 'rgb(82, 82, 91)',
        }}
      >
        <ContactInforHolder>
          <BlackLocation />
          خيابان بهشتى، خيابان صابونچى، پلاك ٥٨، طبقه ٣، واحد ٥
        </ContactInforHolder>
        <ContactInforHolder>
          <img src={require('Assets/images/about-us/phone.jpg')} alt="phone" />
          <a style={{ color: 'inherit' }} href="tel:+982143000030">
            43000030
          </a>
        </ContactInforHolder>
        <ContactInforHolder>
          <img src={require('Assets/images/about-us/photo.jpg')} alt="phone" />
          <a style={{ color: 'inherit' }} href="tel:+989196972027">
            09196972027
          </a>
        </ContactInforHolder>
        <ContactInforHolder>
          <img src={require('Assets/images/about-us/email.jpg')} alt="email" />
          info@bisanseir.com
        </ContactInforHolder>
      </div>
    </div>
  );
}

function Section({ children, sx = {} }) {
  return (
    <BisanCard
      sx={{
        lineHeight: '28px',
        fontSize: '16px',
        fontWeight: '300',
        color: 'rgb(82, 82, 91)',
        boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 20px 0px',
        display: 'flex',
        flexDirection: 'column',
        gap: '16px',
        ...sx,
      }}
    >
      {children}
    </BisanCard>
  );
}

const SupportDurationBox = styled.div`
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 14px;
  line-height: 18px;
`;

const ContactInforHolder = styled.div`
  display: flex;
  align-items: center;
  gap: 4px;

  > img {
    width: 24px;
    height: 24px;
  }
`;
