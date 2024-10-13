import React, { useEffect, useRef } from 'react';
import styled, { keyframes } from 'styled-components';
import lottie from 'lottie-web';
import fulltime from '../../Assets/animations/fulltime.json';
import safely from '../../Assets/animations/safely.json';
import bestprice from '../../Assets/animations/best price.json';
import target from '../../Assets/animations/Target.json';
import tour from '../../Assets/animations/tour.json';
import visa from '../../Assets/animations/visa.json';

const createLottieAnimation = (animationData, container) => {
  return lottie.loadAnimation({
    container,
    renderer: 'svg',
    loop: true,
    autoplay: false,
    animationData,
  });
};

export const WhyBisan = () => {
  const container1 = useRef(null);
  const container2 = useRef(null);
  const container3 = useRef(null);
  const container4 = useRef(null);
  const container5 = useRef(null);
  const container6 = useRef(null);

  let lottie1;
  let lottie2;
  let lottie3;
  let lottie4;
  let lottie5;
  let lottie6;

  useEffect(() => {
    lottie1 = createLottieAnimation(fulltime, container1.current);
    lottie2 = createLottieAnimation(safely, container2.current);
    lottie3 = createLottieAnimation(bestprice, container3.current);
    lottie4 = createLottieAnimation(target, container4.current);
    lottie5 = createLottieAnimation(tour, container5.current);
    lottie6 = createLottieAnimation(visa, container6.current);

    return () => {
      lottie1.destroy();
      lottie2.destroy();
      lottie3.destroy();
      lottie4.destroy();
      lottie5.destroy();
      lottie6.destroy();
    };
  }, []);

  return (
    <MainWhyBisan>
      <WhyBisanTitle>
        <WhyBisanTitleText>
          <QuestionMarkHolder>؟</QuestionMarkHolder>چرا بیسان سیر
        </WhyBisanTitleText>
        {/* <WhyBisanSubtitleText>
          مزایای خرید تور از بیسان سیر
        </WhyBisanSubtitleText> */}
      </WhyBisanTitle>

      <ReasonsContainer>
        <Reason>
          <div
            ref={container1}
            onMouseEnter={() => lottie1.play()}
            onMouseLeave={() => lottie1.pause()}
          />
          <EachReasonText>
            <EachReasonTitle>24 ساعته کنارتیم</EachReasonTitle>
            <EachReasonDescription>
              معنای واقعی عبارت 7/24 را با بیسان سیر تجربه کنید. در طول هفته در
              هر ساعت از شبانه روز، همکاران ما به گرمی آماده پاسخگویی به شما
              هستن پس با خیال راحت تلفنت رو بردار و هر سوالی که در مورد سفرت
              داری رو از ما بپرس
            </EachReasonDescription>
          </EachReasonText>
        </Reason>
        <Reason>
          <div
            ref={container2}
            onMouseEnter={() => lottie2.play()}
            onMouseLeave={() => lottie2.pause()}
          />
          <EachReasonText>
            <EachReasonTitle>با خیال راحت سفر کن</EachReasonTitle>
            <EachReasonDescription>
              از ویژگی‌های منحصر به فرد ما اینه که از شروع تا پایان سفرتون، در
              کنار شما هستیم. پس اگر توی سفر نیاز به همراه متخصص و مطمئن داشتی،
              کافیه با ما در ارتباط باشی. پس تورت رو بخر و دیگه نگران بقیه چیزا
              نباش، تنها کاری که باید بکنی این که چمدونت رو ببندی و صفر تا صد
              چیدن سفرت رو بسپاری به بیسان. خلاصه که حل مشکلات سفرتون با ما، لذت
              بردن از لحظه‌هاتون با شما
            </EachReasonDescription>
          </EachReasonText>
        </Reason>
        <Reason>
          <div
            ref={container3}
            onMouseEnter={() => lottie3.play()}
            onMouseLeave={() => lottie3.pause()}
          />
          <EachReasonText>
            <EachReasonTitle>آخرین قیمت را از ما بپرس</EachReasonTitle>
            <EachReasonDescription>
              اگر اهل سفر هستی و مدیریت هزینه‌هات یکی از مهمترین کارهایی هستش که
              باید انجام بدی! قبل از اینکه بلیطتت رو نهایی کنی، کافیه یه سر به
              سایت ما بزنی تا از دیدن قیمت‌هامون شگفت زده بشی
            </EachReasonDescription>
          </EachReasonText>
        </Reason>
        <Reason>
          <div
            ref={container4}
            onMouseEnter={() => lottie4.play()}
            onMouseLeave={() => lottie4.pause()}
          />
          <EachReasonText>
            <EachReasonTitle>رضایتتون هدف ماست...</EachReasonTitle>
            <EachReasonDescription>
              در نهایت رضایت شما از سفرتون، باعث افتخار و دلگرمی ماست. همه سعی
              ما ساختن سفری رویایی و سرشار از حس خوبه، آخه ما دوست داریم دوباره
              شمارو ببینیم این حق شماست که با قیمتی منصفانه، خدمات عالی و با
              کیفیتی را دریافت کنید. در این راه شما هم در کنار ما باشید و حس
              خوبتون رو با دوستاتون به اشتراک بزارید
            </EachReasonDescription>
          </EachReasonText>
        </Reason>
        <Reason>
          <div
            ref={container5}
            onMouseEnter={() => lottie5.play()}
            onMouseLeave={() => lottie5.pause()}
          />
          <EachReasonText>
            <EachReasonTitle>تورت رو خودت بساز...</EachReasonTitle>
            <EachReasonDescription>
              از تورهای تکراری با تعداد شب‌های محدود خسته شدی؟! می‌تونی با کمک
              ما تورت رو خودت بسازی بدون محدودیت زمانی! اگر تجربه اولتونه، اصلا
              نترسید! با همفکری همکاران با تجربمون خیلی راحت به چیزی که دوست
              دارید می‌رسید
            </EachReasonDescription>
          </EachReasonText>
        </Reason>
        <Reason>
          <div
            ref={container6}
            onMouseEnter={() => lottie6.play()}
            onMouseLeave={() => lottie6.pause()}
          />
          <EachReasonText>
            <EachReasonTitle>ویزات رو بدون مشکل بگیر...</EachReasonTitle>
            <EachReasonDescription>
              همه سعی ما این هستش که در کوتاه ترین زمان ممکن، ویزاتون رو تو
              دستتون بزاریم. توی صفحه ویزامون همه شرایط رو توضیح دادیم. از اونجا
              فرم اخذ ویزا رو پر کن و برای ما بفرست. خیلی سریع فرم اولیه رو چک
              می‌کنیم و نواقص پروندتون رو بهتون می‌گیم. اینجوری کلی از اتلاف وقت
              جلوگیری می‌شه. اگرم مدارکتون کامل بود تو سریعترین زمانی که حتی
              باورتون نمیشه، ویزاتون رو می‌گیریم
            </EachReasonDescription>
          </EachReasonText>
        </Reason>
      </ReasonsContainer>
    </MainWhyBisan>
  );
};

const MainWhyBisan = styled.div`
  width: 80%;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 30px;
  /* border: 1px solid green; */
`;

const vibrate = keyframes`
   0% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
  20% {
    -webkit-transform: translate(-2px, 2px);
            transform: translate(-2px, 2px);
  }
  40% {
    -webkit-transform: translate(-2px, -2px);
            transform: translate(-2px, -2px);
  }
  60% {
    -webkit-transform: translate(2px, 2px);
            transform: translate(2px, 2px);
  }
  80% {
    -webkit-transform: translate(2px, -2px);
            transform: translate(2px, -2px);
  }
  100% {
    -webkit-transform: translate(0);
            transform: translate(0);
  }
`;
const WhyBisanTitle = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const WhyBisanTitleText = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  color: #000;
  text-align: center;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  animation: ${vibrate} 1.2s linear infinite both;
`;

const QuestionMarkHolder = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-right: 5px;
`;

const WhyBisanSubtitleText = styled.div`
  color: #808080;
  text-align: center;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const ReasonsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
  width: 100%;
  @media (max-width: 640px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const EachReasonText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 10px;
`;
const EachReasonTitle = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const EachReasonDescription = styled.div`
  color: #808080;
  text-align: center;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Reason = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  gap: 20px;
`;

// import { COLUMN, COLUMN_CENTER, ROW_CENTER } from "../../styles/FlexStyles";
// import {
//   SMALL_TEXT,
//   LARGE_TEXT_BOLD,
//   MEDIUM_TEXT_BOLD,
// } from "../../styles/globalTypography";

// const containerRefs = [
//   useRef(null),
//   useRef(null),
//   useRef(null),
//   useRef(null),
//   useRef(null),
//   useRef(null),
// ];

// const animations = [fulltime, safely, bestprice, target, tour, visa];

// const playAnimation = (index) => {
//   lottie.loadAnimation({
//     container: containerRefs[index].current,
//     renderer: "svg",
//     loop: true,
//     autoplay: false,
//     animationData: animations[index],
//   });
// };

// const pauseAnimation = (index) => {
//   lottie.destroy(containerRefs[index].current);
// };
