import { Button, styled as MUIStyled } from '@mui/material';
import { EmailFooter, LocationFooter, PhoneFooter } from 'Assets/Svgs/Icons';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import styled from 'styled-components';

export default function FooterContentContactForm() {
  const isDesktop = useIsDesktopDisplay();

  return (
    <StyledHolder>
      <div
        style={{
          display: 'flex',
          flexDirection: isDesktop ? 'column' : 'column-reverse',
          gap: isDesktop ? '5px' : '20px',
        }}
      >
        <div
          style={{
            display: 'flex',
            justifyContent: 'space-between',
            flexDirection: isDesktop ? 'row' : 'row-reverse',
          }}
        >
          <StyledLinkHolder>
            <EmailFooter />
            <StyledAnchor href="mailto:info@bisansair.com">
              info@bisansair.com
            </StyledAnchor>
          </StyledLinkHolder>
          <StyledLinkHolder>
            <PhoneFooter />
            <StyledAnchor href="tel:+982143000030">۰۲۱-۴۳۰۰۰۰۳۰</StyledAnchor>
          </StyledLinkHolder>
        </div>
        <StyledLinkHolder style={{ marginTop: '16px', alignItems: 'start' }}>
          <span style={{ flexShrink: '0' }}>
            <LocationFooter />
          </span>
          <StyledAddressSpan>
            خيابان بهشتى، خيابان صابونچى، پلاك ٥٨، طبقه ٣، واحد ٥
          </StyledAddressSpan>
        </StyledLinkHolder>
      </div>
      <StyledFormHolder>
        <StyledNotifP>
          با ثبت شماره موبایل خود از تورهای ویژه مورد علاقه خود با خبر شوید
        </StyledNotifP>
        <div
          style={{
            border: '1px solid white',
            borderRadius: '24px',
            display: 'flex',
          }}
        >
          <StyledInput placeholder="شماره موبایلتان را وارد کنید" />
          <Button
            style={{
              margin: '4px',
              flexShrink: '0',
              borderRadius: '24px',
              backgroundColor: 'rgb(237, 224, 89)',
              padding: '8px 16px',
              color: 'rgb(90, 98, 58)',
              cursor: 'pointer',
              fontFamily: 'inherit',
              fontSize: '16px',
            }}
          >
            عضویت
          </Button>
        </div>
      </StyledFormHolder>
    </StyledHolder>
  );
}

const StyledLinkHolder = styled.div`
  display: flex;
  gap: 0.5rem;
  align-items: center;
`;

const StyledAnchor = styled.a`
  color: #fff;
  font-size: 16px;
`;

const StyledInput = styled.input`
  border: none;
  outline: none;
  width: 100%;
  padding: 0 16px;
  background-color: transparent;
  font-family: inherit;
  font-size: 16px;

  &::placeholder {
    color: #a1a6b6;
  }
`;

const StyledAddressSpan = MUIStyled('span')(({ theme }) => ({
  fontSize: '14px',
  lineHeight: '20px',
  [theme.breakpoints.up('md')]: {
    fontSize: '16px',
  },
}));

const StyledNotifP = MUIStyled('p')(({ theme }) => ({
  fontSize: '12px',
  lineHeight: '20px',
  marginTop: '10px',
  [theme.breakpoints.up('xl')]: {
    fontSize: '14px',
  },
}));

const StyledHolder = MUIStyled('div')(({ theme }) => ({
  display: 'flex',
  flexDirection: 'column',

  [theme.breakpoints.between('lg', 'md')]: {
    width: '60%',
  },
}));

const StyledFormHolder = MUIStyled('div')(({ theme }) => ({
  display: 'none',
  marginTop: '20px',

  [theme.breakpoints.up('sm')]: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
  },
  [theme.breakpoints.up('lg')]: {
    marginTop: '5px',
  },
}));
