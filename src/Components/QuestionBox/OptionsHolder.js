import React, { useState, useEffect } from "react";
import styled from "styled-components";
import axios from "axios";
import { Link } from "react-router-dom";

export const OptionsHolder = ({ onOptionSelect }) => {
  const [options, setOptions] = useState([]);
  // console.log();

  useEffect(() => {
    axios
      .get("/api/faq/categories/")
      .then((response) => {
        setOptions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching options:", error);
      });
  }, []);

  return (
    <OptionsContainer>
      {options.map((option) => (
        <Link to={`/QuestionBox/${option.slug}`} key={option.slug}>
          <OptionHolder
            onClick={() => onOptionSelect(option.slug, option.name)}
          >
            <OptionContainer>{option.name}</OptionContainer>
          </OptionHolder>
        </Link>
      ))}
    </OptionsContainer>
  );
};

const OptionsContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  flex-wrap: wrap;
  gap: 16px;
  margin-top: 6px;
  @media (max-width: 1024px) {
    display: none;
  }
`;
const OptionHolder = styled.div`
  border-radius: 41px;
  background-color: rgba(226, 232, 240, 1);
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
  background-color: rgb(105 122 128);
  opacity: 1;
  &:hover {
    background-color: rgba(226, 232, 240, 0.7);
  }
`;
const OptionContainer = styled.div`
  padding: 8px 16px;
  color: var(--White, #fff);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  &:hover {
    color: var(--Secondary-Dark-Color, #697a80);
  }
`;
