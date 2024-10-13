import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import { useMemo } from 'react';
import { styled as MUIStyled } from '@mui/material';

const items = [
  {
    id: '1',
    name: 'rights',
    href: '#',
    image: require('Assets/images/Footer/rights.png'),
  },
  {
    id: '2',
    name: 'domain',
    href: '#',
    image: require('Assets/images/Footer/domain.png'),
  },
  {
    id: '3',
    name: 'enamad',
    href: 'https://trustseal.enamad.ir/?id=129452&Code=anLW4XzWzqQVJxL4UlgdXko9shNNM6qf',
    image: require('Assets/images/Footer/etemad.png'),
  },
  // { id: '4', name: '', href: '#', image: '', isHidden: true },
  // { id: '5', name: '', href: '#', image: '', isHidden: true },
  {
    id: '6',
    name: 'union',
    href: '#',
    image: require('Assets/images/Footer/union.png'),
  },
  {
    id: '7',
    name: 'media',
    href: '#',
    image: require('Assets/images/Footer/media.png'),
  },
  {
    id: '8',
    name: 'sazman',
    href: '#',
    image: require('Assets/images/Footer/sazman.png'),
  },
];

export default function FooterContentLicenses() {
  const isDesktop = useIsDesktopDisplay();

  const licenses = useMemo(
    () => items.filter(item => isDesktop || !item.isHidden),
    [isDesktop]
  );

  return (
    <StyledHolder
      style={
        {
          // width: '100%',
          // display: 'grid',
          // gridTemplateColumns: isDesktop
          //   ? 'repeat(8, minmax(0, 1fr)'
          //   : 'repeat(6, minmax(0, 1fr))',
          // gap: '28px',
        }
      }
    >
      {licenses.map(({ id, href, name, image, isHidden }, i) => (
        <div
          key={id}
          style={{
            // border: '1px solid red',
            gridArea: name,
            // width: '100%',
            display: 'flex',
            justifyContent: !isDesktop
              ? 'center'
              : i > 3
              ? 'flex-end'
              : 'flex-start',
            aspectRatio: '1 / 1',
          }}
        >
          <a
            href={href}
            style={{
              backgroundColor: '#fff',
              width: '90px',
              height: '90px',
              // aspectRatio: '1 / 1',
              display: isHidden ? 'none' : 'flex',
              borderRadius: '24px',
              padding: '8px',
              alignItems: 'center',
              justifyContent: 'center',
            }}
          >
            <img
              src={image}
              alt={name}
              style={{
                // border: '1px solid red',
                width: '100%',
                objectFit: 'contain',
              }}
            />
          </a>
        </div>
        // <img src={item.image} alt={item.name} key={item.id} />
      ))}
    </StyledHolder>
  );
}

const StyledHolder = MUIStyled('div')(({ theme }) => ({
  width: '100%',
  display: 'grid',
  gridTemplateAreas: '"rights domain enamad" "union media sazman"',
  gridTemplateColumns: 'repeat(3, 1fr)',
  gap: '10px',

  [theme.breakpoints.up('sm')]: {
    gridTemplateColumns: 'repeat(6, 1fr)',
    gridTemplateAreas: '"rights domain enamad union media sazman"',
  },

  [theme.breakpoints.up('md')]: {
    gap: '28px',
  },

  [theme.breakpoints.up('lg')]: {
    gridTemplateAreas: '"rights domain enamad . . union media sazman"',
    gridTemplateColumns: 'repeat(8, 1fr)',
  },
}));
