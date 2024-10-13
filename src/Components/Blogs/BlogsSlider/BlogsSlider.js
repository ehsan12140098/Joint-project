import { useRef } from 'react';
import styled from 'styled-components';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation } from 'swiper/modules';
import { Pagination } from 'swiper/modules';
import { ChevronRight } from 'Assets/Svgs/ChevronRight';
import { ChevronLeft } from 'Assets/Svgs/ChevronLeft';
import BlogsSliderItem from './BlogsSliderItem';

const gallery = [
  {
    id: 1,
    image: 'https://picsum.photos/id/1/1250/400',
    title: 'دانستنی های مارماریس',
  },
  {
    id: 2,
    image: 'https://picsum.photos/id/2/1250/400',
    title: 'دانستنی های استانبول',
  },
  {
    id: 3,
    image: 'https://picsum.photos/id/3/1250/400',
    title: 'دانستنی های تست',
  },
  {
    id: 4,
    image: 'https://picsum.photos/id/4/1250/400',
    title: 'دانستنی های مارماریس',
  },
  {
    id: 5,
    image: 'https://picsum.photos/id/5/1250/400',
    title: 'دانستنی های مارماریس',
  },
  {
    id: 6,
    image: 'https://picsum.photos/id/6/1250/400',
    title: 'دانستنی های مارماریس',
  },
  {
    id: 7,
    image: 'https://picsum.photos/id/7/1250/400',
    title: 'دانستنی های مارماریس',
  },
  {
    id: 8,
    image: 'https://picsum.photos/id/8/1250/400',
    title: 'دانستنی های مارماریس',
  },
  {
    id: 9,
    image: 'https://picsum.photos/id/9/1250/400',
    title: 'دانستنی های مارماریس',
  },
  {
    id: 10,
    image: 'https://picsum.photos/id/10/1250/400',
    title: 'دانستنی های مارماریس',
  },
];

export default function BlogsMainSlider() {
  const navigationPrevRef = useRef(null);
  const navigationNextRef = useRef(null);
  const pRef = useRef(null);

  return (
    <BlogSwiperHolder>
      <BlogSwiperContainer>
        <SwiperButtonPrev ref={navigationPrevRef}>
          <ChevronLeft />
        </SwiperButtonPrev>
        <SliderContainer
          style={{
            borderRadius: '24px',
            overflow: 'hidden',
            direction: 'ltr',
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
          pagination={{
            // el: pRef.current,
            clickable: true,
          }}
          modules={[Pagination, Navigation]}
        >
          {gallery.map(item => (
            <SwiperSlide key={item.id}>
              <BlogsSliderItem item={item} />
            </SwiperSlide>
          ))}
        </SliderContainer>
        <SwiperButtonNext ref={navigationNextRef}>
          <ChevronRight />
        </SwiperButtonNext>
        {/* <BlogSwiperPagination ref={pRef}></BlogSwiperPagination> */}
      </BlogSwiperContainer>
    </BlogSwiperHolder>
  );
}

const SliderContainer = styled(Swiper)`
  position: unset;

  .swiper-wrapper {
    /* border: 1px solid blue; */
    position: unset;
  }

  .swiper-pagination {
    display: flex;
    align-items: center;
    justify-content: center;
    /* border: 1px solid red; */
    position: absolute;
    gap: 16px;
    bottom: 0;
    left: 0;
    right: 0;
    .swiper-pagination-bullet {
      width: 12px;
      height: 12px;
      background-color: rgb(204, 204, 204) !important;
      opacity: 0.8;
      margin: 0;

      &-active {
        width: 11px;
        height: 11px;
        background-color: #000 !important;
      }
    }
  }
`;

const BlogSwiperHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 20px;
  width: 100%;
  margin-top: 18px;
`;

const BlogSwiperContainer = styled.div`
  /* border: 1px solid red; */
  position: relative !important;
  width: 100%;
  padding-bottom: 30px;
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

const BlogSwiperPagination = styled.div`
  border: 1px solid red;
  width: 100%;
  height: 10px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 4px;
`;
