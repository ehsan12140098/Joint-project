import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function HomePageButtonLink({ children, href, style = {} }) {
  return (
    <StyledLink to={href} style={style}>
      {children}
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  display: inline-block;
  width: max-content;
  background-color: rgb(253, 224, 71);
  color: rgb(113, 63, 18);
  border-radius: 9999px;
  line-height: 24px;
  padding: 8px 12px;
  font-weight: 700;
  box-shadow: rgba(0, 0, 0, 0) 0px 0px 0px 0px, rgba(0, 0, 0, 0) 0px 0px 0px 0px,
    rgba(0, 0, 0, 0.1) 0px 20px 25px -5px, rgba(0, 0, 0, 0.1) 0px 8px 10px -6px;

  transition: 0.1s;

  &:hover {
    background-color: rgb(254, 240, 138);
  }
`;
