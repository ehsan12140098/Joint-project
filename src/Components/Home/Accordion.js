import React from "react";
import useOpenController from "../Home/useOpenController";
import styled from "styled-components";

export const Accordion = ({ section, key }) => {
  const { isOpen, toggle } = useOpenController(false);
  // console.log(section);
  return (
    <Mainaccordion>
      <AccordionContainer>
        <ExpendableColumn
          question={section.question}
          isOpen={isOpen}
          toggle={toggle}
        />
        {isOpen && <TextSection text={section.answer} />}
      </AccordionContainer>
    </Mainaccordion>
  );
};

export const ExpendableColumn = ({ question, isOpen, toggle }) => {
  return (
    <Columncontainer onClick={toggle}>
      <Columntext>{question}</Columntext>
      <Expendablebutton>
        <span
          class="material-symbols-outlined"
          style={{
            transform: `rotate(${isOpen ? 180 : 0}deg)`,
            transition: "all 0.25s",
          }}
        >
          expand_more
        </span>
      </Expendablebutton>
    </Columncontainer>
  );
};

export const TextSection = ({ text }) => {
  return (
    <Textcontainer>
      <TextItSelf>{text}</TextItSelf>
    </Textcontainer>
  );
};

const Mainaccordion = styled.div`
  cursor: pointer;
`;

const AccordionContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 24px;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  border-radius: 30px;

  /* background-color: purple; */
`;

const Columncontainer = styled.div`
  display: flex;
  justify-content: flex-end;
  border-radius: 30px;
  background: var(--White, #fff);
  font-size: 16px !important;
  font-family: "Iransans" !important;
  width: 100%;
  line-height: 1.5rem;
`;
const Columntext = styled.div`
  text-align: right;
  display: flex;
  justify-content: center;
  align-items: center;
  direction: rtl;
`;
const Expendablebutton = styled.div`
  /* background-color: yellow; */
  width: 44px;
  height: 44px;
  border-radius: 50%;
  border: 1px solid white;
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  /* filter: drop-shadow(0px 10px 10px rgba(0, 0, 0, 0.05)); */
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 12px 16px;
`;

const Textcontainer = styled.div`
  /* background-color: orange; */
  padding: 20px;
  padding: 0 32px;
  line-height: 1.5rem;
  font-size: 16px !important;
  font-family: "Iransans" !important;
  text-align: right;
  /* max-height: 350px; */
  opacity: 1;
  animation-name: textanimate;
  animation-duration: 1s;
  @keyframes textanimate {
    0% {
      opacity: 0;
      max-height: 15px;
    }
    100% {
      opacity: 1;
      max-height: 350px;
    }
  }
`;
const TextItSelf = styled.div`
  /* background-color: red; */
  padding: 10px 0px;
  direction: rtl;
`;
