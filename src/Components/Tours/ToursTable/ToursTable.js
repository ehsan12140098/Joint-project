import { useEffect, useMemo, useState } from 'react';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

import { Grid } from '@mui/material';

import ToursGridItem from './ToursTableItems/ToursGridItem';
import ToursSummaryItem from './ToursTableItems/ToursSummaryItem';
import ToursCardItem from './ToursTableItems/ToursCardItem';
import PaginationComponent from '../../shared/PaginationComponent/PaginationComponent';
import TableDisplayMode from '../../shared/TableDisplayMode/TableDisplayMode';

import { SummaryIcon } from 'Assets/Svgs/SummaryIcon';
import { TableIcon } from 'Assets/Svgs/TableIcon';
import { CardIcon } from 'Assets/Svgs/CardIcon';

export default function ToursTable({
  tours,
  selectedDisplayMode,
  handleChangeDisplayMode,
}) {
  const isDesktopDisplay = useIsDesktopDisplay();
  const [currentPage, setCurrentPage] = useState(1);

  const itemsPerPage = 9;

  const slicedTours = useMemo(() => {
    const startIndex = (currentPage - 1) * itemsPerPage;
    const endIndex = currentPage * itemsPerPage;

    return tours.slice(startIndex, endIndex);
  }, [tours, currentPage]);

  function handleDisplayModeChange(e) {
    handleChangeDisplayMode(e);
  }

  useEffect(() => {
    if (selectedDisplayMode === 'کارت' && !isDesktopDisplay)
      handleChangeDisplayMode('جدول');
  }, [selectedDisplayMode, handleChangeDisplayMode, isDesktopDisplay]);

  const DisplayModeItems = useMemo(
    () =>
      [
        {
          text: 'خلاصه',
          icon: <SummaryIcon />,
          visible: true,
        },
        {
          text: 'جدول',
          icon: <CardIcon />,
          visible: true,
        },
        {
          text: 'کارت',
          icon: <TableIcon />,
          visible: isDesktopDisplay,
        },
      ].filter(item => item.visible),

    [isDesktopDisplay]
  );

  return (
    <div style={{ padding: '0 16px', direction: 'rtl' }}>
      <TableDisplayMode
        selected={selectedDisplayMode}
        onChange={handleDisplayModeChange}
        title="تورهای اروپایی"
        items={DisplayModeItems}
      />
      <Grid container spacing={2} style={{ marginBottom: '20px' }}>
        {slicedTours.map(tour => {
          if (selectedDisplayMode === 'خلاصه') {
            return (
              <Grid item xs={12} sm={12} key={tour.id}>
                <ToursSummaryItem tour={tour} />
              </Grid>
            );
          } else if (selectedDisplayMode === 'جدول') {
            return (
              <Grid item xs={12} sm={6} md={4} key={tour.id}>
                <ToursGridItem tour={tour} />
              </Grid>
            );
          } else if (selectedDisplayMode === 'کارت') {
            return (
              <Grid item xs={12} sm={12} key={tour.id}>
                <ToursCardItem tour={tour} />
              </Grid>
            );
          } else {
            return null;
          }
        })}
      </Grid>
      <PaginationComponent
        count={Math.ceil(tours.length / itemsPerPage)}
        currentPage={currentPage}
        onChange={val => setCurrentPage(val)}
        // handleNextClick={setCurrentPage(currentPage + 1)}
      />
    </div>
  );
}
