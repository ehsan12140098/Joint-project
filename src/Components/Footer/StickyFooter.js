import React from 'react';
import styled from 'styled-components';
import { Blog } from '../../Assets/Svgs/Blog';
import { SearchIcon } from '../../Assets/Svgs/SearchIcon';
import { List } from '../../Assets/Svgs/List';
import { Home } from '../../Assets/Svgs/Home';
import { TableIcon } from '../../Assets/Svgs/TableIcon';
import { CardIcon } from '../../Assets/Svgs/CardIcon';
import yellowphonestickyfooter from '../../Assets/images/yellowphonestickyfooter.png';
// import StickyBackgroundFooter from "../Assets/directsvgs/StickyBackgroundFooter.svg";
import stickyfooterbackground from '../../Assets/images/stickyfooterbackground.png';
import StickyFooterMenu from './StickyFooterMenu';

export const StickyFooter = () => {
  return (
    <MainStickyFooter>
      {/* <StickyFooterMenu /> */}
      <YellowPhoneHolder />
      <FooterHolder>
        <FooterContainer>
          <LeftSideFooterContaine>
            <IconHolder>
              <Blog />
              <TextHolder>بلاگ</TextHolder>
            </IconHolder>
            <IconHolder>
              <SearchIcon />
              <TextHolder>جستجو</TextHolder>
            </IconHolder>
          </LeftSideFooterContaine>
          <RightSideFooterContaine>
            <IconHolder>
              <List />
              <TextHolder>فهرست</TextHolder>
            </IconHolder>
            <IconHolder>
              <Home />
              <TextHolder>خانه</TextHolder>
            </IconHolder>
          </RightSideFooterContaine>
        </FooterContainer>
      </FooterHolder>
    </MainStickyFooter>
  );
};

const MainStickyFooter = styled.div`
  height: 80px;
  direction: ltr;
  display: none;
  width: 100%;
  position: sticky;
  bottom: 0;
  z-index: 100;
  @media (max-width: 640px) {
    display: block;
  }
  /* border: 3px solid green; */
`;

const YellowPhoneHolder = styled.div`
  width: 100px;
  height: 95px;
  border-radius: 17px;
  top: -37px;
  left: calc(50% - 58px);
  position: absolute;
  background-image: url(${yellowphonestickyfooter});
  z-index: 2 !important;
`;
const FooterHolder = styled.div`
  position: relative;
  width: 100%;
  height: 80px;
  background-image: url(${stickyfooterbackground});
  background-size: 100% 100%;
  z-index: 100;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: center;
  /* border: 3px solid green; */
`;
const FooterContainer = styled.div`
  width: 90%;
  height: 65%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 3px solid blue; */
`;
const LeftSideFooterContaine = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid orange; */
`;
const RightSideFooterContaine = styled.div`
  width: 30%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  /* border: 1px solid orange; */
`;

const IconHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;
const TextHolder = styled.div`
  color: var(--Secondary-Dark-Color, #697a80);
  text-align: center;
  font-family: IRANSans;
  font-size: 12px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
