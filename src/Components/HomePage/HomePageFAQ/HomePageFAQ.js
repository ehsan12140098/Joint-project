import { useState } from 'react';

import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
import HomePageContainer from '../HomePageContainer';
import HomePageSectionTitle from '../HomePageSectionTitle';
import { ChevronDown } from 'Assets/Svgs/Icons';
import HomePageButtonLink from '../HomePageButtonLink';

const questions = [
  {
    question: 'برای کودکان از چه سنی تست PCR پرواز ضروری است؟',
    answer:
      'با توجه به قوانین موجود فقط کودکان بالای 12 سال نیاز به انجام تست دارند.',
    id: 1,
  },
  {
    question: 'حداقل اعتبار مورد نیاز پاسپورت برای سفرهای خارجی چقدر است؟',
    answer:
      'حداقل اعتبار مورد نیاز پاسپورت برای سفر به اغلب کشورهای دنیا بیش از 6 ماه است. بر این اساس اگر شما قصد خرید یک بلیط هواپیما به مقصد استانبول را داشته باشید باید حداقل 6 ماه زمان به تاریخ انقضای پاسپورت شما باقی مانده باشد. البته این زمان در خصوص سفرهای هوایی صادق است و اگر نوع سفر خارجی شما متفاوت باشد، قوانین موجود در این زمینه نیز کمی تغییر می کنند. برای مثال در سفر زمینی به کشور عراق اعتبار 2 ماهه پاسپورت نیز کافی می باشد، پس با توجه به کشور مقصد و نوع سفری که در پیش دارید قوانین متفاوتی وجود دارد.',
    id: 2,
  },
  {
    question:
      'مدت زمان اعتبار گواهی تست منفی PCR در زمان ورود به کشور مقصد چگونه است؟',
    answer:
      'هنگام ورود به کشور مقصد، از زمان صدور گواهی تست منفی PCR معمولا نباید بیشتر از ۷۲ ساعت گذشته باشد، اما قوانین بعضی از کشور‌ها متفاوت می‌باشد، در نتیجه بهتر است قبل از اقدام به سفر قوانین کشور مقصد را در سایت یاتا تراول سنتر (www.iatatravelcentre.com) بررسی نمایید.',
    id: 3,
  },
  {
    question: 'آیا ارزمسافرتی را می توان از آژانس های مسافرتی دریافت نمود ؟',
    answer:
      'خیر ، معمولا مسافران برای تهیه ارز مسافرتی باید مدارک سفر خود از جمله بلیط و ویزا را به صرافی ارائه داده و حواله ارزی دریافت کنند .',
    id: 4,
  },
  {
    question: 'مقدار بار مجاز هواپیما چقدر است؟',
    answer:
      'در پرواز های خارجی وابسته به ایرلاین انتخابی از 20 تا 30 کیلوگرم در اکونومی کلاس امکان حمل بار وجود دارد؛ البته در برخی از ایرلاین های بین المللی امکان حمل دو بسته 23 کیلوگرمی مقدور است. در پرواز های داخلی اما مقدار بار مجاز 15 الی 20 کیلوگرم است. بیش از این مقدار مشمول بر پرداخت هزینه بیشتر و قوانین اضافه بار است. البته میزان بار مجاز به کلاس پرواز شما نیز مرتبط بوده و با انتخاب کلاس های بیزنس و یا فرست کلاس امکان حمل بار بیشتری خواهید داشت.',
    id: 5,
  },
];

export default function HomePageFAQ() {
  const [selectedQuestion, setSelectedQuestion] = useState(-1);

  const exmample = () => 'salam';

  return (
    <HomePageContainer>
      <HomePageSectionTitle style={{ marginBottom: '20px' }}>
        سوالات متداول
      </HomePageSectionTitle>
      <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
        {questions.map((item, i) => {
          const isSelected = i === selectedQuestion;

          return (
            <BisanCard
              key={item.id}
              sx={{
                border: isSelected ? '1px solid rgb(250, 204, 21)' : 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'flex-start',
                  gap: '12px',
                }}
                onClick={() =>
                  setSelectedQuestion(selectedQuestion === i ? -1 : i)
                }
              >
                <div
                  style={{
                    width: '32px',
                    height: '32px',
                    borderRadius: '50%',
                    backgroundColor: 'rgb(249, 250, 251)',
                    filter:
                      'drop-shadow(rgba(0, 0, 0, 0.07) 0px 4px 3px) drop-shadow(rgba(0, 0, 0, 0.06) 0px 2px 2px)',

                    cursor: 'pointer',
                    flexShrink: '0',
                  }}
                >
                  <div
                    style={{
                      transform: isSelected ? 'rotate(180deg)' : 'rotate(0deg)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      width: '100%',
                      height: '100%',
                      transition: '300ms',
                    }}
                  >
                    <ChevronDown size="18" />
                  </div>
                </div>
                {/* {item.question} */}
                <div style={{ lineHeight: '24px' }}>
                  {item.question}
                  <div
                    style={{
                      marginTop: '16px',
                      lineHeight: '24px',
                      // border: '1px solid red',
                      overflow: 'hidden',
                      // height: isSelected ? '100px' : '0px',
                      maxHeight: isSelected ? '100px' : '0px',
                      transition: '300ms',
                    }}
                  >
                    {item.answer}
                  </div>
                </div>
              </div>
              {/* <div
                style={{
                  marginTop: '16px',
                  lineHeight: '24px',
                  border: '1px solid red',
                }}
              >
                {item.answer}
              </div> */}
            </BisanCard>
          );
        })}
      </div>

      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          paddingTop: '32px',
        }}
      >
        <HomePageButtonLink href="FAQ">سوالات بیشتر</HomePageButtonLink>
      </div>
    </HomePageContainer>
  );
}
