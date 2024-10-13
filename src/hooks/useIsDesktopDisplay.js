import { useMediaQuery } from '@mui/material';

export default function useIsDesktopDisplay(breakpoint = 'lg') {
  const isDesktopDisplay = useMediaQuery(theme =>
    theme.breakpoints.up(breakpoint)
  );

  return isDesktopDisplay;
}
