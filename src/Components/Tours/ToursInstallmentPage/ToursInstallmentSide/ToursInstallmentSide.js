import { useState } from 'react';
import { Grid } from '@mui/material';
import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import BisanCard from 'Components/shared/UI/BisanCard/BisanCard';
import BisanInput from 'Components/shared/UI/BisanInput/BisanInput';
import styled from 'styled-components';
import usePriceCommaSeparator from 'hooks/usePriceCommaSeparator';
import useEnglishNumbers from 'hooks/useEnglishNumbers';

export default function ToursInstallmentSide() {
  const [installmentData, setInstallmentData] = useState({
    price: '',
    installment: 2,
    paymentType: 'suggested',
    firstPay: '',
  });

  const priceWithComma = usePriceCommaSeparator();
  const convertToEnglish = useEnglishNumbers();

  const handleInstallmentDataChange = (key, value) => {
    // console.log('🚀 ~ handleInstallmentDataChange ~ key:', key, value);
    setInstallmentData(prev => ({ ...prev, [key]: value }));
  };

  const handleFirstPayChange = (key, value) => {
    if (/^[0-9۰-۹,]*$/.test(value))
      handleInstallmentDataChange(
        key,
        convertToEnglish(value.split(',').join(''))
      );
  };

  const handlePaymentTypeChange = (key, value) => {
    if (value === 'suggested') {
      handleInstallmentDataChange('firstPay', '');
    }
    handleInstallmentDataChange(key, value);
  };

  const isCustomAndEmpty =
    installmentData.paymentType === 'custom' && !installmentData.firstPay;

  const inputs = [
    {
      key: 'price',
      label: 'مبلغ تور (تومان)',
      placeholder: 'پاسخ شما',
      type: 'input',
      // inputMode: 'numeric',
      inputMode: 'number',
      title: 'محاسبه مبلغ',
      inputCols: 12,
      titleCols: 12,
      spacing: 2,
      value: priceWithComma(installmentData.price),
    },
    {
      key: 'installment',
      label: '',
      placeholder: '',
      items: [
        {
          optionValue: 2,
          optionText: '2 قسط',
        },
        {
          optionValue: 3,
          optionText: '3 قسط',
        },
        {
          optionValue: 4,
          optionText: '4 قسط',
        },
        {
          optionValue: 5,
          optionText: '5 قسط',
        },
        {
          optionValue: 6,
          optionText: '6 قسط',
        },
        {
          optionValue: 7,
          optionText: '7 قسط',
        },
        {
          optionValue: 8,
          optionText: '8 قسط',
        },
        {
          optionValue: 9,
          optionText: '9 قسط',
        },
      ],
      value: installmentData.installment,
      type: 'select',
      title: 'تعداد اقساط:',
      inputCols: 7.5,
      titleCols: 4.5,
      spacing: 4,
      style: {
        color: '#000',
        fontSize: '16px',
      },
    },
  ];

  const firstPay = installmentData.firstPay
    ? installmentData.firstPay
    : installmentData.price / 2;
  // console.log('🚀 ~ ToursInstallmentSide ~ firstPay:', firstPay);

  const remaining = installmentData.price - installmentData.firstPay;

  const eachInstallment =
    remaining / installmentData.installment + (remaining * 4) / 100;
  // console.log('🚀 ~ ToursInstallmentSide ~ eachInstallment:', eachInstallment);

  const totalInstallments = eachInstallment * installmentData.installment;

  const purchaseDetails = [
    {
      text: 'مبلغ نقدی پیش پرداخت :',
      price: isCustomAndEmpty
        ? '--'
        : installmentData.price
        ? priceWithComma(firstPay)
        : '--',
    },
    {
      text: 'مبلغ هر قسط :',
      price: isCustomAndEmpty
        ? '--'
        : installmentData.price
        ? priceWithComma(Math.floor(eachInstallment))
        : '--',
    },
    {
      text: 'جمع کل مبلغ اقساط :',
      price: isCustomAndEmpty
        ? '--'
        : installmentData.price
        ? priceWithComma(totalInstallments)
        : '--',
    },
    {
      text: 'قیمت تمام شده تور :',
      price: isCustomAndEmpty
        ? '--'
        : installmentData.price
        ? priceWithComma(Number(totalInstallments) + Number(firstPay))
        : '--',
    },
  ];

  return (
    <div
      style={{
        // border: '1px solid red',
        position: 'sticky',
        top: '80px',
      }}
    >
      <BisanCard sx={{ boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 20px 0px' }}>
        <Grid container spacing={4}>
          {inputs.map(
            ({ inputCols, titleCols, title, spacing, key, ...props }) => (
              <Grid
                key={title}
                item
                xs={12}
                sx={
                  {
                    // border: '1px solid red'
                  }
                }
              >
                <Grid container spacing={spacing} alignItems="center">
                  <Grid
                    item
                    xs={titleCols}
                    sx={
                      {
                        // border: '1px solid blue'
                      }
                    }
                  >
                    <SectionTitle style={{ fontSize: '16px' }}>
                      {title}
                    </SectionTitle>
                  </Grid>
                  <Grid
                    item
                    xs={inputCols}
                    sx={
                      {
                        // border: '1px solid blue'
                      }
                    }
                  >
                    <BisanInput
                      {...props}
                      // value={installmentData[key]}
                      onChange={value =>
                        handleInstallmentDataChange(key, value)
                      }
                    />
                  </Grid>
                </Grid>
              </Grid>
            )
          )}
        </Grid>
        <div
          style={{
            marginTop: '16px',
            paddingTop: '16px',
            borderTop: ' 1px solid rgb(229, 231, 235)',
          }}
        >
          <SectionTitle style={{ fontSize: '16px' }}>پیش پرداخت:</SectionTitle>
          <div
            style={{
              marginTop: '8px',
              display: 'flex',
              borderRadius: '24px',
              boxShadow: 'rgba(0, 0, 0, 0.05) 0px 5px 20px 0px',
              color: 'rgb(105, 122, 128)',
              cursor: 'pointer',
              overflow: 'hidden',
            }}
          >
            <StyledTabItem
              style={{
                backgroundColor:
                  installmentData.paymentType === 'suggested'
                    ? 'rgb(227, 235, 237)'
                    : '#fff',
              }}
              onClick={() =>
                handlePaymentTypeChange('paymentType', 'suggested')
              }
            >
              پیشنهادی
            </StyledTabItem>
            <StyledTabItem
              style={{
                backgroundColor:
                  installmentData.paymentType === 'custom'
                    ? 'rgb(227, 235, 237)'
                    : '#fff',
              }}
              onClick={() => handlePaymentTypeChange('paymentType', 'custom')}
            >
              انتخابی
            </StyledTabItem>
          </div>
          {installmentData.paymentType === 'custom' && (
            <div style={{ marginTop: '16px', lineHeight: '24px' }}>
              <label htmlFor="firstPay"> مبلغ پیش پرداخت:</label>
              <div>
                <input
                  id="firstPay"
                  value={priceWithComma(installmentData.firstPay)}
                  onChange={e =>
                    handleFirstPayChange('firstPay', e.target.value)
                  }
                  style={{
                    outline: 'none',
                    borderRadius: '6px',
                    padding: '4px',
                    border: '1px solid rgb(209, 213, 219)',
                    width: '199px',
                    height: '34px',
                    marginLeft: '10px',
                    fontFamily: 'inherit',
                  }}
                />
                تومان
              </div>
            </div>
          )}

          <div
            style={{
              marginTop: '8px',
              color: 'rgb(113, 113, 122)',
              lineHeight: '24px',
            }}
          >
            {purchaseDetails.map(item => (
              <div
                key={item.text}
                style={{
                  display: 'flex',
                  justifyContent: 'space-between',
                  alignItems: 'center',
                }}
              >
                <div>{item.text}</div>
                <div style={{ color: 'rgb(90, 98, 58)', fontWeight: '700' }}>
                  {item.price}
                </div>
              </div>
            ))}
          </div>
          {isCustomAndEmpty && (
            <div
              style={{
                color: 'rgb(239, 68, 68)',
                fontSize: '12px',
                marginTop: '10px',
              }}
            >
              مقدار پیش پرداخت باید مشخص شود
            </div>
          )}
        </div>
      </BisanCard>
    </div>
  );
}

const StyledTabItem = styled.div`
  padding: 8px 0;
  width: 50%;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`;
