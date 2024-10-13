import { Link } from 'react-router-dom';
import { Rating, styled as MuiStyled } from '@mui/material';
import styled from 'styled-components';

import { StarIconFilled, StarIconOutlined } from 'Assets/Svgs/StarIcon';

export default function HotelsMainTableItemTableMode({ hotel, isCard }) {
  return (
    <HotelCard
      style={{ height: isCard ? '352px' : '164px' }}
      className={isCard ? 'card' : 'table'}
    >
      <Link to={`/hotel/detail/${hotel.slug}`}>
        <div
          className="image-holder"
          style={{ flexDirection: isCard ? 'column' : 'row' }}
        >
          {hotel.image ? (
            <img
              src={hotel.image}
              alt={hotel.name}
              style={{
                width: isCard ? '100%' : '50%',
                height: isCard ? '50%' : '100%',
              }}
            ></img>
          ) : (
            <img
              src={require('Assets/images/not_found.png')}
              alt={hotel.name}
              style={{
                width: isCard ? '100%' : '50%',
                height: isCard ? '50%' : '100%',
              }}
            />
          )}
          <div
            className="image-fade"
            style={{
              width: isCard ? '100%' : '50%',
              height: isCard ? '50%' : '100%',
              backgroundImage: isCard
                ? 'linear-gradient( to top, rgb(255, 255, 255),rgb(255, 255, 255), rgba(0, 0, 0, 0))'
                : 'linear-gradient( to right, rgb(255, 255, 255),rgb(255, 255, 255), rgba(0, 0, 0, 0))',
              left: isCard ? '0' : '50%',
              bottom: isCard ? '50%' : '0',
              transform: isCard ? 'translateY(30%)' : 'translateX(-50%)',
              // border: '1px solid red',
            }}
          ></div>
          <div
            className="info-holder"
            style={{
              width: isCard ? '100%' : '50%',
              height: isCard ? '50%' : '100%',
              padding: isCard ? '20px' : '3% 12% 3% 0',
              textAlign: isCard ? 'center' : 'right',
              // border: '1px solid red',
            }}
          >
            <div
              className="box"
              style={{
                // border: '1px solid black',
                display: isCard ? 'flex' : 'block',
                flexDirection: 'column',
                justifyContent: 'flex-end',
                alignItems: 'center',
              }}
            >
              <div
                className="name"
                style={{
                  paddingRight: isCard ? '0' : '20px',
                  // border: '1px solid red',
                }}
              >
                {hotel.name}{' '}
              </div>
              <div
                className="stars-holder"
                style={{
                  borderRight: isCard ? 'none' : '1px solid rgb(229, 231, 235)',
                  paddingRight: isCard ? '0' : '20px',
                  // height: isCard ? '100%' : 'max-content',
                  // border: '1px solid blue',
                }}
              >
                <div className="english-name">{hotel.en_name}</div>
                <StyledRating
                  value={4}
                  max={5}
                  readOnly
                  icon={<StarIconFilled />}
                  emptyIcon={<StarIconOutlined />}
                />
              </div>
            </div>
          </div>
        </div>
      </Link>
    </HotelCard>
  );
}

const HotelCard = styled.div`
  /* margin-bottom: 24px; */
  width: 100%;
  /* height: 164px; */
  border-radius: 24px;
  /* border: 1px solid blue; */
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 1px 3px 0px, rgba(0, 0, 0, 0.1) 0px 1px 2px -1px;
  cursor: pointer;
  overflow: hidden;
  transition: 0.2s;

  &.table:hover {
    box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px,
      rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0.1) 0px 20px 25px -5px,
      rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;
  }

  &.card:hover {
    transform: scale(1.05);
  }

  > a {
    display: block;
    /* border: 1px solid red; */
    width: 100%;
    height: 100%;
    > .image-holder {
      /* border: 1px solid green; */
      /* border: 1px solid red; */
      width: 100%;
      height: 100%;
      display: flex;
      /* border: 1px solid red; */
      position: relative;
      > img {
        /* width: 50%; */
        /* height: 100%; */
        object-fit: cover;
      }
      > .image-fade {
        /* width: 50%;
        height: 100%; */
        /* border: 1px solid red; */
        /* background-image: linear-gradient(
          to right,
          rgb(255, 255, 255),
          rgb(255, 255, 255),
          rgba(0, 0, 0, 0)
        ); */
        position: relative;
        /* left: 50%;
        transform: translateX(-50%); */
      }
      > .info-holder {
        position: absolute;
        background-color: #fff;
        /* height: 100%;
        width: 50%; */
        bottom: 0;
        left: 0;
        /* padding: 3% 12% 3% 0; */

        > .box {
          width: 100%;
          height: 100%;
          /* border: 1px solid red; */
          display: flex;
          flex-direction: column;
          > .name {
            /* padding-right: 20px; */
            color: #000;
            font-size: 20px;
            font-weight: 700;
            line-height: 26px;
          }
          > .stars-holder {
            /* padding-right: 20px; */
            padding-top: 20px;
            height: max-content;
            /* border-right: 1px solid rgb(229, 231, 235); */
            > .english-name {
              color: #000;
              font-weight: 400;
              font-size: 16px;
            }
          }
        }
      }
    }
  }
`;

const StyledRating = MuiStyled(Rating)({
  // border: '1px solid red !important',
  flexDirection: 'row-reverse',
  gap: '8px',
  marginTop: '20px',
  // '& .MuiRating-root': {
  //   border: '1px solid red !important',
  // },

  '& .MuiRating-icon': {
    color: 'rgb(234, 179, 8)',
  },
});
