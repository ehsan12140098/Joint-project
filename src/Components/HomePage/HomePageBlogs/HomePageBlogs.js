import styled from 'styled-components';

import HomePageContainer from '../HomePageContainer';
import HomePageSectionSubtitle from '../HomePageSectionSubtitile';
import HomePageSectionTitle from '../HomePageSectionTitle';
import { useMediaQuery } from '@mui/material';

const items = [
  {
    id: 2,
    img: 'https://bisanseir.com/media/blog/2022/04/20/04de1ea5-e765-58e9-9a42-35c50036fcf9.JPEG',
    title: 'موزه ایاصوفیه استانبول Hagia Sophia Museum Istanbul',
    href: 'blog/detail/موزه-ایاصوفیه-استانبول-Hagia-Sophia-Museum-Istanbul',
    colSpans: 2,
  },
  {
    id: 1,
    img: 'https://bisanseir.com/media/blog/2022/10/18/5a90198d-d44e-5a43-bc43-576dbb9affd0.jpg',
    title: 'صحرای دوحه (The Doha Desert)',
    href: 'blog/detail/موزه-ایاصوفیه-استانبول-Hagia-Sophia-Museum-Istanbul',
    colSpans: 1,
  },

  {
    id: 3,
    img: 'https://bisanseir.com/media/blog/2022/04/20/3dd7a969-fafe-5a85-b91c-96b10ef0757f.JPEG',
    title: 'مسابقات جایزه بزرگ موناکو Monaco Grand Prix',
    href: 'blog/detail/موزه-ایاصوفیه-استانبول-Hagia-Sophia-Museum-Istanbul',
    colSpans: 1,
  },
  {
    id: 4,
    img: 'https://bisanseir.com/media/blog/2022/04/20/95e9b246-1a9e-5981-9f55-dc93e197db01.JPEG',
    title: 'جاذبه‌های گردشگری باکو',
    href: 'blog/detail/موزه-ایاصوفیه-استانبول-Hagia-Sophia-Museum-Istanbul',
    colSpans: 1,
  },
  {
    id: 6,
    img: 'https://bisanseir.com/media/blog/2022/04/20/7769fd2b-49f5-5515-b6fd-1f275dc6afc6.JPEG',
    title: 'بهترین تفریحات در دبی',
    href: 'blog/detail/موزه-ایاصوفیه-استانبول-Hagia-Sophia-Museum-Istanbul',
    colSpans: 1,
  },
  {
    id: 7,
    img: 'https://bisanseir.com/media/blog/2022/04/20/724034fe-6f88-5403-ac3a-d95b14f81d0c.JPEG',
    title: 'غذاهای خینکالی و خاچاپوری',
    href: 'blog/detail/موزه-ایاصوفیه-استانبول-Hagia-Sophia-Museum-Istanbul',
    colSpans: 1,
  },
  {
    id: 5,
    img: 'https://bisanseir.com/media/blog/2022/04/20/7b1d4772-466b-57ce-aab3-65e4bb5ae717.JPEG',
    title: 'دیزنی‌لند - Disneyland',
    href: 'blog/detail/موزه-ایاصوفیه-استانبول-Hagia-Sophia-Museum-Istanbul',
    colSpans: 2,
  },
];

export default function HomePageBlogs() {
  const isBetweenMdAndLg = useMediaQuery(theme =>
    theme.breakpoints.between('md', 'lg')
  );

  const isMdAndBigger = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <section
      style={{
        backgroundImage:
          'url(https://bisanseir.com/static/home/svg/travel-textture/one.svg)',
        backgroundSize: 'contain',
        backgroundRepeat: 'repeat',
      }}
    >
      <HomePageContainer>
        <div
          style={
            {
              //  border: '1px solid red'
            }
          }
        >
          <div>
            <HomePageSectionTitle style={{ marginBottom: '20px' }}>
              برگزیده های وبلاگ
            </HomePageSectionTitle>
            <HomePageSectionSubtitle>
              وبلاگ بیسان سیر را نیز دنبال کنید
            </HomePageSectionSubtitle>
          </div>
          <div
            style={{
              marginTop: '32px',
              display: 'grid',
              gridTemplateColumns: isMdAndBigger
                ? isBetweenMdAndLg
                  ? 'repeat(2, minmax(0, 1fr)'
                  : 'repeat(3, minmax(0, 1fr)'
                : 'repeat(1, minmax(0, 1fr)',
              gridColumnGap: '12px',
              gridRowGap: '12px',
            }}
          >
            {items.map(item => (
              <StyledGridItem
                key={item.id}
                style={{
                  gridColumn: isMdAndBigger
                    ? `span ${item.colSpans} / span ${item.colSpans}`
                    : 'span 1 / span 1',
                  // gridColumnStart: 'span ' + item.colSpans,
                  // gridColumnEnd: 'span ' + item.colSpans,
                }}
              >
                <img
                  className="img"
                  alt="bisan"
                  src={item.img}
                  loading="lazy"
                />
                <div className="overlay">
                  <p className="title">{item.title}</p>
                </div>
                <div className="link-holder">
                  <a
                    className="link"
                    target="_blank"
                    href="blog/detail/موزه-ایاصوفیه-استانبول-Hagia-Sophia-Museum-Istanbul"
                  >
                    ادامه مطلب
                  </a>
                </div>
              </StyledGridItem>
            ))}
          </div>
        </div>
      </HomePageContainer>
    </section>
  );
}

const StyledGridItem = styled.div`
  border-radius: 24px;
  /* grid-column: span 2 / span 2; */
  height: 15rem;
  overflow: hidden;
  position: relative;

  > .img {
    object-fit: cover;
    width: 100%;
    height: 100%;
    transition-duration: 0.3s;
    transition-property: all;
    vertical-align: middle;
  }

  > .overlay {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
    display: flex;
    flex-direction: column;

    > .title {
      margin: 24px;
      margin-top: auto;
      color: #fff;
    }
  }

  > .link-holder {
    background-color: rgba(0, 0, 0, 0.5);
    position: absolute;
    top: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    height: 100%;
    width: 100%;
    transition-property: all;
    transition-duration: 300ms;

    opacity: 0;

    > .link {
      padding: 12px;
      border: 1px solid rgb(237, 224, 89);
      border-radius: 8px;
      color: rgb(237, 224, 89);
      font-size: 14px;
      line-height: 20px;
    }
  }

  &:hover {
    > .img {
      transform: matrix(1.25, 0, 0, 1.25, 0, 0);
    }

    > .link-holder {
      opacity: 1;
    }
  }
`;
