// import styled from 'styled-components';
import Banner from 'Assets/images/HeroBanner.jpg';
import BackgroundSvg from 'Assets/Svgs/Background.svg';
import Navbar from 'Components/shared/Navbar/Navbar';
import HomePageContainer from './HomePageContainer';
import bisanheader from 'Assets/gifs/bisanheader.gif';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import styled from 'styled-components';

export default function HomePageHero() {
  // const theme = useTheme();
  // const isDesktop = useMediaQuery(theme.breakpoints.up('lg'));
  const isDesktop = useIsDesktopDisplay();

  return (
    <StyledHeader>
      <HomePageContainer>
        <StyledBackground></StyledBackground>
        {isDesktop ? (
          <Navbar />
        ) : (
          <div style={{ position: 'relative' }}>
            <img
              className="logo"
              style={{ height: '80px' }}
              src={bisanheader}
              alt="bisan gif"
            />
          </div>
        )}
      </HomePageContainer>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  background: url(${Banner}) center center / cover;
  background-repeat: no-repeat;
  position: relative;

  height: 10rem;
  /* border: 1px solid red; */
  padding-top: 20px;

  @media screen and (min-width: 640px) {
    height: 75vh;
  }
`;

const StyledBackground = styled.div`
  width: 100%;
  background: url(${BackgroundSvg}) center center / cover;
  background-color: #f0f0f0;
  height: 20rem;
  position: absolute;
  top: 0;
  left: 0;
  display: none;

  &::before {
    content: ' ';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(
      to top,
      rgb(255, 255, 255),
      rgba(0, 0, 0, 0)
    );
    /* border: 10px solid red; */
  }

  @media screen and (max-width: 640px) {
    display: block;
  }
`;

// const StyledBackground = MUIStyled('div')(({ theme }) => ({
//   width: '100%',
//   background: `url(${BackgroundSvg}) center center / cover`,
//   backgroundColor: '#f0f0f0',
//   height: '20rem',
//   position: 'absolute',
//   top: '0',
//   left: '0',
//   display: 'none',
//   [theme.breakpoints.down('sm')]: {
//     display: 'block',
//   },
//   '&::before': {
//     content: '" "',
//     border: '10px solid red',
//     position: 'absolute',

//     backgroundImage:
//       'linear-gradient(to top, rgb(255, 255, 255), rgba(0, 0, 0, 0))',
//     width: '100%',
//     height: '100%',
//     left: '0',
//     bottom: '0',
//   },
// }));
