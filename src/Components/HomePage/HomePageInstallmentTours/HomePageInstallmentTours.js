import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
import HomePageButtonLink from '../HomePageButtonLink';
import HomePageContainer from '../HomePageContainer';
import { useMediaQuery } from '@mui/material';

export default function HomePageInstallmentTours() {
  const isMdAndBigger = useMediaQuery(theme => theme.breakpoints.up('md'));

  return (
    <HomePageContainer>
      <BisanCard
        sx={{
          backgroundImage:
            ' linear-gradient(to left, rgb(223, 214, 205), rgb(255, 255, 255))',
          padding: '64px',
          display: 'flex',
          flexDirection: isMdAndBigger ? 'row' : 'column',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}
      >
        <div style={{ display: 'flex', flexDirection: 'column' }}>
          <h1
            style={{ lineHeight: '40px', fontWeight: '700', fontSize: '36px' }}
          >
            تور های اقساطی
          </h1>
          <p
            style={{
              marginTop: '20px',
              lineHeight: '28px',
              fontSize: '18px',
              marginBottom: '20px',
            }}
          >
            با تور های اقساطی بیسان به راحتی به تمام نقاط دنیا سفر کنید
          </p>
          {/* <StyledLink to="tours/installment_tours/">شرایط و قوانین</StyledLink> */}
          <HomePageButtonLink
            href="tours/installment_tour"
            style={{
              alignSelf: isMdAndBigger ? 'start' : 'end',
            }}
          >
            شرایط و قوانین
          </HomePageButtonLink>
        </div>
        <img
          src="https://bisanseir.com/static/home/svg/human-1.svg"
          alt="installment"
          loading="lazy"
          style={{ display: 'block' }}
        />
      </BisanCard>
    </HomePageContainer>
  );
}
