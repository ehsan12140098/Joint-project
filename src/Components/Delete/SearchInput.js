import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";
// import { SearchContext } from "../../Contexts/SearchContext";
import { MAIN_TEXT_REGULAR } from "../../styles/globalTypography";
import {
  COLUMN_CENTER,
  ROW_JUSTIFY_START__ALIGN_CENTER,
} from "../../styles/FlexStyles";
import { InfoIcon } from "../../Assets/Svgs/InfoIcon";
import BaseButton from "./BaseButton";

const SearchComponent = () => {
  // const {
  //   searchTerm,
  //   setSearchTerm,
  //   searchResults,
  //   setSearchResults,
  //   setIsLoading,
  // } = useContext(SearchContext);

  // const [error, setError] = useState(null);

  // const onFormSubmit = async (event) => {
  //   event.preventDefault();
  //   try {
  //     setIsLoading(true);
  //     const response = await axios.get(`https://api.github.com/search/users`, {
  //       params: { maxResults: 30, q: searchTerm },
  //     });
  //     console.log(response);
  //     setSearchResults(response.data.items);
  //   } catch (e) {
  //     setError(e);
  //   } finally {
  //     setIsLoading(false);
  //   }
  // };

  // useEffect(() => {
  //   const timerId = setTimeout(() => {
  //     setError(null);
  //   }, 2000);

  //   return () => {
  //     clearTimeout(timerId);
  //   };
  // }, [error]);

  // const onInputChange = (event) => {
  //   setSearchTerm(event.target.value);
  // };

  // const handleClearSearch = () => {
  //   setSearchResults([]);
  // };

  return (
    <div></div>
    // <FormContainer>
    //   {error && !searchTerm && (
    //     <ErrorContainer>
    //       <InfoIcon />
    //       <HelperText>Please enter somthing</HelperText>
    //     </ErrorContainer>
    //   )}
    //   <InputHolder
    //     type="text"
    //     placeholder="Search Users..."
    //     onInput={onInputChange}
    //   />
    //   <BaseButton
    //     onClick={onFormSubmit}
    //     title="Submit"
    //     variant="primary"
    //     fullWidth
    //   />
    //   {searchResults.length > 0 ? (
    //     <BaseButton
    //       onClick={handleClearSearch}
    //       title="Clear"
    //       variant="secondary"
    //       fullWidth
    //     />
    //   ) : null}
    // </FormContainer>
  );
};

export default SearchComponent;

const FormContainer = styled.form`
  ${COLUMN_CENTER}
  gap: 16px;
`;

const InputHolder = styled.input`
  width: 100%;
  padding: 0.4rem;
  font-size: 1.2rem;
  border: 1px solid ${({ theme }) => theme.colors.chineseSilver};
`;

const ErrorContainer = styled.div`
  ${ROW_JUSTIFY_START__ALIGN_CENTER}
  gap: 8px;
  width: 100%;
  padding: 16px;
  background-color: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.dark};
`;

const HelperText = styled.p``;
