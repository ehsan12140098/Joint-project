import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';
import ToursSummaryItemDesktop from './TourSummeryItemDesktop';
import ToursSummaryItemMobile from './TourSummeryItemMobile';

export default function ToursSummaryItem({ tour }) {
  const isDesktop = useIsDesktopDisplay('md');
  return (
    <>
      {isDesktop ? (
        <ToursSummaryItemDesktop tour={tour} />
      ) : (
        <ToursSummaryItemMobile tour={tour} />
      )}
    </>
  );
}
