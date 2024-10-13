import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

import BisanCard from '../UI/BisanCard/BisanCard';
import { Chip, chipClasses, Stack, styled, useMediaQuery } from '@mui/material';

export default function CountryInfoCard({ country }) {
  // const isDesktopDisplay = useMediaQuery(theme => theme.breakpoints.up('lg'));
  const isDesktopDisplay = useIsDesktopDisplay();
  const isBetweenSmAndLg = useMediaQuery(theme =>
    theme.breakpoints.between('sm', 'lg')
  );

  return (
    <BisanCard sx={{ padding: isDesktopDisplay ? '24px' : '20px 16px' }}>
      <Stack
        direction={isBetweenSmAndLg ? 'row' : 'column'}
        sx={{ alignItems: !isDesktopDisplay && 'center' }}
        spacing={2}
      >
        <Stack direction="row" spacing={2}>
          <CountryImage src={country.image} />
          <CountryTitle>{country.title}</CountryTitle>
        </Stack>
        <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
          <GrayChips label={country.population} />
          <GrayChips label={country.language} />
        </Stack>
      </Stack>
    </BisanCard>
  );
}

const CountryImage = styled('img')`
  border-radius: 50%;
  height: 40px;
  width: 40px;
`;

const CountryTitle = styled('div')`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 28px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const GrayChips = styled(Chip)(() => ({
  [`&.${chipClasses.root}`]: {
    color: '#fff',
    fontSize: '12px',
    background: 'rgb(107, 114, 128)',
    height: '24px',

    [`>.${chipClasses.label}`]: {
      overflow: 'visible',
    },
  },
}));
