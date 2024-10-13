import React, { useRef, useState } from "react";

import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/effect-cards";
import "swiper/css/navigation";

// import "./EffectCardsSwiperComponent.css";

import { EffectCards, Navigation } from "swiper/modules";

import { styled } from "styled-components";

import franceflag from "../../Assets/images/franceflag.png";
import slider1 from "../../Assets/images/slider1.png";

import { Calendar2 } from "../../Assets/Svgs/Calendar2";
import { MoneyIcon } from "../../Assets/Svgs/MoneyIcon";
import { slider1datas } from "./slider1datas";

import { ChevronRight } from "../../Assets/Svgs/ChevronRight";
import { ChevronLeft } from "../../Assets/Svgs/ChevronLeft";

export const EffectCardsSwiperComponent = ({ ...props }) => {
  const navigationPrevRef = React.useRef(null);
  const navigationNextRef = React.useRef(null);
  // const [currentSlide, setCurrentSlide] = useState(1);

  // const handleNextSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide === 7 ? 1 : prevSlide + 1));
  // };

  // const handlePrevSlide = () => {
  //   setCurrentSlide((prevSlide) => (prevSlide === 1 ? 7 : prevSlide - 1));
  // };

  return (
    <MainSlider {...props}>
      <SliderContainer>
        <PrevButton ref={navigationPrevRef}>
          <ChevronLeft />
        </PrevButton>
        <EffectCardsSwiper
          effect={"cards"}
          grabCursor={true}
          loop={true}
          slidesPerView={1}
          modules={[EffectCards, Navigation]}
          navigation={{
            nextEl: navigationNextRef.current,
            prevEl: navigationPrevRef.current,
          }}
          onInit={(swiper) => {
            swiper.params.navigation.nextEl = navigationNextRef.current;
            swiper.params.navigation.prevEl = navigationPrevRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
          }}
        >
          {slider1datas.map((slider1data, index) => (
            <EffectCardsSwiperSlide key={slider1data.id}>
              <InsideCard>
                <FirstDivInsideLabelHolder>
                  <FirstDivInsideLabel>
                    <DestinationHolder>
                      <Destination>{slider1data.destination}</Destination>
                      <Flag></Flag>
                    </DestinationHolder>
                    <StartTimeOrEndTime>
                      <StarttimeDateOrEndtimeDate>
                        {slider1data.starttimedate}
                      </StarttimeDateOrEndtimeDate>
                      <StarttimeTextOrEndtimeText>
                        شروع سفر
                      </StarttimeTextOrEndtimeText>
                      <Calendar2 />
                    </StartTimeOrEndTime>
                    <StartTimeOrEndTime>
                      <StarttimeDateOrEndtimeDate>
                        {slider1data.endtimedate}
                      </StarttimeDateOrEndtimeDate>
                      <StarttimeTextOrEndtimeText>
                        پایان سفر
                      </StarttimeTextOrEndtimeText>
                      <Calendar2 />
                    </StartTimeOrEndTime>
                    <Duration>
                      <NightsnumberTextOrDaysnumberText>
                        شب
                      </NightsnumberTextOrDaysnumberText>
                      <NightsNumberOrDaysNumber>
                        {slider1data.nightsnumber}
                      </NightsNumberOrDaysNumber>
                      <NightsnumberTextOrDaysnumberText>
                        روز و
                      </NightsnumberTextOrDaysnumberText>
                      <NightsNumberOrDaysNumber>
                        {slider1data.daysnumber}
                      </NightsNumberOrDaysNumber>
                    </Duration>
                  </FirstDivInsideLabel>
                </FirstDivInsideLabelHolder>
                <SecondDivInsideLabelHolder>
                  <TourDescription>
                    {slider1data.descriptionslider2}
                  </TourDescription>
                  <Price>
                    <MoneyIcon />
                    <PriceNumber>{slider1data.price}</PriceNumber>
                    <Toman>تومان</Toman>
                  </Price>
                </SecondDivInsideLabelHolder>
              </InsideCard>
            </EffectCardsSwiperSlide>
          ))}
        </EffectCardsSwiper>
        <NextButton ref={navigationNextRef}>
          <ChevronRight />
        </NextButton>
      </SliderContainer>
    </MainSlider>
  );
};

// const StyledRadioButton = styled.input`
//   position: relative;
//   top: 108%;
//   left: 50%;
//   width: 18px;
//   height: 18px;
//   margin: 0 15px 0 0;
//   opacity: 0.4;
//   transform: translateX(-83px);
//   cursor: pointer;
//   display: none;

//   &:nth-child(7) {
//     margin-right: 0px;
//   }

//   &:checked {
//     opacity: 1;
//   }
// `;

// const StyledLabel = styled.label`
//   width: 100%;
//   height: 100%;
//   left: 0;
//   top: 0;
//   color: white;
//   font-size: 70px;
//   font-weight: bold;
//   border-radius: 24px;
//   cursor: pointer;
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   transition: transform 1s ease;
//   &:before {
//     content: "";
//     position: absolute;
//     border-radius: 24px;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(180deg, rgba(0, 0, 0, 0.3) 100%, #000 100%);
//     z-index: 1;
//   }
// `;

// const StyledSection = styled.section`
//   width: 310px;
//   height: 380px;
//   font-family: "Helvetica Neue", sans-serif;
//   perspective: 1400px;
//   transform-style: preserve-3d;

//   @media (max-width: 640px) {
//     width: 70%;
//     height: 300px;
//   }

//   @media (min-width: 640px) and (max-width: 1024px) {
//     width: 49%;
//     height: 400px;
//   }
// `;

const MainSlider = styled.div`
  width: 350px;
  height: 450px;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  @media (max-width: 640px) {
    width: 100%;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 100%;
  }
`;

const SliderContainer = styled.div`
  width: 350px;
  height: 450px;
  position: relative;
  display: flex;
  justify-content: end;
  align-items: center;
  @media (max-width: 640px) {
    width: 100%;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    /* justify-content: start !important; */
    width: 100%;
  }
`;
const EffectCardsSwiper = styled(Swiper)`
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: row;
  justify-content: space-between !important;
  align-items: center;
  position: relative;
  @media (max-width: 640px) {
    width: 80%;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 89%;
  }
`;
const EffectCardsSwiperSlide = styled(SwiperSlide)`
  background-position: center;
  width: 350px;
  height: 450px;
  background-image: url(${slider1});
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 5px;
  &:before {
    content: "";
    position: absolute;
    border-radius: 5px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 45.31%, #000 100%);
    z-index: 1;
  }
  @media (max-width: 640px) {
    height: 350px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 80% !important;
  }
`;
const InsideCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 90%;
  z-index: 2;
`;
const FirstDivInsideLabelHolder = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: end;
`;
const FirstDivInsideLabel = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-end;
  gap: 16px;
  @media (max-width: 640px) {
    gap: 8px;
  }
`;
const DestinationHolder = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    padding: 4px 8px;
    gap: 4px;
  }
`;
const Destination = styled.div`
  color: #000;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;
const Flag = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${franceflag});
  border-radius: 50%;
`;
const StartTimeOrEndTime = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    padding: 4px 8px;
    gap: 4px;
  }
`;
const StarttimeDateOrEndtimeDate = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans(FaNum);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;
const StarttimeTextOrEndtimeText = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;
const Duration = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 20px;
  background: #fff;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
  @media (max-width: 640px) {
    padding: 4px 8px;
    gap: 4px;
  }
`;
const NightsnumberTextOrDaysnumberText = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;
const NightsNumberOrDaysNumber = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans(FaNum);
  font-size: 14px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;
const SecondDivInsideLabelHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 50px;
  @media (max-width: 640px) {
    gap: 30px;
  }
`;
const TourDescription = styled.div`
  color: #fff;
  text-align: center;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  z-index: 2;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;
const Price = styled.div`
  display: flex;
  flex-direction: row;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  flex-shrink: 0;
  border-radius: 44px;
  background: #fff;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.1);
  z-index: 2;
  @media (max-width: 640px) {
    padding: 4px 8px;
    gap: 4px;
  }
`;
const PriceNumber = styled.div`
  color: #000;
  font-family: IRANSans(FaNum);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 12px;
  }
`;
const Toman = styled.div`
  color: #000;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 10px;
  }
`;
const NextButton = styled.div`
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: #ede059;
  border: none;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  right: -90px;
  @media (max-width: 640px) {
    right: -50px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    right: -10px;
  }
`;
const PrevButton = styled.div`
  height: 48px;
  width: 48px;
  background: #ede059;
  border-radius: 50%;
  border: none;
  z-index: 4;
  display: flex;
  justify-content: center;
  align-items: center;
  position: absolute;
  top: 50%;
  left: -90px;
  @media (max-width: 640px) {
    left: -50px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    left: -55px;
  }
`;

// const [currenteSlide, setCurrenteSlide] = useState(1);

// const handleNextSlide = () => {
//   setCurrenteSlide((prevSlide) => (prevSlide === 7 ? 1 : prevSlide + 1));
// };

// const handlePrevSlide = () => {
//   setCurrenteSlide((prevSlide) => (prevSlide === 1 ? 7 : prevSlide - 1));
// };

{
  /* <MainSlider {...props}>
<SliderContainer>
  <PrevButton onClick={handlePrevSlide}>
    <ChevronLeft />
  </PrevButton>
  <StyledSection id="slider-europe" className="section-slider">
    {slider1datas.map((slider1data) => (
      <StyledRadioButton
        type="radio"
        name="slider-europe"
        id={`d${slider1data.id}`}
        key={slider1data.id}
        checked={currentSlide === slider1data.id}
      />
    ))}
    {slider1datas.map((slider1data, index) => (
      <StyledLabel
        className="label"
        htmlFor={`d${slider1data.id}`}
        id={`eslide${slider1data.id}`}
        key={slider1data.id}
        slider1data={slider1data}
      >
        <InsideCard>
          <FirstDivInsideLabelHolder>
            <FirstDivInsideLabel>
              <DestinationHolder>
                <Destination>{slider1data.destination}</Destination>
                <Flag></Flag>
              </DestinationHolder>
              <StartTimeOrEndTime>
                <StarttimeDateOrEndtimeDate>
                  {slider1data.starttimedate}
                </StarttimeDateOrEndtimeDate>
                <StarttimeTextOrEndtimeText>
                  شروع سفر
                </StarttimeTextOrEndtimeText>
                <Calendar2 />
              </StartTimeOrEndTime>
              <StartTimeOrEndTime>
                <StarttimeDateOrEndtimeDate>
                  {slider1data.endtimedate}
                </StarttimeDateOrEndtimeDate>
                <StarttimeTextOrEndtimeText>
                  پایان سفر
                </StarttimeTextOrEndtimeText>
                <Calendar2 />
              </StartTimeOrEndTime>
              <Duration>
                <NightsnumberTextOrDaysnumberText>
                  شب
                </NightsnumberTextOrDaysnumberText>
                <NightsNumberOrDaysNumber>
                  {slider1data.nightsnumber}
                </NightsNumberOrDaysNumber>
                <NightsNumberOrDaysNumber>روز و</NightsNumberOrDaysNumber>
                <NightsNumberOrDaysNumber>
                  {slider1data.daysnumber}
                </NightsNumberOrDaysNumber>
              </Duration>
            </FirstDivInsideLabel>
          </FirstDivInsideLabelHolder>
          <SecondDivInsideLabelHolder>
            <TourDescription>
              {slider1data.descriptionslider2}
            </TourDescription>
            <Price>
              <MoneyIcon />
              <PriceNumber>{slider1data.price}</PriceNumber>
              <Toman>تومان</Toman>
            </Price>
          </SecondDivInsideLabelHolder>
        </InsideCard>
      </StyledLabel>
    ))}
  </StyledSection>
  <NextButton onClick={handleNextSlide}>
    <ChevronRight />
  </NextButton>
</SliderContainer>
</MainSlider> */
}

// <MainSlider {...props}>
// <SliderContainer>
//   <EffectCardsSwiper
//     effect={"cards"}
//     grabCursor={true}
//     modules={[EffectCards]}
//   >
//     {slider1datas.map((slider1data, index) => (
//       <EffectCardsSwiperSlide key={slider1data.id}>
//         <InsideCard>
//           <FirstDivInsideLabelHolder>
//             <FirstDivInsideLabel>
//               <DestinationHolder>
//                 <Destination>{slider1data.destination}</Destination>
//                 <Flag></Flag>
//               </DestinationHolder>
//               <StartTimeOrEndTime>
//                 <StarttimeDateOrEndtimeDate>
//                   {slider1data.starttimedate}
//                 </StarttimeDateOrEndtimeDate>
//                 <StarttimeTextOrEndtimeText>
//                   شروع سفر
//                 </StarttimeTextOrEndtimeText>
//                 <Calendar2 />
//               </StartTimeOrEndTime>
//               <StartTimeOrEndTime>
//                 <StarttimeDateOrEndtimeDate>
//                   {slider1data.endtimedate}
//                 </StarttimeDateOrEndtimeDate>
//                 <StarttimeTextOrEndtimeText>
//                   پایان سفر
//                 </StarttimeTextOrEndtimeText>
//                 <Calendar2 />
//               </StartTimeOrEndTime>
//               <Duration>
//                 <NightsnumberTextOrDaysnumberText>
//                   شب
//                 </NightsnumberTextOrDaysnumberText>
//                 <NightsNumberOrDaysNumber>
//                   {slider1data.nightsnumber}
//                 </NightsNumberOrDaysNumber>
//                 <NightsnumberTextOrDaysnumberText>
//                   روز و
//                 </NightsnumberTextOrDaysnumberText>
//                 <NightsNumberOrDaysNumber>
//                   {slider1data.daysnumber}
//                 </NightsNumberOrDaysNumber>
//               </Duration>
//             </FirstDivInsideLabel>
//           </FirstDivInsideLabelHolder>
//           <SecondDivInsideLabelHolder>
//             <TourDescription>
//               {slider1data.descriptionslider2}
//             </TourDescription>
//             <Price>
//               <MoneyIcon />
//               <PriceNumber>{slider1data.price}</PriceNumber>
//               <Toman>تومان</Toman>
//             </Price>
//           </SecondDivInsideLabelHolder>
//         </InsideCard>
//       </EffectCardsSwiperSlide>
//     ))}
//   </EffectCardsSwiper>
// </SliderContainer>
// </MainSlider>
