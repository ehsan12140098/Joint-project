import styled from "styled-components";
import { ROW, COLUMN_ALIGN_END__JUSTIFY_START } from "../../styles/FlexStyles";
import { MAIN_TEXT } from "../../styles/globalTypography";
import { EffectCardsSwiperComponent } from "./EffectCardsSwiperComponent";

export const EuropeTour = () => {
  return (
    <MainEuropeTour>
      <EuropeTourHolder>
        <StyledEffectCardsSwiperComponent />
        <EuropeTourContent>
          <EuropeTourText>
            <EuropeTourTitle>تور اروپا</EuropeTourTitle>
            <EuropeTourSubtitle>تور های امسال با بیسان سیر</EuropeTourSubtitle>
            <EuropeTourDescription>
              تور اروپا از محبوبیت بسیار بالایی در میان گردشگران برخوردار <br />
              است و هر ساله مسافران زیادی از سراسر دنیا راهی قاره سبز <br />{" "}
              می‌شوند تا از کشورهای مختلف این قاره زیبا و دیدنی مانند
              <br /> اسپانیا، فرانسه، ایتالیا و ... بازدید کنند.
            </EuropeTourDescription>
          </EuropeTourText>
          <EuropeTourButton>شرایط و قوانین</EuropeTourButton>
        </EuropeTourContent>
      </EuropeTourHolder>
    </MainEuropeTour>
  );
};

const MainEuropeTour = styled.div`
  width: 80%;
  background-color: #ffffff;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  @media (max-width: 640px) {
    flex-direction: column;
    gap: 30px;
  }
`;
const EuropeTourHolder = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-start;

  @media (max-width: 640px) {
    flex-direction: column-reverse;
    align-items: center;
    gap: 30px;
  }
`;
const EuropeTourContent = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: end;
  gap: 40px;
  /* border: 1px solid orange; */
  @media (max-width: 640px) {
    width: 100%;
    align-items: center;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 40%;
  }
`;
const EuropeTourText = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 5px;
`;
const EuropeTourTitle = styled.div`
  color: #000;
  text-align: right;
  font-family: IRANSans;
  font-size: 39.06px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  @media (max-width: 640px) {
    text-align: center;
  }
`;
const EuropeTourSubtitle = styled.p`
  color: #808080;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
  @media (max-width: 640px) {
    text-align: center;
  }
`;
const EuropeTourDescription = styled.p`
  color: #808080;
  text-align: right;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
const EuropeTourButton = styled.p`
  border: 0px;
  display: flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 35px;
  background: #ede059;
  box-shadow: 0px 10px 10px 0px rgba(0, 0, 0, 0.05);
  color: #5a623a;
  text-align: center;
  font-family: IRANSans;
  font-size: 16px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const StyledEffectCardsSwiperComponent = styled(EffectCardsSwiperComponent)`
  width: 60% !important;
  /* border: 3px solid brown; */
  @media (max-width: 640px) {
    width: 87% !important ;
  }
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 40%;
  }
`;
