import React from 'react';
// import { SearchContext } from "./Contexts/SearchContext";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/Home';
import { HotelPage as OldHotelDetailPage } from './pages/HotelPage';
import { ParentHotelPage } from './pages/ParentHotelPage';
import { ContactUs } from './pages/ContactUs';
import { AboutUs } from './pages/AboutUs';
import { VisaPage as OldVisaPAge } from './pages/VisaPage';
import { InstallmentTourPage } from './pages/InstallmentTourPage';
import { EuropeCard } from './pages/EuropeCard';
import { EachTour } from './pages/EachTour';
// import { EuropeTable } from './pages/EuropeTable';
import { TurkeyTable } from './pages/TurkeyTable';
import { EuropeSummary } from './pages/EuropeSummary';
import { MainBlogPage } from './pages/MainBlogPage';
import { MinorBlogPage } from './pages/MinorBlogPage';
import { SchengenVisa } from './pages/SchengenVisa';
import { CountryVisa } from './pages/CountryVisa';
import { QuestionBox } from './pages/QuestionBox';
import { Support } from './pages/Support';
import { NotFound } from './pages/NotFound';
import { About } from './pages/About';
import { GlobalStyles } from './styles/globalStyles';
// import { Footer } from './Components/Footer/Footer';
import { StickyFooter } from './Components/Footer/StickyFooter';
import { Footer as OldFooter } from 'Components/Footer/Footer';
//
import HomePage from 'pages/HomePage/HomePage';

import ToursPage from './pages/ToursPage/ToursPage';
import ToursDetailPage from 'pages/ToursPage/ToursDetailPage/ToursDetailPage';
import ToursInstallmentPage from 'pages/ToursPage/ToursInstallmentPage/ToursInstallmentPage';

import HotelPage from 'pages/HotelPage/HotelPage';
import HotelDetailPage from 'pages/HotelPage/HotelDetailPage/HotelDetailPage';

import BlugsPage from 'pages/BlugsPage/BlugsPage';
import BlugsDetailPage from 'pages/BlugsPage/BlugsDetailPage/BlugsDetailPage';

import VisaPage from 'pages/VisaPage/VisaPage';
import VisaSlugPage from 'pages/VisaPage/VisaSlugPage';

import AboutUsPage from 'pages/AboutUsPage/AboutUsPage';

import FAQ from 'pages/FAQ/FAQ';

import Footer from 'Components/shared/Footer/Footer';
//
import Layout from './Components/Layout';
import Rtl from './Components/Rtl';
import ScrollToTop from 'utils/ScrollToTop';

const App = () => {
  return (
    <>
      <GlobalStyles />
      <Rtl>
        <BrowserRouter>
          {/* <ScrollRestoration /> */}
          <ScrollToTop />
          <Routes>
            <Route path="/old-home" exact element={<Home />} />
            <Route path="/" exact element={<HomePage />} />
            <Route element={<Layout />}>
              {/* <Route path="/user/:userName" exact element={<User />} /> */}
              <Route path="/About" exact element={<About />} />
              <Route path="/ContactUs" exact element={<ContactUs />} />
              <Route path="/AboutUs" exact element={<AboutUs />} />
              <Route path="/EuropeCard" exact element={<EuropeCard />} />

              <Route path="/tours/:city?" exact element={<ToursPage />} />
              <Route
                path="/tours/:city?/detail/:tourName"
                element={<ToursDetailPage />}
              />
              <Route
                path="/tours/installment_tour"
                element={<ToursInstallmentPage />}
              />

              <Route path="/hotel/:slug?" exact element={<HotelPage />} />
              <Route
                path="/hotel/detail/:slug"
                exact
                element={<HotelDetailPage />}
              />

              <Route path="/blog/:slug" exact element={<BlugsPage />} />
              <Route
                path="/blog/detail/:slug"
                exact
                element={<BlugsDetailPage />}
              />

              <Route path="/visa" exact element={<VisaPage />} />
              <Route path="/visa/:slug" exact element={<VisaSlugPage />} />

              <Route path="/about-us" exact element={<AboutUsPage />} />

              <Route path="/FAQ" exact element={<FAQ />} />

              <Route path="/SchengenVisa" exact element={<SchengenVisa />} />
              <Route path="/TurkeyTable" exact element={<TurkeyTable />} />
              <Route path="/VisaPage" exact element={<OldVisaPAge />} />
              <Route path="/EachTour" exact element={<EachTour />} />
              <Route
                path="/InstallmentTourPage"
                exact
                element={<InstallmentTourPage />}
              />
              <Route path="/MainBlogPage" exact element={<MainBlogPage />} />
              <Route path="/MinorBlogPage" exact element={<MinorBlogPage />} />
              <Route path="/HotelPage" exact element={<OldHotelDetailPage />} />
              <Route
                path="/ParentHotelPage"
                exact
                element={<ParentHotelPage />}
              />
              <Route path="/EuropeSummary" exact element={<EuropeSummary />} />
              <Route path="/QuestionBox" exact element={<QuestionBox />} />
              <Route
                path="/QuestionBox/:slug"
                exact
                element={<QuestionBox />}
              />
              <Route path="/Support" exact element={<Support />} />
              <Route path="/NotFound" exact element={<NotFound />} />
              <Route path="/VisaPage/:slug" element={<CountryVisa />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </Rtl>
      {/* <Footer /> */}
      {/* <OldFooter /> */}
      <StickyFooter />
    </>
  );
};
export default App;
