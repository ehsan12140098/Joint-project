import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default function HomePageImageLink({ item }) {
  return (
    <StyledLink key={item.id} to={item.href}>
      <div className="overlay"></div>
      <div className="gradient">{item.title}</div>
      <img className="image" loading="lazy" src={item.image} alt="bisan" />
    </StyledLink>
  );
}

const StyledLink = styled(Link)`
  position: relative;
  overflow: hidden;
  border-radius: 16px;
  transition-property: all;
  transition-duration: 0.5s;
  display: block;
  /* border: 1px solid red; */

  &:hover {
    transform: matrix(1, 0, 0, 1, 0, -20);
  }

  > .image {
    max-width: 100%;
    height: auto;
    vertical-align: middle;
  }

  > .overlay {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: #000;
    transition-property: all;
    transition-duration: 0.7s;
    opacity: 0;

    &:hover {
      opacity: 0.3;
    }
  }

  > .gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: linear-gradient(to top, rgb(0, 0, 0), rgba(0, 0, 0, 0));
    padding: 24px 0;
    color: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-end;
    pointer-events: none;
  }
`;
