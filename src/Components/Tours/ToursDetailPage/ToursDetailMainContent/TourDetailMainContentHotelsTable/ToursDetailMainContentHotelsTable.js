import React from 'react';
import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';

import styled from 'styled-components';
import { Rating, styled as MuiStyled } from '@mui/material';
import usePriceCommaSeparator from 'hooks/usePriceCommaSeparator';

const tableHeaderColumns = [
  { cols: '28%', text: 'نام هتل', key: 'name', component: ColumnName }, // hotel.name
  { cols: '11%', text: 'خدمات', key: 'service', component: ColumnServices }, // hotel.service
  { cols: '14%', text: 'دو تخته', key: 'twoBeds', component: ColumnPrice },
  { cols: '12%', text: 'یک تخته', key: 'oneBed', component: ColumnPrice },
  {
    cols: '16%',
    text: 'کودک با تخت',
    key: 'childWithBed',
    component: ColumnPrice,
  },
  {
    cols: '19%',
    text: 'کودک بدون تخت',
    key: 'childWithoutBed',
    component: ColumnPrice,
  },
];

export default function ToursDetailMainContentHotelsTable({ hotels }) {
  // console.log(
  //   '🚀 ~ ToursDetailMainContentHotelsTable ~ hotels:',
  //   hotels[0]['name']
  // );
  return (
    <BisanCard id="hotel" sx={{ padding: '15px' }}>
      <div
        style={{
          backgroundColor: 'rgb(237, 224, 89)',
          borderRadius: '16px',
        }}
      >
        <div style={{ display: 'flex' }}>
          {tableHeaderColumns.map(({ cols, text }) => (
            <div key={text} style={{ width: cols }}>
              <TableHeaderColumn>{text}</TableHeaderColumn>
            </div>
          ))}

          {/* {tableHeaderColumns.map(col => <Grid item xs={col.cols}>{col.text}</Grid>} */}
          {/* <Grid item xs={3}>
            <TableHeaderColumn>نام هتل</TableHeaderColumn>
          </Grid>
          <Grid item xs={1}>
            <TableHeaderColumn>خدمات</TableHeaderColumn>
          </Grid>
          <Grid item xs={2}>
            <TableHeaderColumn>دو تخته</TableHeaderColumn>
          </Grid>
          <Grid item xs={2}>
            <TableHeaderColumn>یک تخته</TableHeaderColumn>
          </Grid>
          <Grid item xs={2}>
            <TableHeaderColumn>کودک با تخت</TableHeaderColumn>
          </Grid>
          <Grid item xs={2}>
            <TableHeaderColumn>کودک بدون تخت</TableHeaderColumn>
          </Grid> */}
        </div>
      </div>
      {hotels.map((hotel, i) => (
        <div
          key={hotel.name}
          style={{
            display: 'flex',
            border: '2px solid rgb(204, 204, 204)',
            borderRadius: '17px',
            marginTop: '10px',
            backgroundColor: i % 2 === 0 ? '#fff' : 'rgb(230, 230, 230)',
            height: '80px',
          }}
        >
          {tableHeaderColumns.map(({ key, cols, component }) => {
            // console.log('🚀 ~ {tableHeaderColumns.map ~ key:', key);
            const columnComponent = createDynamicComponent(component, {
              text: hotel[key],
              stars: hotel.stars,
              isBold: key === 'twoBeds',
            });
            return (
              <TableHeaderColumn
                key={key}
                style={{
                  width: cols,
                  fontWeight: 'normal',
                  display: 'flex',
                  justifyContent: 'center',
                  alignItems: 'center',
                }}
              >
                {/* {hotel[key]} */}
                {columnComponent}
              </TableHeaderColumn>
            );
          })}
          {/* <TableHeaderColumn style={{ width: TableHeaderColumns[0].cols}}>
            hotel.name
          </TableHeaderColumn> */}
        </div>
      ))}

      {/* <div style={{ display: 'flex', border: '1px solid red' }}>
        {TableHeaderColumns.map(({ key, cols }) => (
          <TableHeaderColumn key={key} style={{ width: cols }}>
            {hotels[0][key]}
          </TableHeaderColumn>
        ))}
      </div> */}
    </BisanCard>
  );
}

// ['ColumnName', 'ColumnServices'].map(componentName =><component is={componentName}></component> )

const createDynamicComponent = (component, props) => {
  return React.createElement(component, props);
};

function ColumnName({ text, stars }) {
  return (
    <div>
      <div style={{ marginBottom: '5px' }}>{text}</div>
      <StyledRating value={+stars} max={+stars} readOnly size="small" />
    </div>
  );
}

function ColumnServices({ text }) {
  return (
    <>
      <div>{text}</div>
    </>
  );
}

function ColumnPrice({ text, isBold }) {
  const addCommaSeparator = usePriceCommaSeparator();
  return (
    <>
      <div
        style={{
          display: 'flex',
          gap: '5px',
          alignItems: 'center',
          // border: '1px solid red',
        }}
      >
        <span
          style={{
            fontWeight: '700',
            fontSize: isBold ? '16px' : '12px',
          }}
        >
          {addCommaSeparator(text)}
        </span>
        <span style={{ color: 'rgb(113, 113, 122)', fontSize: '10px' }}>
          تومان
        </span>
      </div>
    </>
  );
}

const TableHeaderColumn = styled.div`
  padding: 24px;
  text-align: center;
  font-size: 14px;
  font-weight: 800;
`;

const StyledRating = MuiStyled(Rating)({
  '& .MuiRating-iconFilled': {
    color: 'rgb(237, 224, 89)',
  },
});
