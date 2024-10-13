import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import styled from 'styled-components';

const services = [
  'رزرو و صدور بلیط تمامی ایرلاین‌ها',
  'رزرو هتل در سراسر جهان',
  'خدمات اخذ ویزا',
  'صدور بیمه نامه مسافرتی خارجی',
  'ارائه خدمات VIP و CIP',
  'مشاوره رایگان در امور اخذ ویزا',
];

export default function AboutUsServices({ sx = {} }) {
  return (
    <div style={{ ...sx }}>
      <SectionTitle>خدمات بیسان سیر</SectionTitle>
      <ul
        style={{
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          marginTop: '16px',
        }}
      >
        {services.map(service => (
          <StyledLi key={service}>
            {/* <BrownSquareMark /> */}
            {service}
          </StyledLi>
        ))}
      </ul>
    </div>
  );
}

const StyledLi = styled.li`
  /* border: 1px solid red; */
  line-height: 24px;
  color: rgb(31, 41, 55);
  list-style-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAYAAADED76LAAAACXBIWXMAAAsTAAALEwEAmpwYAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAiSURBVHgB3coxAQAACAIwNJZRPO3fQRrAz+7V3jyEhpERCAhGAgWfVWwfAAAAAElFTkSuQmCC);
  list-style-position: inside;
`;
