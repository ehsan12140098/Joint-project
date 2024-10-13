import { useMemo, useState } from 'react';

import { Grid } from '@mui/material';

import { CardIcon } from 'Assets/Svgs/CardIcon';
import { TableIcon } from 'Assets/Svgs/TableIcon';
import TableDisplayMode from 'Components/shared/TableDisplayMode/TableDisplayMode';
import HotelsMainTableItemTableMode from './HotelsMainTableItem/HotelsMainTableItemTableMode';
import PaginationComponent from 'Components/shared/PaginationComponent/PaginationComponent';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

export default function HotelsMainTable({
  hotels,
  itemsPerPage,
  itemsCount,
  currentPage,
  handlePageChange,
}) {
  const isSmOrBigger = useIsDesktopDisplay('sm');
  const [selectedDisplayMode, setSelectedDisplayMode] = useState('کارت');

  const DisplayModeItems = useMemo(
    () =>
      [
        {
          text: 'کارت',
          icon: <CardIcon />,
          visible: true,
        },
        {
          text: 'جدول',
          icon: <TableIcon />,
          visible: true,
        },
      ].filter(item => item.visible),

    []
  );

  function handleChangeDisplayMode(e) {
    setSelectedDisplayMode(e);
  }

  const isCard = selectedDisplayMode === 'کارت';
  return (
    <div style={{ paddingTop: '60px' }}>
      <TableDisplayMode
        title="هتل های ترکیه"
        items={DisplayModeItems}
        selected={selectedDisplayMode}
        onChange={handleChangeDisplayMode}
      />

      <Grid container spacing={2} sx={{ marginBottom: '20px' }}>
        {hotels.map(hotel => (
          <Grid
            item
            xs={12}
            sm={isCard ? 6 : 12}
            md={isCard ? 4 : 12}
            key={hotel.name}
          >
            <HotelsMainTableItemTableMode
              hotel={hotel}
              isCard={isSmOrBigger ? isCard : true}
            />
          </Grid>
        ))}
      </Grid>
      <PaginationComponent
        count={Math.ceil(itemsCount / itemsPerPage)}
        currentPage={currentPage}
        onChange={val => handlePageChange(val)}
      />
    </div>
  );
}
