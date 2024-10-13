import HomePageSectionSubtitle from '../HomePageSectionSubtitile';
import HomePageSectionTitle from '../HomePageSectionTitle';
import HomePageImageLink from '../HomePageImageLink';
import HomePageContainer from '../HomePageContainer';
import styled from 'styled-components';
import { SwiperSlide, Swiper } from 'swiper/react';
import 'swiper/css';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const tours = [
  {
    id: 1,
    href: 'tours/تور-کوش-آداسی',
    image:
      'https://bisanseir.com/media/cache/93/06/9306a7b3e2d6a6dc7c863e2b28a56db4.jpg',
    title: 'شیراز',
  },
  {
    id: 2,
    href: 'tours/تور-کوش-آداسی',
    image:
      'https://bisanseir.com/media/cache/2a/4a/2a4ae8558b0af518bef3314cebf3dfb9.jpg',
    title: 'مشهد',
  },
  {
    id: 3,
    href: 'tours/تور-کوش-آداسی',
    image:
      'https://bisanseir.com/media/cache/e0/1f/e01f850896f69eec4feb501fb6dafcf6.jpg',
    title: 'کیش',
  },
  {
    id: 4,
    href: 'tours/تور-کوش-آداسی',
    image:
      'https://bisanseir.com/media/cache/cc/33/cc33009c76ffc65f2ea5efa7fe5d3dd7.jpg',
    title: 'قشم',
  },
];

export default function HomePageDomesticTours() {
  const isDesktop = useIsDesktopDisplay();

  return (
    <HomePageContainer>
      <section
        style={{ display: 'flex', flexDirection: 'column', gap: '24px' }}
      >
        <div>
          <HomePageSectionTitle style={{ marginBottom: '20px' }}>
            تور های داخلی
          </HomePageSectionTitle>
          <HomePageSectionSubtitle>
            انتخاب شما از بین مقاصد محبوب سایر مسافران کدام است؟
          </HomePageSectionSubtitle>
        </div>

        {isDesktop ? (
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(4, minmax(0,1fr)',
              gap: '3.5rem',
            }}
          >
            {tours.map(des => (
              <HomePageImageLink key={des.id} item={des} />
            ))}
          </div>
        ) : (
          <StyledSliderHolder>
            <Swiper
              slidesPerView={4}
              spaceBetween={20}
              centeredSlides={true}
              loop
              className="mySwiper"
            >
              {tours.map(des => (
                <SwiperSlide key={des.id}>
                  <HomePageImageLink item={des} />
                </SwiperSlide>
              ))}
              {tours.map(des => (
                <SwiperSlide key={des.id}>
                  <HomePageImageLink item={des} />
                </SwiperSlide>
              ))}
              {tours.map(des => (
                <SwiperSlide key={des.id}>
                  <HomePageImageLink item={des} />
                </SwiperSlide>
              ))}
              {tours.map(des => (
                <SwiperSlide key={des.id}>
                  <HomePageImageLink item={des} />
                </SwiperSlide>
              ))}
            </Swiper>
          </StyledSliderHolder>
        )}
      </section>
    </HomePageContainer>
  );
}

const StyledSliderHolder = styled.div`
  width: 100%;

  .mySwiper {
    width: 100%;
  }
`;
