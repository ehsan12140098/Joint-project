import styled from 'styled-components';

import Bullet from 'Assets/images/Footer/bullet.png';
import { Link } from 'react-router-dom';

const pages = [
  { id: '1', text: 'تور ویژه', href: '/تور_ویژه/' },
  { id: '2', text: 'تور اروپا', href: '/tours/اروپا' },
  { id: '3', text: 'درباره ما', href: '/about-us' },
  { id: '4', text: 'تماس با ما', href: '/contactUs' },
  { id: '5', text: 'سوالات متداول', href: '/FAQ' },
];

const tours = [
  { id: '6', text: 'تور دبی', href: '/tours/دبی' },
  { id: '7', text: 'تور آنتالیا', href: '/tours/آنتالیا' },
  { id: '8', text: 'تور ایروان', href: '/tours/ایروان' },
  { id: '9', text: 'تور تفلیس', href: '/tours/تفلیس' },
  { id: '10', text: 'تور استانبول', href: '/tours/استانبول' },
];

export default function FooterContentNavigation({ column = 'both' }) {
  const isFirstUlVisible = column === 'both' || column === 'first';
  const isSecondUlVisible = column === 'both' || column === 'second';
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'space-evenly',
        flexGrow: '2',
        // border: '1px solid red',
      }}
    >
      {isFirstUlVisible && (
        <StyledUl>
          {pages.map(({ id, text, href }) => (
            <StyledLi key={id}>
              <Link to={href}>{text}</Link>
            </StyledLi>
          ))}
        </StyledUl>
      )}
      {isSecondUlVisible && (
        <StyledUl>
          {tours.map(({ id, text, href }) => (
            <StyledLi key={id}>
              <Link to={href}>{text}</Link>
            </StyledLi>
          ))}
        </StyledUl>
      )}
    </div>
  );
}

const StyledUl = styled.ul`
  list-style-position: inside;
  list-style-image: url(${Bullet});
`;

const StyledLi = styled.li`
  line-height: 40px;

  width: max-content;
  > a {
    color: #fff;
    transition: 100ms;

    &:hover {
      color: rgb(237, 224, 89);
    }
  }
`;
