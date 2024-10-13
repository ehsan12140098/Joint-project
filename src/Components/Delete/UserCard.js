import React, { useContext } from 'react';
// import { SearchContext } from "../../Contexts/SearchContext";
import { useNavigate } from 'react-router-dom';
import { styled } from 'styled-components';
import { COLUMN_CENTER } from '../../styles/FlexStyles';
import {
  LARGE_TEXT_BOLD,
  SMALL_TEXT_REGULAR,
} from '../../styles/globalTypography';
import BaseButton from './BaseButton';

const ResultItem = ({ result }) => {
  return <div></div>;
  // const { setSelectedResult } = useContext(SearchContext);
  // const navigate = useNavigate();

  // const handleClick = () => {
  //   setSelectedResult(result);
  // };

  // const handleItemClick = () => {
  //   navigate(`/user/${result.login}`);
  // };

  // return (
  //   <UserCard onClick={handleItemClick}>
  //     <Imageholder src={result?.avatar_url} />
  //     <UserNameHolder>{result.login}</UserNameHolder>
  //     <MoreButton
  //       onClick={handleClick}
  //       title="More"
  //       variant="primary"
  //     ></MoreButton>
  //   </UserCard>
  // );
};

export default ResultItem;

const UserCard = styled.div`
  ${COLUMN_CENTER}
  gap:12px;
  padding: 1rem;
  border: 1px dotted ${({ theme }) => theme.colors.chineseSilver};
  margin: 0.7rem 0;
  text-align: center;
`;
const Imageholder = styled.img`
  width: 50px;
  border-radius: 50%;
`;

const UserNameHolder = styled.h3`
  ${LARGE_TEXT_BOLD}
`;

const MoreButton = styled(BaseButton)`
  ${SMALL_TEXT_REGULAR}
  padding: 5px 16px;
`;
