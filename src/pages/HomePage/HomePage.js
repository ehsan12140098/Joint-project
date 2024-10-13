import HomePageBlogs from 'Components/HomePage/HomePageBlogs/HomePageBlogs';
import HomePageDomesticTours from 'Components/HomePage/HomePageDomesticTours/HomePageDomesticTours';
import HomePageEuropeTours from 'Components/HomePage/HomePageEuropeTours/HomePageEuropeTours';
import HomePageFAQ from 'Components/HomePage/HomePageFAQ/HomePageFAQ';
import HomePageHero from 'Components/HomePage/HomePageHero';
import HomePageInstallmentTours from 'Components/HomePage/HomePageInstallmentTours/HomePageInstallmentTours';
import HomePagePopularDestinations from 'Components/HomePage/HomePagePopularDestinations/HomePagePopularDestinations';
import HomePageServices from 'Components/HomePage/HomePageServices/HomePageServices';
import Footer from 'Components/shared/Footer/Footer';

export default function HomePage() {
  return (
    <div>
      <HomePageHero />
      <main
        style={{
          marginTop: '20px',
          display: 'flex',
          flexDirection: 'column',
          gap: '9rem',
        }}
      >
        <HomePagePopularDestinations />
        <HomePageServices />
        <HomePageDomesticTours />
        <HomePageInstallmentTours />
        <HomePageEuropeTours />
        <HomePageBlogs />
        <HomePageFAQ />
      </main>
      <Footer />
    </div>
  );
}
