import styled from "styled-components";
import { BrownSquareMark } from "../../Assets/Svgs/BrownSquareMark";

export const BisanServices = () => {
  return (
    <BisanServicesHolder>
      <BisanServicesTitle>خدمات بیسان سیر</BisanServicesTitle>
      <EachBisanServiceHolder>
        <EachBisanServiceText>
          رزرو و صدور بلیط تمامی ایرلاین ها
        </EachBisanServiceText>
        <BrownSquareMark />
      </EachBisanServiceHolder>
      <EachBisanServiceHolder>
        <EachBisanServiceText>
          رزرو و صدور بلیط تمامی ایرلاین ها
        </EachBisanServiceText>
        <BrownSquareMark />
      </EachBisanServiceHolder>
      <EachBisanServiceHolder>
        <EachBisanServiceText>
          رزرو و صدور بلیط تمامی ایرلاین ها
        </EachBisanServiceText>
        <BrownSquareMark />
      </EachBisanServiceHolder>
      <EachBisanServiceHolder>
        <EachBisanServiceText>
          رزرو و صدور بلیط تمامی ایرلاین ها
        </EachBisanServiceText>
        <BrownSquareMark />
      </EachBisanServiceHolder>
      <EachBisanServiceHolder>
        <EachBisanServiceText>
          رزرو و صدور بلیط تمامی ایرلاین ها
        </EachBisanServiceText>
        <BrownSquareMark />
      </EachBisanServiceHolder>
      <EachBisanServiceHolder>
        <EachBisanServiceText>
          رزرو و صدور بلیط تمامی ایرلاین ها
        </EachBisanServiceText>
        <BrownSquareMark />
      </EachBisanServiceHolder>
    </BisanServicesHolder>
  );
};

const BisanServicesHolder = styled.div`
  width: 100%;
  border-radius: 30px;
  background: var(--White, #fff);
  box-shadow: 0px 5px 20px 0px rgba(0, 0, 0, 0.05);
  padding: 30px 15px 30px 30px;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  gap: 20px;
  @media (min-width: 640px) and (max-width: 1024px) {
    width: 35%;
  }
`;
const BisanServicesTitle = styled.div`
  color: var(--Primery-Dark-Color, #5a623a);
  text-align: right;
  font-family: IRANSans;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
`;
const EachBisanServiceHolder = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;
`;
const EachBisanServiceText = styled.div`
  color: var(--80, #333);
  text-align: right;
  font-family: IRANSans;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: normal;
`;
