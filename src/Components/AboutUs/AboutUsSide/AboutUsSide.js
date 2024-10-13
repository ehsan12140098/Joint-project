// import { BrownSquareMark } from 'Assets/Svgs/BrownSquareMark';
// import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
// import styled from 'styled-components';
import AboutUsServices from '../AboutUsServices';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

// const services = [
//   'رزرو و صدور بلیط تمامی ایرلاین‌ها',
//   'رزرو هتل در سراسر جهان',
//   'خدمات اخذ ویزا',
//   'صدور بیمه نامه مسافرتی خارجی',
//   'ارائه خدمات VIP و CIP',
//   'مشاوره رایگان در امور اخذ ویزا',
// ];

export default function AboutUsSide() {
  const isLgOrBigger = useIsDesktopDisplay('lg');
  return (
    <div
      style={{
        position: 'relative',
        // border: '1px solid red',
        height: '100%',
      }}
    >
      {isLgOrBigger && (
        <BisanCard sx={{ position: 'sticky', top: '100px', padding: '40px' }}>
          <AboutUsServices />
        </BisanCard>
      )}
    </div>
  );
}

// const StyledLi = styled.li`
//   /* border: 1px solid red; */
//   line-height: 24px;
//   color: rgb(31, 41, 55);
//   list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAiSURBVHgB3coxAQAACAIwNJZRPO3fQRrAz+7V3jyEhpERCAhGAgWfVWwfAAAAAElFTkSuQmCC);
//   list-style-position: inside;
// `;
