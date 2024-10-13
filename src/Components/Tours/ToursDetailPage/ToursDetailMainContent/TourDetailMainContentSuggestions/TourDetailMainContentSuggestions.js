import TourGridItem from 'Components/Tours/ToursTable/ToursTableItems/ToursGridItem';
import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import { Grid } from '@mui/material';

export default function TourDetailMainContentSuggestions({ tours }) {
  return (
    <Grid id="suggested" style={{ marginTop: '32px' }}>
      <SectionTitle style={{ marginBottom: '20px', textAlign: 'center' }}>
        تورهای پیشنهادی
      </SectionTitle>

      <Grid container spacing={2}>
        {tours.map(tour => (
          <Grid item xs={12} sm={4} key={tour.id}>
            <TourGridItem tour={tour} />
          </Grid>
        ))}
      </Grid>
    </Grid>
  );
}
