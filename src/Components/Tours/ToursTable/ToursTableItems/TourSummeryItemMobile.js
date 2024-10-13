import { styled } from '@mui/material';
import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
import usePriceCommaSeparator from 'hooks/usePriceCommaSeparator';

export default function ToursSummaryItemMobile({ tour }) {
  const convertToPrice = usePriceCommaSeparator();
  return (
    <BisanCard sx={{ padding: '0' }}>
      <StyledHolder>
        <StyledTopHolder>
          <StyledNameHolder>{tour.name}</StyledNameHolder>
          <StyledCityAndDateHolder>
            <CityAndDateItem
              title={tour.first_city.name}
              value={tour.source_city.name}
            />
            <CityAndDateItem
              title="تاریخ اعتبار"
              value={tour.dates_of_departure}
            />
          </StyledCityAndDateHolder>
        </StyledTopHolder>
        <StyledBottomHolder>
          <StyledDurationHolder>
            <div
              style={{
                padding: '4px 12px',
                backgroundColor: 'rgb(229, 231, 235)',
                width: 'max-content',
                borderRadius: '24px',
                fontSize: '12px',
              }}
            >
              {tour.accommodation}
            </div>
          </StyledDurationHolder>
          <StyledPiceHolder>
            <div
              style={{
                backgroundColor: 'rgb(237, 224, 89)',
                padding: '12px 0',
                height: '100%',
              }}
            >
              <div
                style={{
                  height: '100%',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '8px',
                    color: 'rgb(90, 98, 58)',
                  }}
                >
                  <span
                    style={{
                      fontSize: '18px',
                      fontWeight: '700',
                    }}
                  >
                    {convertToPrice(tour.TourPackages[0].double_price)}
                  </span>
                  <span
                    style={{
                      fontSize: '14px',
                      fontWeight: '300',
                      lineHeight: '20px',
                      paddingBottom: '10px',
                    }}
                  >
                    تومان
                  </span>
                </div>
              </div>
            </div>
          </StyledPiceHolder>
        </StyledBottomHolder>
      </StyledHolder>
    </BisanCard>
  );
}

const CityAndDateItem = ({ title, value }) => {
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div style={{ fontSize: '14px' }}>{title}</div>
      <div style={{ fontSize: '12px' }}>{value}</div>
    </div>
  );
};

const StyledHolder = styled('div')(() => ({
  lineHeight: '24px',
  borderRadius: '24px',
  overflow: 'hidden',
}));

const StyledTopHolder = styled('div')(() => ({
  display: 'flex',
  borderBottom: '2px solid rgb(229, 231, 235)',
}));

const StyledNameHolder = styled('div')(() => ({
  width: '50%',
  display: 'flex',
  padding: '0 12px',
  alignItems: 'center',
}));

const StyledCityAndDateHolder = styled('div')(() => ({
  width: '50%',
  padding: '16px 12px',
}));

const StyledBottomHolder = styled('div')(() => ({
  display: 'flex',
}));

const StyledDurationHolder = styled('div')(() => ({
  // border: '1px solid red',
  padding: '16px 0',
  width: '50%',
  display: 'flex',
  justifyContent: 'center',
}));

const StyledPiceHolder = styled('div')(() => ({
  width: '50%',
}));
