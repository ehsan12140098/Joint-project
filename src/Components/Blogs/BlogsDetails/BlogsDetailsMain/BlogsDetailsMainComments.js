import { useState } from 'react';
import SectionTitle from 'Components/shared/SectionTitle/SectionTitle';
import { Grid } from '@mui/material';
import styled from 'styled-components';
import BisanInput from 'Components/shared/UI/BisanInput/BisanInput';
import useIsDesktopDisplay from 'hooks/useIsDesktopDisplay';

export default function BlogsDetailsComments() {
  const isSmOrBigger = useIsDesktopDisplay('sm');
  const [commentData, setCommentData] = useState({
    name: '',
    lastName: '',
    comment: '',
  });

  // const handleNameChange = value => {
  //   // const { value } = e.target;
  //   // console.log('🚀 ~ handleNameChange ~ value:', value);
  //   setCommentData(prev => ({ ...prev, name: value }));
  //   // setCommentData(function (prev) { return prev});
  // };

  // const handleLastNameChange = value => {
  //   // const { value } = e.target;
  //   // console.log('🚀 ~ handleLastNameChange ~ value:', value);
  //   setCommentData(prev => ({ ...prev, lastName: value }));
  // };

  // commentData['name'];

  const inputs = [
    { key: 'name', label: 'نام', placeholder: 'نام', cols: 6 },
    {
      key: 'lastName',
      label: 'نام خانوادگی',
      placeholder: 'نام خانوادگی',
      cols: 6,
    },
    {
      key: 'comment',
      label: 'متن پیام',
      placeholder: '',
      type: 'text-area',
      cols: 12,
    },
  ];

  const handleCommentDataChange = (key, value) => {
    // console.log('🚀 ~ handleCommentDataChange ~ value:', value);
    // console.log('🚀 ~ handleCommentDataChange ~ key:', key);
    setCommentData(prev => ({ ...prev, [key]: value }));
  };

  const handleFormSubmit = e => {
    e.preventDefault();
    alert(JSON.stringify(commentData));
    // console.log('🚀 ~ handleFormSubmit ~ commentData:', commentData);
  };

  // function setCommentData(func) {
  // return func;
  // let state = {
  //   name: '',
  //   lastName: '',
  // };
  // // setTimeout(() => {
  // state = func(state);
  // console.log('🚀 ~ //setTimeout ~ state:', state);
  // }, 2000);
  // }

  // function handleStateUpdate(prev) {
  // return {
  //   ...prev,
  //   name: 'alireza',
  // };
  // }

  // const newFunc = setCommentData(handleStateUpdate);
  // newFunc();
  // function test(x) {
  //   setTimeout(() => {
  //     x('Sina');
  //   }, 2000);
  // }

  // function callback(z) {
  //   console.log('callback called', z);
  // }

  // test(z => console.log('callback called', z));

  return (
    <div style={{ marginTop: '2.5rem' }}>
      {isSmOrBigger && (
        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'space-between',
          }}
        >
          <SectionTitle>نظرات</SectionTitle>
          <span
            style={{
              color: 'rgb(107, 114, 128)',
              fontSize: '13px',
              lineHeight: '20px',
            }}
          >
            28 نظر ثبت شده
          </span>
        </div>
      )}
      <form
        style={{
          marginTop: '20px',
          // display: 'flex',
          // flexWrap: 'wrap',
          // gap: '20px',
        }}
        onSubmit={handleFormSubmit}
      >
        <Grid container spacing={4}>
          {inputs.map(({ key, cols, ...props }) => (
            <Grid item xs="12" sm={cols} key={key}>
              <BisanInput
                // key={input.key}
                // label={input.label}
                // placeholder={input.placeholder}
                {...props}
                value={commentData[key]}
                onChange={value => handleCommentDataChange(key, value)}
              />
            </Grid>
          ))}
        </Grid>
        {/* {inputs.map(({ key, size, ...props }) => (
          <div key={key} style={{ width: size * 100 + '%', padding: '10px' }}>
            <BlogsDetailsCommentsInput
              // key={input.key}
              // label={input.label}
              // placeholder={input.placeholder}
              {...props}
              value={commentData[key]}
              onChange={value => handleCommentDataChange(key, value)}
            />
          </div>
        ))} */}
        {/* <BlogsDetailsCommentsInput
          label="نام"
          placeholder="نام"
          value={commentData.name}
          // onChange={handleNameChange}
          onChange={value => handleCommentDataChange('name', value)}
        />
        <BlogsDetailsCommentsInput
          label="نام خانوادگی"
          placeholder="نام خانوادگی"
          value={commentData.lastName}
          // onChange={handleLastNameChange}
          onChange={value => handleCommentDataChange('lastName', value)}
        /> */}
        <StyledSubmitButton
          type="submit"
          // onClick={handleFormSubmit}
        >
          ارسال
        </StyledSubmitButton>
      </form>
    </div>
  );
}

// export default store(BlogsDetailsComments)('');

// function store(component) {
//   return function (state) {};
// }

const StyledSubmitButton = styled.button`
  background-color: rgb(237, 224, 89);
  border: none;
  padding: 8px 16px;
  border-radius: 24px;
  font-size: 13px;
  font-weight: 700;
  color: rgb(90, 98, 58);
  font-family: inherit;
  margin-top: 20px;
  cursor: pointer;
  transition: 0.3s;

  &:hover {
    background-color: rgb(254, 240, 138);
  }
`;
