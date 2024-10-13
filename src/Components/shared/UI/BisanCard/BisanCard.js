import { Card, cardClasses, styled, useMediaQuery } from '@mui/material';

export default function BisanCard({ children, sx = {}, ...props }) {
  const isDesktopDisplay = useMediaQuery(theme => theme.breakpoints.up('lg'));
  return (
    <CardwithoutOverflow
      sx={{
        borderRadius: '24px',
        padding: isDesktopDisplay ? '24px' : '20px 16px',
        boxShadow:
          '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1);',
        ...sx,
      }}
      {...props}
    >
      {children}
    </CardwithoutOverflow>
  );
}

const CardwithoutOverflow = styled(Card)(({ theme }) => ({
  [`&.${cardClasses.root}`]: {
    overflow: 'visible',
  },
}));
