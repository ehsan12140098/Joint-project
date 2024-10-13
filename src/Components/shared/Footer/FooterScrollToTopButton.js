import styled from 'styled-components';

export default function FooterScrollToTopButton() {
  return (
    <div
      style={{
        position: 'absolute',
        top: '0',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center', // border: '1px solid yellow',
        // border: '1px solid red',
        // width: '100px',
        // height: '100px',
        // backgroundColor: 'blue',
      }}
    >
      <img
        src="https://bisanseir.com/static/home/img/footer/corner2.png"
        alt="shape"
        style={{
          width: '134px',
          position: 'relative',
          top: '-1px', // border: '1px solid green',
        }}
      />
      <button
        style={{
          position: 'absolute',
          width: '48px',
          transform: 'translateY(-28px)',
          // bottom: '0',
          // border: '1px solid orange',
          borderRadius: '24px',
          paddingTop: '16px',
          paddingBottom: '8px',
          backgroundColor: 'rgb(25,25,25)',
          paddingLeft: '0',
          paddingRight: '0',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: 'none',
          cursor: 'pointer',
        }}
        onClick={() =>
          window.scrollTo({
            top: 0,
            behavior: 'smooth',
          })
        }
        // onClick={() => .scrollIntoView({ behavior: 'smooth' })}
      >
        <StyledScrollToTopImage // className={classes.withAnimation}
          alt="plain"
          src="https://bisanseir.com/static/home/img/footer/goldairpane.svg"
        ></StyledScrollToTopImage>
      </button>
    </div>
  );
}

const StyledScrollToTopImage = styled.img`
  max-width: 100%;
  object-fit: contain;
  animation: scrollToTopAnimation 2s cubic-bezier(0.4, 0, 0.6, 1) infinite;
  animation-delay: 400ms;

  @keyframes scrollToTopAnimation {
    0% {
      transform: translate3d(0, -10px, 0) scale3d(1.45, 1.45, 1.45);
    }
    50% {
      transform: translate3d(0, 0px, 0) scale3d(1.5, 1.5, 1.5);
    }
    100% {
      transform: translate3d(0, -10px, 0) scale3d(1.45, 1.45, 1.45);
    }
  }
`;
