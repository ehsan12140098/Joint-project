import styled from 'styled-components';

export default function HomePageContainer({ children }) {
  return <StyledContainer>{children}</StyledContainer>;
}

const StyledContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0 16px;

  /* border: 10px solid red; */

  @media screen and (min-width: 640px) {
    width: 640px;
  }

  @media screen and (min-width: 768px) {
    width: 768px;
  }

  @media screen and (min-width: 1024px) {
    width: 1024px;
  }

  @media screen and (min-width: 1440px) {
    width: 1440px;
    padding: 0 80px;
  }
`;
