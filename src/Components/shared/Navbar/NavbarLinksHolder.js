import { ChevronLeft } from 'Assets/Svgs/ChevronLeft';
import NavbarLinkArrow from 'Assets/Svgs/NavbarLinkArrow';
import { Link, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

export default function NavbarLinksHolder({ items, counter = 1 }) {
  const navigate = useNavigate();

  function handleNavigate(href, e) {
    e.stopPropagation();
    // console.log('🚀 ~ handleNavigate ~ href:', href);
    navigate(href);
  }
  return (
    <div
      className="navbarLink-holder"
      style={{
        // border: '1px solid red',
        zIndex: '4',
        width: counter > 1 ? '240px' : 'max-content',
        flexDirection: counter > 1 ? 'column-reverse' : 'row-reverse',
        position: counter > 1 ? 'absolute' : 'relative',
        top: counter === 1 ? '0px' : counter === 2 ? '100%' : '0px',
        right: counter === 1 ? '0px' : counter === 2 ? '0px' : '100%',
        boxShadow:
          counter > 1
            ? '0 10px 15px -3px rgb(0 0 0 / 0.1), 0 4px 6px -4px rgb(0 0 0 / 0.1)'
            : 'none',
        display: 'flex',
        justifyContent: 'flex-end',
        backgroundColor: '#fff',
      }}
    >
      {items.map(item => {
        return (
          <NavbarLink
            key={item.text}
            onClick={e => handleNavigate(item.href, e)}
            // to={item.href || '/'}
            className={item.backgroundColor ? 'with-background' : ''}
            // className={[classes.Bold, classes.withBorder].join('alireza')}
            style={{
              // border: '1px solid blue',
              color: item.backgroundColor ? '#fff' : 'rgb(102, 102, 102)',
              backgroundColor: item.backgroundColor || '#fff',
              position: 'relative',
              height: '40px',
              // position: counter ? 'absolute' : 'relative',
              // top: counter ? '100%' : '0',
              // right: '0',
              // display: 'flex',
              // alignItems: 'center',
              // padding: '0 16px',
              // fontWeight: 'normal',
              // borderRadius: '6px',
              // fontSize: '15px',
            }}
          >
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'space-between',
                width: '100%',
                // border: '1px solid red',
                gap: '5px',
              }}
            >
              {item.text}
              {item.submenu && (
                <NavbarLinkArrow
                  size="14"
                  rotation={counter > 1 ? '180' : '90'}
                />
              )}
              {/* <ChevronLeft size="11" /> */}
            </div>
            {item.submenu && (
              <NavbarLinksHolder items={item.submenu} counter={counter + 1} />
            )}
          </NavbarLink>
        );
      })}
    </div>
  );
}

const NavbarLink = styled.div`
  display: flex;
  align-items: center;
  padding: 0 16px;
  font-weight: normal;
  border-radius: 6px;
  font-size: 15px;

  > .navbarLink-holder {
    /* border: 1px solid red; */
    display: none !important;
  }

  &:hover {
    > .navbarLink-holder {
      display: flex !important;
    }

    &:not(.with-background) {
      background-color: rgb(254, 252, 232) !important;
    }
  }
`;

// wrong
{
  /* <holder position="-">
  <link position="relative">
    بلاگ
    <holder position="-">
      <link position="absolute">مجله گردشگری</link>
      <Link position="absolute">تست ۲</Link>
    </holder>
  </link>
</holder>; */
}

// correct
{
  /* <holder position="relative">
  <link position="relative">
    بلاگ
    <holder position="absolute">
      <link position="relative">مجله گردشگری</link>
      <Link position="relative">تست ۲</Link>
    </holder>
  </link>
</holder>; */
}

// 5 => 1 + 2 + 3 + 4 + 5
// 4 => 1 + 2 + 3 + 4
// function addSum(numb) {
//   if ( numb === 0) return 0
//   return numb + addSum(numb-1)
// }
