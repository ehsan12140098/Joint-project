import React, { useEffect, useState, useRef } from 'react';
import styled from 'styled-components';
import Navbar1 from '../Components/Common/Navbar1';
import { Navbar3 } from '../Components/Common/Navbar3';
import { BreadcrumbHolder } from '../Components/Common/BreadcrumbHolder';
import { Consultation } from '../Components/Common/Consultation';
import { SelectedTourHolder } from '../Components/Tour/SelectedTourHolder';
import { PageGuide } from '../Components/Tour/PageGuide';
import { SocialMediaHolder } from '../Components/Tour/SocialMediaHolder';
import { HotelDescription } from '../Components/Tour/HotelDescription';
import { EachTourSwiperComponent } from '../Components/Tour/EachTourSwiperComponent';
import { SuggestedToursComponent } from '../Components/Tour/SuggestedToursComponent';
import { HotelPageDescrip } from '../Components/Common/HotelPageDescrip';
import { HotelPageFacility } from '../Components/Common/HotelPageFacility';
import { EachTourCardPhone } from '../Components/Tour/EachTourCardPhone';
import nav1background from '../Assets/images/nav1background.png';
import phonenavbarbackground from '../Assets/images/phonenavbarbackground.png';

const StyledPageGuide = styled(PageGuide)`
  /* background-color: red !important; */
`;

export const EachTour = () => {
  const [visibleComponentId, setVisibleComponentId] = useState('');

  const elementsRefs = [
    useRef(null), // hotelDescriptionRef
    useRef(null), // hotelPageDescripRef
    useRef(null), // hotelPageFacilityRef
  ];

  // const hotelDescriptionRef = useRef(null);
  // const hotelPageDescripRef = useRef(null);
  // const hotelPageFacilityRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          setVisibleComponentId(entry.target.id);
        }
      });
    });

    elementsRefs.forEach(ref => {
      if (ref.current) {
        observer.observe(ref.current);
      }
    });

    // const hotelDescriptionElement = hotelDescriptionRef.current;
    // const hotelPageDescripElement = hotelPageDescripRef.current;
    // const hotelPageFacilityElement = hotelPageFacilityRef.current;

    // if (hotelDescriptionElement) {
    //   observer.observe(hotelDescriptionElement);
    // }
    // if (hotelPageDescripElement) {
    //   observer.observe(hotelPageDescripElement);
    // }
    // if (hotelPageFacilityElement) {
    //   observer.observe(hotelPageFacilityElement);
    // }

    return () => {
      elementsRefs.forEach(ref => {
        if (ref.current) {
          observer.unobserve(ref.current);
        }
      });

      // if (hotelDescriptionElement) {
      //   observer.unobserve(hotelDescriptionElement);
      // }

      // if (hotelPageDescripElement) {
      //   observer.unobserve(hotelPageDescripElement);
      // }

      // if (hotelPageFacilityElement) {
      //   observer.unobserve(hotelPageFacilityElement);
      // }
    };
  }, [elementsRefs]);

  // [hotelDescriptionRef, hotelPageDescripRef, hotelPageFacilityRef]

  const scrollToSection = id => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <TotalEachTourHolder>
      <MainEachTourHolder>
        <Navbar3Holder>
          <Navbar3 />
        </Navbar3Holder>
        <BreadcrumbAndSelectedTourHolder>
          <BreadcrumbHolder />
          <SelectedTourHolder />
        </BreadcrumbAndSelectedTourHolder>
        <SubMainEachTourHolder>
          <LeftSideSubMainEachTour>
            <Consultation />
            <StyledPageGuide
              visibleComponentId={visibleComponentId}
              scrollToSection={scrollToSection}
            />
            <SocialMediaHolder />
          </LeftSideSubMainEachTour>
          <RightSideSubMainEachTour>
            <HotelDescription ref={elementsRefs[0]} id="HotelDescription" />
            <HotelPageDescrip ref={elementsRefs[1]} id="HotelPageDescrip" />
            <HotelPageFacility ref={elementsRefs[2]} id="HotelPageFacility" />
            <EachTourSwiperComponent />
            <SuggestedToursComponent />
          </RightSideSubMainEachTour>
        </SubMainEachTourHolder>
      </MainEachTourHolder>
      <MainEachTourHolderPhone>
        <BreadcrumbHolder />
        <SelectedTourHolder />
        <EachTourCardPhone />
        <HotelPageFacility />
        <EachTourSwiperComponent />
      </MainEachTourHolderPhone>
      <MainEachTourHolderIpad>
        <BreadcrumbHolder />
        <SelectedTourHolder />
        <HotelDescription />
        <HotelPageDescrip />
        <HotelPageFacility />
      </MainEachTourHolderIpad>
    </TotalEachTourHolder>
  );
};

const TotalEachTourHolder = styled.div`
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 300px;
    background-image: url(${nav1background});
    z-index: 1;
  }
  @media (max-width: 640px) {
    &:before {
      background-image: url(${phonenavbarbackground});
      background-size: cover;
      height: 300px;
      z-index: 1;
    }
  }
`;

const MainEachTourHolder = styled.div`
  width: 90%;
  margin: auto;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  @media (max-width: 1024px) {
    display: none;
  }
`;

const Navbar3Holder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const BreadcrumbAndSelectedTourHolder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  gap: 20px;
  z-index: 2;
`;
const SubMainEachTourHolder = styled.div`
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;
`;
const LeftSideSubMainEachTour = styled.div`
  width: 24%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start !important;
  gap: 6px;
  position: sticky;
  top: 84px;
`;

const RightSideSubMainEachTour = styled.div`
  width: 74%;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  gap: 40px;
`;

const MainEachTourHolderPhone = styled.div`
  width: 90%;
  margin: auto;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  @media (max-width: 640px) {
    display: flex;
  }
`;
const MainEachTourHolderIpad = styled.div`
  width: 95%;
  margin: auto;
  display: none;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  @media (min-width: 640px) and (max-width: 1024px) {
    display: flex;
  }
`;

// const [activeSection, setActiveSection] = useState("");
// const sectionRefs = useRef({});

// useEffect(() => {
//   const observerOptions = {
//     root: null,
//     rootMargin: "0px",
//     threshold: 0.5,
//   };

//   const callback = (entries) => {
//     entries.forEach((entry) => {
//       if (entry.isIntersecting) {
//         setActiveSection(entry.target.id);
//       }
//     });
//   };

//   const observer = new IntersectionObserver(callback, observerOptions);

//   Object.values(sectionRefs.current).forEach((ref) => {
//     observer.observe(ref);
//   });

//   return () => {
//     observer.disconnect();
//   };
// }, []);

// const scrollToSection = (id) => {
//   const element = document.getElementById(id);
//   if (element) {
//     element.scrollIntoView({ behavior: "smooth" });
//   }
// };
