import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const navItems = [
  { href: '#description', text: 'توضیحات' },
  { href: '#facilities', text: 'امکانات' },
  { href: '#flags', text: 'زبان ها' },
];

export default function HotelDetailMainNav() {
  const isLgOrBigger = useIsDesktopDisplay();
  return (
    <div
      style={{
        display: 'flex',
        gap: '10px',
        padding: '20px 0',
        // marginTop: '20px',
        position: 'sticky',
        top: isLgOrBigger ? '70px' : '0',
        backgroundColor: 'rgb(255, 255, 255)',
        // border: '1px solid blue',
      }}
    >
      {navItems.map(({ href, text }) => (
        <HotelDetailMainNavItem key={href} to={href}>
          {text}
        </HotelDetailMainNavItem>
      ))}
    </div>
  );
}

const HotelDetailMainNavItem = styled(Link)`
  background-color: rgb(226, 232, 240);
  padding: 8px 24px;
  border-radius: 24px;
  color: rgb(105, 122, 128);
  font-weight: 700;
  font-size: 14px;
  line-height: 24px;
  transition: 0.1s;

  &:focus {
    background-color: rgb(226, 232, 240);
  }

  &:hover {
    background-color: rgb(248, 250, 252);
  }
`;
