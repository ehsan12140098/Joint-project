import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { useRef } from 'react';
import { ChevronLeft } from 'Assets/Svgs/ChevronLeft';
import { ChevronRight } from 'Assets/Svgs/ChevronRight';

import firstImage from 'Assets/images/about-us/1.jpg';

const gallery = [
  {
    id: 1,
    image: '1.jpg',
  },
  {
    id: 2,
    image: '2.jpg',
  },
  {
    id: 3,
    image: '3.jpg',
  },
  {
    id: 4,
    image: '4.jpg',
  },
  {
    id: 5,
    image: '5.jpg',
  },
  {
    id: 6,
    image: '6.jpg',
  },
];

export default function AboutUsMainSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);

  return (
    <BlogSwiperContainer>
      <SwiperButtonPrev ref={navigationPrevRef}>
        <ChevronLeft />
      </SwiperButtonPrev>
      <SliderContainer
        style={{
          borderRadius: '24px',
          overflow: 'hidden',
          direction: 'ltr',
          // border: '1px solid black',
        }}
        navigation={{
          nextEl: navigationNextRef.current,
          prevEl: navigationPrevRef.current,
        }}
        onInit={swiper => {
          swiper.params.navigation.nextEl = navigationNextRef.current;
          swiper.params.navigation.prevEl = navigationPrevRef.current;
          swiper.navigation.init();
          swiper.navigation.update();
        }}
        modules={[Navigation]}
      >
        {gallery.map(item => (
          <SwiperSlide
            key={item.id}
            style={{
              width: '100%',
              height: '100%',
              // border: '1px solid red'
            }}
          >
            {/* <BlogsSliderItem item={item} /> */}
            <img
              src={require('Assets/images/about-us/' + item.image)}
              alt="about-us"
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
          </SwiperSlide>
        ))}
      </SliderContainer>
      <SwiperButtonNext ref={navigationNextRef}>
        <ChevronRight />
      </SwiperButtonNext>
    </BlogSwiperContainer>
  );
}

const BlogSwiperContainer = styled.div`
  /* border: 1px solid red; */
  position: relative !important;
  width: 100%;
  /*  padding-bottom: 30px; */
`;

const SliderContainer = styled(Swiper)`
  position: unset;
  height: 430px;

  .swiper-wrapper {
    /* border: 1px solid blue; */
    position: unset;
  }
`;

const SwiperButton = styled.div`
  position: absolute;
  width: 50px;
  height: 50px;
  border-radius: 50%;
  background-color: white;
  color: gray;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 50%;
  transform: translateY(-50%);
  filter: drop-shadow(0px 5px 20px rgba(0, 0, 0, 0.05));
  z-index: 3;
  cursor: pointer;
`;

const SwiperButtonNext = styled(SwiperButton)`
  right: 40px;

  @media (max-width: 640px) {
    right: 5px;
  }
`;

const SwiperButtonPrev = styled(SwiperButton)`
  left: 40px;
  @media (max-width: 640px) {
    left: 5px;
  }
`;
