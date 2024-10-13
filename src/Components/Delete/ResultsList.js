import React, { useContext } from 'react';
import ResultItem from './UserCard';
// import { SearchContext } from "../../Contexts/SearchContext";
import { styled } from 'styled-components';

const ResultsList = () => {
  // const { searchResults } = useContext(SearchContext);

  return (
    <div></div>
    // <ResultsContainer>
    //   {searchResults?.map((result) => {
    //     return <ResultItem result={result} key={result.id} />;
    //   })}
    // </ResultsContainer>
  );
};
export default ResultsList;

const ResultsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1rem;
`;
