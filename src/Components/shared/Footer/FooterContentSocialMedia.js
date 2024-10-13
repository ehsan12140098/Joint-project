import sloganText from 'Assets/images/Footer/slogan-text.svg';
import { FacebookIcon, InstagramIcon, TelegramIcon } from 'Assets/Svgs/Icons';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import styled from 'styled-components';

const items = [
  {
    href: 'https://www.facebook.com/bisanseir',
    icon: <FacebookIcon />,
    text: 'فیسبوک',
  },
  { href: 'https://t.me/bisanseirr', icon: <TelegramIcon />, text: 'تلگرام' },
  {
    href: 'https://instagram.com/bisanseir?igshid=YmMyMTA2M2Y',
    icon: <InstagramIcon />,
    text: 'اینستاگرام',
  },
];

export default function FooterContentSocialMedia() {
  const isDesktop = useIsDesktopDisplay();
  return (
    <div
      style={{
        // border: '3px solid white',
        position: 'relative',
        width: '100%',
        height: '100%',
      }}
    >
      <div
        style={{
          // border: '3px solid blue',
          position: isDesktop ? 'absolute' : 'relative',
          bottom: isDesktop ? '0' : 'auto',
          top: isDesktop ? 'auto' : '0',
          display: 'flex',
          width: '100%',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        {isDesktop && (
          <>
            <img
              alt="bisan"
              src={require('Assets/gifs/bisangif.gif')}
              style={{ width: '180px', transform: 'translateX(15px)' }}
            />
            <img
              alt="bisan"
              src={require('Assets/images/Footer/bisantext.png')}
            />
          </>
        )}
        {/* <img
          alt="bisan"
          src={require('Assets/gifs/bisangif.gif')}
          style={{ width: '180px', transform: 'translateX(15px)' }}
        />
        <img alt="bisan" src={require('Assets/images/Footer/bisantext.png')} /> */}
        <img alt="bisan" src={sloganText} style={{ marginTop: '20px' }} />
        <div
          style={{
            marginTop: '28px',
            display: 'flex',
            justifyContent: 'center',
            gap: '28px',
          }}
        >
          {items.map(({ href, icon, text }) => (
            <StyledSocialMediaLink key={text} href={href}>
              {icon}
              {text}
            </StyledSocialMediaLink>
          ))}
        </div>
      </div>
    </div>
  );
}

const StyledSocialMediaLink = styled.a`
  color: #fff;
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 12px;
  transition: 100ms;

  &:hover {
    color: rgb(237, 224, 89);
  }
`;
