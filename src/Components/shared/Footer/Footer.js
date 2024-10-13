import HomePageContainer from 'Components/HomePage/HomePageContainer';
import FooterScrollToTopButton from './FooterScrollToTopButton';
import FooterContent from './FooterContent';
import FooterBisan from './FooterBisan';

export default function Footer() {
  return (
    <footer
      style={{
        marginTop: '100px',
        // height: '500px',
        backgroundImage:
          'url(https://bisanseir.com/static/home/img/footer/background.svg)',
        backgroundColor: 'rgb(25, 25, 25)',
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#fff',
        paddingBottom: '50px',
      }}
    >
      <FooterScrollToTopButton></FooterScrollToTopButton>
      <HomePageContainer>
        <div
          style={{
            // border: '1px solid orange',
            padding: '32px 0',
          }}
        >
          <FooterContent />
          <FooterBisan />
        </div>
      </HomePageContainer>
    </footer>
  );
}
