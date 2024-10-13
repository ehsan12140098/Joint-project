import React, { useState } from "react";
import styled from "styled-components";
import { ExpandArrow } from "../../Assets/Svgs/ExpandArrow";
import "./CustomSelect.css";

export const CustomSelectComponent = ({ options, onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState(null);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  const handleOptionClick = (option) => {
    setSelectedOption(option);
    setIsOpen(false);
    onSelect(option);
  };

  return (
    <div className="custom-select-container">
      <div className="selected-option" onClick={toggleDropdown}>
        {selectedOption ? selectedOption.label : "2 قسط"}
      </div>
      {isOpen && (
        <div className="holder-options-container">
          <div className="options-container">
            {options.map((option) => (
              <div
                key={option.value}
                className="option"
                onClick={() => handleOptionClick(option)}
              >
                {option.label}
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

const InstallmentCalculationHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 25px;
  padding: 25px;
  border-radius: 35px;
  background: var(--White, #fff);

  /* Main */
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
`;

const AmountCalculation = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const TourAmountFormHolder = styled.div`
  position: relative;
  width: 100%;
  height: 45px;
  border-radius: 28px;
  border: 1px solid var(--30, #b3b3b3);
  background: var(--White, #fff);
`;
const TourAmountFormText = styled.div`
  position: absolute;
  top: -12px;
  right: 36px;
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  background-color: white;
`;
const TourAmountInput = styled.input`
  position: absolute;
  width: 80%;
  right: 36px;
  top: 8px;
  height: 32px;
  border: none;
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
  outline: none;
  ::placeholder {
    color: rgba(0, 0, 0, 0.45);
    text-align: right;

    /* Paragraph */
    font-family: IRANSans;
    font-size: 30px;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
  }
`;

const InstallmentsNumberHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  /* border: 2px solid green; */
`;

const InstallmentsNumberTitle = styled.div`
  width: 40%;
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;

const InstallmentsNumberContainer = styled.div`
  width: 63%;
  border-radius: 28px;
  border: 1px solid var(--20, #ccc);
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  padding: 12px 25px;
  border: 2px solid red;
`;

const InstallmentsNumberText = styled.div`
  color: var(--Dark-Color, rgba(0, 0, 0, 0.87));
  text-align: right;

  /* Sub Paragraph */
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Devider = styled.div`
  width: 100%;
  height: 1px;
  background-color: var(--10, #e6e6e6);
`;
const PrePaymentHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 10px;
`;
const PrePaymentTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const KindOfPrepayment = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-betweeen;
  height: 45px;
  width: 100%;
`;
const Selective = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  border-radius: 25px 0px 0px 25px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Secondary-Dark-Color, #697a80);
  text-align: center;
  background-color: white;

  /* Paragraph */
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const Suggested = styled.button`
  width: 50%;
  height: 100%;
  border: none;
  border-radius: 0px 25px 25px 0px;
  background: var(--S-50, #e3ebed);
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--Secondary-Dark-Color, #697a80);
  text-align: center;

  /* Paragraph */
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const CalculatedAmountsHolder = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 16px;
`;
const EachCalculatedAmountHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const CalculatedAmountText = styled.div`
  color: var(--50, #808080);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 640px) {
    font-size: 14px;
  }
`;
const CalculatedAmountNumber = styled.div`
  color: #5a623a;
  font-family: IRANSans(FaNum);
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
