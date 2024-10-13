import styled from 'styled-components';
import usePersianNumber from 'hooks/usePersianNumber';
import usePriceCommaSeparator from 'hooks/usePriceCommaSeparator';

import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';

import { Location } from 'Assets/Svgs/Location';
import { Clock } from 'Assets/Svgs/Clock';
import { EachTourDatesCalendar } from 'Assets/Svgs/EachTourDatesCalendar';
import { EachTourHotelCalendar } from 'Assets/Svgs/EachTourHotelCalendar';
import { MoneyIcon } from 'Assets/Svgs/MoneyIcon';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

export default function ToursDetailSummary({
  countryImage,
  countryName,
  tourName,
  tourSummary,
  price,
}) {
  // console.log('🚀 ~ tourSummary:', tourSummary
  const convertToPersian = usePersianNumber();
  const isSmOrBigger = useIsDesktopDisplay('sm');

  return (
    <div>
      <BisanCard
        sx={{
          // borderRadius: '24px 0 0 24px',
          flexGrow: '1',
          // border: '1px solid red',
          padding: '0',
          marginBottom: '20px',
        }}
      >
        <div style={{ display: 'flex' }}>
          <div
            style={{
              flexGrow: '1',
              display: 'flex',
              gap: '20px',
              alignItems: 'center',
              // border: '1px solid blue',
              padding: '20px',
            }}
          >
            <CountryImage
              src={require('Assets/' + countryImage)}
              alt={countryName}
            />
            <div
              style={{ display: 'flex', flexDirection: 'column', gap: '1rem' }}
            >
              <TourTile>{tourName}</TourTile>
              <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
                {tourSummary.map(({ text, key }) => {
                  // console.log('🚀 ~ {tourSummary.map ~ key:', key);
                  let icon;

                  switch (key) {
                    case 'destination':
                      icon = <Location />;
                      break;
                    case 'duration':
                      icon = <Clock />;
                      break;
                    case 'startDate':
                      icon = <EachTourDatesCalendar />;
                      break;
                    case 'hotel':
                      icon = <EachTourHotelCalendar />;
                      break;
                    default:
                      icon = null;
                      break;
                  }

                  return (
                    <TourSummaryLabel key={key}>
                      <TourSummaryLabelSvgHolder>
                        {icon}
                      </TourSummaryLabelSvgHolder>
                      {convertToPersian(text)}
                    </TourSummaryLabel>
                  );
                })}
                {/* <TourSummaryLabel>
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
        )} */}
              </div>
            </div>
          </div>
          {isSmOrBigger && (
            <TourDetailsSummaryPrice price={price}></TourDetailsSummaryPrice>
          )}
        </div>
      </BisanCard>
      {!isSmOrBigger && (
        <TourDetailsSummaryPrice
          price={price}
          isRounded
        ></TourDetailsSummaryPrice>
      )}
    </div>
  );
}

const CountryImage = styled.img`
  width: 80px;
  height: 80px;
  border-radius: 50%;
`;

const TourTile = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

// const TourSummaryLabel = styled.div`
//   color: #4d4d4d;
//   text-align: right;
//   font-family: IRANSans;
//   font-size: 12px;
//   font-style: normal;
//   font-weight: 400;
//   line-height: normal;
//   @media (max-width: 1024px) {
//     font-size: 10px;
//   }
// `;

const TourSummaryLabel = styled.div`
  width: max-content;
  display: flex;
  padding: 4px 8px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 5px;
  border: 1px solid #e6e6e6;
  color: #4d4d4d;
  text-align: right;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 1024px) {
    font-size: 10px;
  }
`;

const TourSummaryLabelSvgHolder = styled.div`
  display: flex;
  padding: 4px;
  justify-content: center;
  align-items: center;
  border-radius: 50px;
  background: #e6e6e6;
`;

function TourDetailsSummaryPrice({ price, isRounded }) {
  const addCommaSeparator = usePriceCommaSeparator();
  return (
    <div
      style={{
        width: isRounded ? '100%' : '25%',
        backgroundColor: 'rgb(229, 231, 235)',
        borderRadius: isRounded ? '24px' : '24px 0 0 24px',
        padding: '20px',
        fontSize: '12px',
        color: '#000',
        fontWeight: '400',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '1rem',
        }}
      >
        <div>شروع قیمت از</div>
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            gap: '5px',
          }}
        >
          <MoneyIcon />
          <span
            style={{
              fontSize: '24px',
              fontWeight: '700',
            }}
          >
            {addCommaSeparator(price)}
          </span>
          <span>تومان</span>
        </div>
      </div>
    </div>
  );
}
