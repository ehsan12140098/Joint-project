import useMediaQuery from '@mui/material/useMediaQuery';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

import styled from 'styled-components';
import { SummaryIcon } from '../../../Assets/Svgs/SummaryIcon';
import { TableIcon } from '../../../Assets/Svgs/TableIcon';
import { CardIcon } from '../../../Assets/Svgs/CardIcon';
import { useEffect, useMemo } from 'react';

const TableDisplayMode = ({ selected, onChange, title, items }) => {
  // const isDesktopDisplay = useMediaQuery(theme => theme.breakpoints.up('md'));
  // const isDesktopDisplay = useIsDesktopDisplay();

  const buttonStyles = {
    display: 'flex',
    flexDirection: 'row',
    gap: '6px',
    padding: '12px',
    boxShadow: '0px 5px 10px 0px rgba(0, 0, 0, 0.05)',
    color: '#697a80',
    fontFamily: 'IRANSans',
    fontSize: '16px',
    fontStyle: 'normal',
    fontWeight: '400',
    lineHeight: 'normal',
    cursor: 'pointer',
  };

  // const items = useMemo(
  //   () =>
  //     [
  //       {
  //         text: 'خلاصه',
  //         icon: <SummaryIcon />,
  //         visible: true,
  //       },
  //       {
  //         text: 'جدول',
  //         icon: <CardIcon />,
  //         visible: true,
  //       },
  //       {
  //         text: 'کارت',
  //         icon: <TableIcon />,
  //         visible: isDesktopDisplay,
  //       },
  //     ].filter(item => item.visible),

  //   [isDesktopDisplay]
  // );

  // useEffect(() => {
  //   if (selected === 'کارت' && !isDesktopDisplay) onChange('جدول');
  // }, [selected, onChange, isDesktopDisplay]);

  return (
    <DisplayModeHolder>
      <DisplayModeContainer>
        <DisplayModeKeeper>
          {items.map((item, i) => {
            const borderRadius =
              i === 0
                ? '25px 0px 0px 25px'
                : i === items.length - 1
                ? '0px 25px 25px 0px'
                : '0 0 0 0';

            const backgroundColor = selected === item.text ? '#e3ebed' : '#fff';

            return (
              <div
                style={{ ...buttonStyles, borderRadius, backgroundColor }}
                key={item.text}
                onClick={() => onChange(item.text)}
              >
                <div>{item.text}</div>
                {item.icon}
              </div>
            );
          })}
        </DisplayModeKeeper>
        <DisplayModeContainerTitle>نوع نمایش</DisplayModeContainerTitle>
      </DisplayModeContainer>
      <DisplayModeHolderTitle>{title}</DisplayModeHolderTitle>
    </DisplayModeHolder>
  );
};

export default TableDisplayMode;

const DisplayModeHolder = styled.div`
  direction: ltr;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    gap: 30px;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    margin: 20px 0px;
  }
`;

const DisplayModeContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 15px;
`;
const DisplayModeKeeper = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const DisplayModeContainerTitle = styled.div`
  color: #697a80;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;

const DisplayModeHolderTitle = styled.div`
  color: #5a623a;
  font-family: IRANSans;
  font-size: 24px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
