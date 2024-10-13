import { ChevronLeft } from 'Assets/Svgs/ChevronLeft';
import { ChevronRight } from 'Assets/Svgs/ChevronRight';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const links = [
  {
    title: 'جزایر پرنس استانبول',
    isRtl: true,
  },
  { title: 'موزه ایاصوفیه استانبول Hagia Sophia Museum Istanbul' },
];

export default function BlogsDetailsMainNavigation() {
  const isSmOrBigger = useIsDesktopDisplay('sm');
  return (
    <div
      style={{
        marginTop: '24px',
        paddingTop: '24px',
        borderTop: '1px solid rgb(229, 231, 235)',
        display: 'flex',
        gap: '16px',
        flexDirection: isSmOrBigger ? 'row' : 'column-reverse',
      }}
    >
      {links.map(link => (
        <NavigationLink key={link.title} {...link} />
      ))}
      {/* <NavigationLink title="جزایر پرنس استانبول" /> */}
    </div>
  );
}

function NavigationLink({ isRtl, title }) {
  return (
    <StyledLink to={`/blog/detail/${title.split(' ').join('-')}`}>
      <div
        className="holder"
        style={{ flexDirection: isRtl ? 'row' : 'row-reverse' }}
      >
        <div>{isRtl ? <ChevronRight /> : <ChevronLeft />}</div>
        <div
          style={{
            display: 'flex',
            flexDirection: 'column',
            width: 'max-content',
            // border: '1px solid red',
            alignItems: isRtl ? 'flex-end' : 'flex-start',
          }}
        >
          <div
            style={{ fontSize: '14px', fontWeight: '700', lineHeight: '28px' }}
          >
            {title}
          </div>
          <div
            style={{
              color: 'rgb(75, 85, 99)',
              lineHeight: '20px',
              fontSize: '14px',
            }}
          >
            {isRtl ? 'مطلب بعدی' : 'مطلب قبلی'}
          </div>
        </div>
      </div>
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  flex-grow: 1;
  width: 100%;
  > .holder {
    display: flex;
    align-items: center;
    gap: 50px;
    padding: 8px;
  }
  color: #000;

  &:hover {
    > .holder {
      background-color: rgb(249, 250, 251);
    }
  }
`;
