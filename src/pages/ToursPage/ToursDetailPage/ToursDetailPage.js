import { useMemo } from 'react';
import { useLocation, useParams } from 'react-router-dom';

import BreadCrumbs from 'Components/shared/BreadCrumbs/BreadCrumbs';
import ToursDetailSummary from 'Components/Tours/ToursDetailPage/ToursDetailSummary/ToursDetailSummary';
import ToursDetailMainContent from 'Components/Tours/ToursDetailPage/ToursDetailMainContent/ToursDetailMainContent';
import { Grid } from '@mui/material';

import { tourDetail } from 'Constants/tourDetailDummyData';
import ToursDetailSidebar from 'Components/Tours/ToursDetailPage/ToursDetailSidebar/ToursDetailSidebar';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

const links = [
  { href: '/', text: 'بیسان' },
  { href: '/TurkeyTable', text: 'تور' },
  { href: '/tours', text: 'تور ترکیه' },
];

export default function ToursDetailPage() {
  // const { pathname } = useLocation();
  const { hash } = useLocation();
  const isSmOrBigger = useIsDesktopDisplay('sm');

  let element = null;
  if (hash) element = document.querySelector(hash);
  if (element) element.scrollIntoView({ behavior: 'smooth' });
  const { tourName } = useParams();
  // const params = useParams();
  // console.log('🚀 ~ Detail ~ params:', params);

  const breadCrumbs = useMemo(() => {
    // const tourName = pathname.split('/').at(-1);
    // const tourName = params.tourName;
    return [...links, { href: '#', text: tourName }];
  }, [tourName]);

  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      <div
        style={{
          display: 'flex',
          justifyContent: isSmOrBigger ? 'flex-start' : 'center',
        }}
      >
        <BreadCrumbs links={breadCrumbs} />
      </div>

      <ToursDetailSummary
        countryImage={tourDetail.countryImage}
        countryName={tourDetail.countryName}
        tourName={tourDetail.tourName}
        tourSummary={tourDetail.tourSummary}
        price={tourDetail.lowestPrice}
      />
      <Grid container spacing={2}>
        <Grid item xs={12} lg={9}>
          <ToursDetailMainContent
            // hotels={tourDetail.hotels}
            // tourInformation={tourDetail.tourInformation}
            tourDetail={tourDetail}
          />
        </Grid>
        <Grid item xs={12} lg={3}>
          <ToursDetailSidebar />
        </Grid>
      </Grid>

      {/* <BisanCard>
        <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
          <CountryImage
            src={require('Assets/' + tourDetail.countryImage)}
            alt={tourDetail.countryName}
          />
          <div
            style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
          >
            <TourTile>{tourDetail.tourName}</TourTile>
            <div style={{ display: 'flex', gap: '1rem' }}>
              <TourSummaryLabel>
                <TourSummaryLabelSvgHolder>
                  <Location />
                </TourSummaryLabelSvgHolder>
                {tourDetail.tourSummary.destination}
              </TourSummaryLabel>
              <TourSummaryLabel>
                <TourSummaryLabelSvgHolder>
                  <Clock />
                </TourSummaryLabelSvgHolder>
                {tourDetail.tourSummary.duration}
              </TourSummaryLabel>
              <TourSummaryLabel>
                <TourSummaryLabelSvgHolder>
                  <EachTourDatesCalendar />
                </TourSummaryLabelSvgHolder>
                {tourDetail.tourSummary.startDate}
              </TourSummaryLabel>
              {tourDetail.tourSummary.hotel && (
                <TourSummaryLabel>
                  <TourSummaryLabelSvgHolder>
                    <EachTourHotelCalendar />
                  </TourSummaryLabelSvgHolder>
                  {tourDetail.tourSummary.hotel}
                </TourSummaryLabel>
              )}
            </div>
          </div>
        </div>
      </BisanCard> */}
    </div>
  );
}
