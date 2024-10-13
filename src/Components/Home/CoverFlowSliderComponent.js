import React, { useState } from "react";
import styled from "styled-components";
import { Calendar2 } from "../../Assets/Svgs/Calendar2";
import { MoneyIcon } from "../../Assets/Svgs/MoneyIcon";
import franceflag from "../../Assets/images/franceflag.png";
import homefirstslidercloudleft from "../../Assets/images/homefirstslidercloudleft.png";
import homefirstslidercloudright from "../../Assets/images/homefirstslidercloudright.png";
import slider1 from "../../Assets/images/slider1.png";
import { slider1datas } from "./slider1datas";

import { Swiper, SwiperSlide } from "swiper/react";

import "./CoverFlowSliderComponent.css";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";

import { EffectCoverflow, Navigation } from "swiper/modules";

import { ChevronRight } from "../../Assets/Svgs/ChevronRight";
import { ChevronLeft } from "../../Assets/Svgs/ChevronLeft";

export const CoverFlowSliderComponent = () => {
  const [currentSlide, setCurrentSlide] = useState(1);

  // console.log(currentSlide);

  const handleNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 7 ? 1 : prevSlide + 1));
  };

  const handlePrevSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 1 ? 7 : prevSlide - 1));
  };

  return (
    <MainSlider>
      <SliderHolder>
        <TitleSlider>بیسان سیر</TitleSlider>
        <SubtitleSlider>با بیسان به بیش از ۵۰ نقطه دنیا سفر کن</SubtitleSlider>
      </SliderHolder>
      <SliderContainer>
        <PrevButton onClick={handlePrevSlide}>
          <ChevronLeft />
        </PrevButton>
        <StyledSection id="slider" className="section-slider">
          {slider1datas.map((slider1data) => (
            <StyledRadioButton
              type="radio"
              // name="slider"
              className={`s${slider1data.id} ${
                currentSlide === slider1data.id ? "checked" : ""
              }`}
              key={slider1data.id}
              // checked={currentSlide === slider1data.id}
            />
          ))}
          {slider1datas.map((slider1data, index) => (
            <StyledLabel
              // className="label"
              htmlFor={`s${slider1data.id}`}
              className={`slide${slider1data.id}`}
              key={slider1data.id}
              // slider1data={slider1data}
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
      <AllTours>
        <AllToursText>نمایش تمام تورها</AllToursText>
      </AllTours>
    </MainSlider>
  );
};

const StyledSection = styled.section`
  width: 30%;
  height: 400px;
  font-family: "Helvetica Neue", sans-serif;
  perspective: 1400px;
  transform-style: preserve-3d;
  /* border: 3px solid red; */

  @media (max-width: 640px) {
    width: 70%;
    height: 300px;
  }

  @media (min-width: 640px) and (max-width: 1024px) {
    width: 80%;
    height: 400px;
  }
`;
const StyledRadioButton = styled.input`
  position: relative;
  top: 108%;
  left: 50%;
  width: 18px;
  height: 18px;
  margin: 0 15px 0 0;
  opacity: 0.4;
  transform: translateX(-83px);
  cursor: pointer;
  display: none;

  /* &:nth-child(7) {
    margin-right: 0px;
  }

  &:checked {
    opacity: 1;
  } */
`;

const StyledLabel = styled.label`
  width: 100%;
  height: 100%;
  left: 0;
  top: 0;
  color: white;
  font-size: 70px;
  font-weight: bold;
  border-radius: 24px;
  cursor: pointer;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  transition: transform 1s ease;
  &:before {
    content: "";
    position: absolute;
    border-radius: 24px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 45.31%, #000 100%);
    z-index: 1;
  }
`;

const MainSlider = styled.div`
  width: 80%;
  margin: auto;
  background-color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  gap: 20px;
  /* border: 3px solid red; */
`;
const SliderHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;
const TitleSlider = styled.div`
  color: #000;
  text-align: center;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const SubtitleSlider = styled.div`
  color: #808080;
  text-align: center;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const SliderContainer = styled.div`
  width: 70%;
  position: relative;
  /* border: 3px solid green; */
  display: flex;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    width: 90%;
    height: 300px;
  }

  @media (min-width: 1025px) {
    width: 90%;
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 0px;
      width: 18%;
      height: 100%;
      /* background-image: url("../../Assets/images/homefirstslidercloudleft.png"); */
      background-image: url(${homefirstslidercloudleft});
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 3;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0px;
      right: 0px;
      width: 18%;
      height: 100%;
      /* background-image: url("../../Assets/images/homefirstslidercloudright.png"); */
      background-image: url(${homefirstslidercloudright});
      background-repeat: no-repeat;
      background-size: cover;
      z-index: 3;
    }
  }
`;
// const CoverFlowSlider = styled(Swiper)`
//   width: 80%;
//   display: flex;
//   flex-direction: row;
//   justify-content: space-between !important;
//   align-items: center;
//   position: relative;
// `;

const SwiperButton = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  color: gray;
  justify-content: center;
  align-items: center;
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.05));
  z-index: 3;
  cursor: pointer;
  background-color: #ede059;
  display: none;
  @media (max-width: 640px) {
    display: flex;
  }
`;

const SwiperButtonNext = styled(SwiperButton)`
  right: -20px;
  top: 50%;
  border: 3px solid purple;
`;
const SwiperButtonPrev = styled(SwiperButton)`
  left: -20px;
  top: 50%;
  border: 3px solid red;
`;
// const CoverFlowSwiperSlide = styled(SwiperSlide)`
//   background-position: center;
//   background-size: cover;
//   width: 350px;
//   height: 450px;
//   background-image: url(${slider1});
//   background-position: center;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   border-radius: 24px;
//   &:before {
//     content: "";
//     position: absolute;
//     border-radius: 24px;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(180deg, rgba(0, 0, 0, 0) 45.31%, #000 100%);
//     z-index: 1;
//   }
//   @media (max-width: 640px) {
//     height: 350px;
//   }
// `;
const InsideCard = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  width: 90%;
  height: 90%;
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
  font-size: 16px;
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
  font-size: 16px;
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
  font-size: 16px;
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
  font-size: 16px;
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
  font-size: 16px;
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
  font-size: 20px;
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
  padding: 8px;
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
  font-size: 20px;
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
const AllTours = styled.div`
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  flex-shrink: 0;
  border-radius: 35px;
  background: #ede059;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
`;
const AllToursText = styled.div`
  color: #5a623a;
  text-align: center;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
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
  right: -70px;
  @media (max-width: 640px) {
    right: -30px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    right: -150px;
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
  left: -70px;
  @media (max-width: 640px) {
    left: -30px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    left: -150px;
  }
`;

// const [currentSlide, setCurrentSlide] = useState(1);

// const handleNextSlide = () => {
//   setCurrentSlide((prevSlide) => (prevSlide === 7 ? 1 : prevSlide + 1));
// };

// const handlePrevSlide = () => {
//   setCurrentSlide((prevSlide) => (prevSlide === 1 ? 7 : prevSlide - 1));
// };

// <div className="main-slider">
// <div className="description-slider-1">
//   <div className="title-slider">بیسان سیر</div>
//   <div className="subtitle-slider">
//     با بیسان به بیش از ۵۰ نقطه دنیا سفر کن
//   </div>
// </div>
// <div className="slider-holder">
//   <button className="prev" onClick={handlePrevSlide}>
//     <ChevronLeft />
//   </button>
//   <StyledSection id="slider" className="section-slider">
//     {slider1datas.map((slider1data) => (
//       <StyledRadioButton
//         type="radio"
//         name="slider"
//         id={`s${slider1data.id}`}
//         key={slider1data.id}
//         checked={currentSlide === slider1data.id}
//       />
//     ))}
//     {slider1datas.map((slider1data, index) => (
//       <StyledLabel
//         className="label"
//         htmlFor={`s${slider1data.id}`}
//         id={`slide${slider1data.id}`}
//         key={slider1data.id}
//         slider1data={slider1data}
//       >
//         <div className="inside-label">
//           <div className="first-div-inside-label-holder">
//             <div className="first-div-inside-label">
//               <div className="destinationholder">
//                 <div className="destination">
//                   {slider1data.destination}
//                 </div>
//                 <div className="flag"></div>
//               </div>
//               <div className="starttime">
//                 <div className="starttime-date">
//                   {slider1data.starttimedate}
//                 </div>
//                 <div className="starttime-text">شروع سفر</div>
//                 <Calendar2 />
//               </div>
//               <div className="endtime">
//                 <div className="endtime-date">
//                   {slider1data.endtimedate}
//                 </div>
//                 <div className="endtime-text">پایان سفر</div>
//                 <Calendar2 />
//               </div>
//               <div className="duration">
//                 <div className="nightsnumber-text">شب</div>
//                 <div className="nightsnumber">
//                   {slider1data.nightsnumber}
//                 </div>
//                 <div className="daysnumber-text">روز و</div>
//                 <div className="daysnumber">{slider1data.daysnumber}</div>
//               </div>
//             </div>
//           </div>
//           <div className="second-div-inside-label-holder">
//             <div className="description-slider-2">
//               {slider1data.descriptionslider2}
//             </div>
//             <div className="price">
//               <MoneyIcon />
//               <div className="price-number">{slider1data.price}</div>
//               <div className="toman">تومان</div>
//             </div>
//           </div>
//         </div>
//       </StyledLabel>
//     ))}
//   </StyledSection>
//   <button className="next" onClick={handleNextSlide}>
//     <ChevronRight />
//   </button>
// </div>
// <div className="all-tours">
//   <div className="all-tours-text">نمایش تمام تورها</div>
// </div>
// </div>
// );

// const StyledSection = styled.section`
//   width: 30%;
//   height: 400px;
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
//   border-radius: 5px;
//   cursor: pointer;
//   border-radius: 35px;
//   position: absolute;
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   &:before {
//     content: "";
//     position: absolute;
//     border-radius: 35px;
//     top: 0;
//     left: 0;
//     width: 100%;
//     height: 100%;
//     background: linear-gradient(180deg, rgba(0, 0, 0, 0) 45.31%, #000 100%);
//     z-index: 1;
//   }
// `;

/* @media (min-width: 1280px) {
  .slider-holder {
    &:before {
      content: "";
      position: absolute;
      top: 0;
      left: 100px;
      width: 30%;
      height: 100%;
      background-image: url("../../Assets/images/homefirstslidercloudleft.png");
      background-repeat: no-repeat;
      background-size: contain;
      z-index: 2;
    }
    &:after {
      content: "";
      position: absolute;
      top: 0;
      right: 0px;
      width: 30%;
      height: 100%;
      background-image: url("../../Assets/images/homefirstslidercloudright.png");
      background-repeat: no-repeat;
      background-size: contain;
      z-index: 2;
    }
  } */
/* } */

/* #slide1 {
  background-image: url("../../Assets/images/slider1.png");
  background-size: cover;
  background-position: center;
}

#slide2 {
  background-image: url("../../Assets/images/slider2.png");
  background-size: cover;
  background-position: center;
}

#slide3 {
  background-image: url("../../Assets/images/slider2.png");
  background-size: cover;
  background-position: center;
}

#slide4 {
  background-image: url("../../Assets/images/slider2.png");
  background-size: cover;
  background-position: center;
}

#slide5 {
  background-image: url("../../Assets/images/slider2.png");
  background-size: cover;
  background-position: center;
}
#slide6 {
  background-image: url("../../Assets/images/slider2.png");
  background-size: cover;
  background-position: center;
}
#slide7 {
  background-image: url("../../Assets/images/slider2.png");
  background-size: cover;
  background-position: center;
} */

/* Slider Functionality */

/* Active Slide */
/* #s1:checked ~ #slide1,
#s2:checked ~ #slide2,
#s3:checked ~ #slide3,
#s4:checked ~ #slide4,
#s5:checked ~ #slide5,
#s6:checked ~ #slide6,
#s7:checked ~ #slide7 {
  box-shadow: 0 13px 26px rgba(0, 0, 0, 0.3), 0 12px 6px rgba(0, 0, 0, 0.2);
  transform: translate3d(0%, 0, 0px);
  z-index: 4;
} */

/* Next Slide */

/* #s1:checked ~ #slide2,
#s2:checked ~ #slide3,
#s3:checked ~ #slide4,
#s4:checked ~ #slide5,
#s5:checked ~ #slide6,
#s6:checked ~ #slide7,
#s7:checked ~ #slide1 {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
  transform: translate3d(30%, 0, -100px);
  z-index: 3;
  &:before {
    content: "";
    position: absolute;
    border-radius: 35px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 26.718px;
    background: rgba(255, 255, 255, 0.3);
    z-index: 1;
  }
  @media (max-width: 640px) {
    transform: translate3d(15%, 0, -100px);
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    transform: translate3d(25%, 0, -100px);
  }
} */

/* Next to Next Slide */
/* #s1:checked ~ #slide3,
#s2:checked ~ #slide4,
#s3:checked ~ #slide5,
#s4:checked ~ #slide6,
#s5:checked ~ #slide7,
#s6:checked ~ #slide1,
#s7:checked ~ #slide2 {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  transform: translate3d(65%, 0, -250px);
  z-index: 2;
  &:before {
    content: "";
    position: absolute;
    border-radius: 35px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 26.718px;
    background: rgba(255, 255, 255, 0.65);
    z-index: 1;
  }
  @media (max-width: 640px) {
    display: none;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    transform: translate3d(50%, 0, -250px);
  }
} */
/*Supernext */
/* #s1:checked ~ #slide4,
#s2:checked ~ #slide5,
#s3:checked ~ #slide6,
#s4:checked ~ #slide7,
#s5:checked ~ #slide1,
#s6:checked ~ #slide2,
#s7:checked ~ #slide3 {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  transform: translate3d(95%, 0, -400px);
  &:before {
    content: "";
    position: absolute;
    border-radius: 35px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 26.718px;
    background: rgba(255, 255, 255, 0.8);
    z-index: 1;
  }
  @media (max-width: 640px) {
    display: none;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    display: none;
  }
} */

/* Superprevious */
/* #s1:checked ~ #slide5,
#s2:checked ~ #slide6,
#s3:checked ~ #slide7,
#s4:checked ~ #slide1,
#s5:checked ~ #slide2,
#s6:checked ~ #slide3,
#s7:checked ~ #slide4 {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  transform: translate3d(-95%, 0, -400px);
  &:before {
    content: "";
    position: absolute;
    border-radius: 35px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 26.718px;
    background: rgba(255, 255, 255, 0.8);
    z-index: 1; 
  }
  @media (max-width: 640px) {
    display: none;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    display: none;
  }
} */

/* Previous to Previous Slide */
/* #s1:checked ~ #slide6,
#s2:checked ~ #slide7,
#s3:checked ~ #slide1,
#s4:checked ~ #slide2,
#s5:checked ~ #slide3,
#s6:checked ~ #slide4,
#s7:checked ~ #slide5 {
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.4);
  transform: translate3d(-65%, 0, -250px);
  &:before {
    content: "";
    position: absolute;
    border-radius: 35px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 26.718px;
    background: rgba(255, 255, 255, 0.65);
    z-index: 1; 
  }
  @media (max-width: 640px) {
    display: none;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    transform: translate3d(-50%, 0, -250px);
  }
} */

/* Previous Slide */
/* #s1:checked ~ #slide7,
#s2:checked ~ #slide1,
#s3:checked ~ #slide2,
#s4:checked ~ #slide3,
#s5:checked ~ #slide4,
#s6:checked ~ #slide5,
#s7:checked ~ #slide6 {
  box-shadow: 0 6px 10px rgba(0, 0, 0, 0.3), 0 2px 2px rgba(0, 0, 0, 0.2);
  transform: translate3d(-30%, 0, -100px);

  &:before {
    content: "";
    position: absolute;
    border-radius: 35px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: 26.718px;
    background: rgba(255, 255, 255, 0.3);
    z-index: 1;
  }

  @media (max-width: 640px) {
    transform: translate3d(-15%, 0, -100px);
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    transform: translate3d(-25%, 0, -100px);
  }
} */
/* .prev {
  height: 48px;
  width: 48px;
  background: #ede059;
  border-radius: 50%;
  border: none;
  z-index: 3;
}
.next {
  height: 48px;
  width: 48px;
  border-radius: 50%;
  background: #ede059;
  border: none;
  z-index: 3;
} */

/* .label {
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  &:before {
    content: "";
    position: absolute;
    border-radius: 35px;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(180deg, rgba(0, 0, 0, 0) 45.31%, #000 100%);
    z-index: 1;
  }
} */

{
  /* <MainSlider>
<SliderHolder>
  <TitleSlider>بیسان سیر</TitleSlider>
  <SubtitleSlider>با بیسان به بیش از ۵۰ نقطه دنیا سفر کن</SubtitleSlider>
</SliderHolder>
<SliderContainer>
  <SwiperButtonPrev ref={navigationPrevRef}>
    <ChevronLeft />
  </SwiperButtonPrev>
  <CoverFlowSlider
    loop={true}
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
    effect={"coverflow"}
    grabCursor={true}
    centeredSlides={true}
    slidesPerView={3}
    coverflowEffect={{
      rotate: 0,
      stretch: 0,
      depth: 300,
      modifier: 2,
      // slideShadows: true,
    }}
    // pagination={true}//
    modules={[EffectCoverflow, Navigation]}
  >
    {slider1datas.map((slider1data, index) => (
      <CoverFlowSwiperSlide key={slider1data.id}>
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
      </CoverFlowSwiperSlide>
    ))}
  </CoverFlowSlider>
  <SwiperButtonNext ref={navigationNextRef}>
    <ChevronRight />
  </SwiperButtonNext>
</SliderContainer>
<AllTours>
  <AllToursText>نمایش تمام تورها</AllToursText>
</AllTours>
</MainSlider> */
}
