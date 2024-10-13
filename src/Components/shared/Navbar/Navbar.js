import usePersianNumber from 'hooks/usePersianNumber';

import BisanCard from '../UI/BisanCard/BisanCard';
import bisanheader from 'Assets/gifs/bisanheader.gif';
import navbarItems from 'Constants/navbarItems';
import { Link } from 'react-router-dom';
import NavbarLinksHolder from './NavbarLinksHolder';
import { PhoneIcon } from 'Assets/Svgs/PhoneIcon';
import styled from 'styled-components';

export default function Navbar() {
  const convertToPersian = usePersianNumber();

  return (
    <StyledHeader>
      <BisanCard
        sx={{
          padding: '12px 20px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-between',
          overflow: 'none',
          borderRadius: '16px',

          direction: 'rtl',
        }}
      >
        <Link
          to="tel:+982143000030"
          style={{
            // border: '1px solid red',
            height: '40px',
            display: 'flex',
            alignItems: 'center',
            backgroundColor: 'rgb(253, 224, 71)',
            color: 'rgb(107, 114, 128)',
            padding: '0 10px',
            borderRadius: '8px',
            fontSize: '14px',
            gap: '3px',
          }}
        >
          {convertToPersian('021-43000030')}
          <PhoneIcon size="19" fill="rgb(107, 114, 128)" />
        </Link>
        <div
          style={{
            display: 'flex',
            gap: '20px',
            alignItems: 'center',
            // border: '1px solid black',
            width: '100%',
            direction: 'rtl',
          }}
        >
          <img
            className="logo"
            style={{ height: '45px' }}
            src={bisanheader}
            alt="bisan gif"
          />
          <NavbarLinksHolder items={navbarItems}></NavbarLinksHolder>
        </div>
      </BisanCard>
    </StyledHeader>
  );
}

const StyledHeader = styled.header`
  margin-bottom: 40px;
  position: sticky;
  top: 0;
  z-index: 20;

  .logo {
    display: none;
  }

  @media screen and (min-width: 1440px) {
    .logo {
      display: block;
    }
  }
`;
