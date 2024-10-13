import React from "react";
import styled from "styled-components";
import { Custom } from "../../Assets/Svgs/Custom";

export const VisaReasons = () => {
  return (
    <VisaReasonsHolder>
      <VisaReasonsTitle>چرا بهتر است ما برای شما ویزا بگیریم؟</VisaReasonsTitle>
      <EachReasonHolder>
        <EachReasonTextHolder>
          <EachReasonTitle>اطلاعات به روز شرایط اخذ ویزا</EachReasonTitle>
          <EachReasonExplanation>
            ما بی‌وقفه در حال بررسی آخرین تحولات فی‌ما‌بین کشورها در جهت اخذ
            ویزا هستیم تا بتوانیم بهترین روش را پیشنهاد دهیم
          </EachReasonExplanation>
        </EachReasonTextHolder>
        <EachReasonGraySvgHolder>
          <Custom />
        </EachReasonGraySvgHolder>
      </EachReasonHolder>
      <EachReasonHolder>
        <EachReasonTextHolder>
          <EachReasonTitle>اطلاعات به روز شرایط اخذ ویزا</EachReasonTitle>
          <EachReasonExplanation>
            ما بی‌وقفه در حال بررسی آخرین تحولات فی‌ما‌بین کشورها در جهت اخذ
            ویزا هستیم تا بتوانیم بهترین روش را پیشنهاد دهیم
          </EachReasonExplanation>
        </EachReasonTextHolder>
        <EachReasonGraySvgHolder>
          <Custom />
        </EachReasonGraySvgHolder>
      </EachReasonHolder>
      <EachReasonHolder>
        <EachReasonTextHolder>
          <EachReasonTitle>اطلاعات به روز شرایط اخذ ویزا</EachReasonTitle>
          <EachReasonExplanation>
            ما بی‌وقفه در حال بررسی آخرین تحولات فی‌ما‌بین کشورها در جهت اخذ
            ویزا هستیم تا بتوانیم بهترین روش را پیشنهاد دهیم
          </EachReasonExplanation>
        </EachReasonTextHolder>
        <EachReasonGraySvgHolder>
          <Custom />
        </EachReasonGraySvgHolder>
      </EachReasonHolder>
      <EachReasonHolder>
        <EachReasonTextHolder>
          <EachReasonTitle>اطلاعات به روز شرایط اخذ ویزا</EachReasonTitle>
          <EachReasonExplanation>
            ما بی‌وقفه در حال بررسی آخرین تحولات فی‌ما‌بین کشورها در جهت اخذ
            ویزا هستیم تا بتوانیم بهترین روش را پیشنهاد دهیم
          </EachReasonExplanation>
        </EachReasonTextHolder>
        <EachReasonGraySvgHolder>
          <Custom />
        </EachReasonGraySvgHolder>
      </EachReasonHolder>
      <EachReasonHolder>
        <EachReasonTextHolder>
          <EachReasonTitle>اطلاعات به روز شرایط اخذ ویزا</EachReasonTitle>
          <EachReasonExplanation>
            ما بی‌وقفه در حال بررسی آخرین تحولات فی‌ما‌بین کشورها در جهت اخذ
            ویزا هستیم تا بتوانیم بهترین روش را پیشنهاد دهیم
          </EachReasonExplanation>
        </EachReasonTextHolder>
        <EachReasonGraySvgHolder>
          <Custom />
        </EachReasonGraySvgHolder>
      </EachReasonHolder>
      <EachReasonHolder>
        <EachReasonTextHolder>
          <EachReasonTitle>اطلاعات به روز شرایط اخذ ویزا</EachReasonTitle>
          <EachReasonExplanation>
            ما بی‌وقفه در حال بررسی آخرین تحولات فی‌ما‌بین کشورها در جهت اخذ
            ویزا هستیم تا بتوانیم بهترین روش را پیشنهاد دهیم
          </EachReasonExplanation>
        </EachReasonTextHolder>
        <EachReasonGraySvgHolder>
          <Custom />
        </EachReasonGraySvgHolder>
      </EachReasonHolder>
      <EachReasonHolder>
        <EachReasonTextHolder>
          <EachReasonTitle>اطلاعات به روز شرایط اخذ ویزا</EachReasonTitle>
          <EachReasonExplanation>
            ما بی‌وقفه در حال بررسی آخرین تحولات فی‌ما‌بین کشورها در جهت اخذ
            ویزا هستیم تا بتوانیم بهترین روش را پیشنهاد دهیم
          </EachReasonExplanation>
        </EachReasonTextHolder>
        <EachReasonGraySvgHolder>
          <Custom />
        </EachReasonGraySvgHolder>
      </EachReasonHolder>
    </VisaReasonsHolder>
  );
};

const VisaReasonsHolder = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 25px;
  /* border: 3px solid red; */
`;

const VisaReasonsTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const EachReasonHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;
const EachReasonTextHolder = styled.div`
  width: 77%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;
const EachReasonTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const EachReasonExplanation = styled.div`
  color: var(--50, #808080);
  text-align: right;
  font-family: IRANSans;
  font-size: 12.8px;
  font-style: normal;
  font-weight: 300;
  line-height: normal;
`;
const EachReasonGraySvgHolder = styled.div`
  width: 18%;
  height: 100px;
  border-radius: 35px;
  background: #e3ebed;
  display: flex;
  justify-content: center;
  align-items: center;
`;
