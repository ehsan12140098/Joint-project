import useEnglishNumbers from 'hooks/useEnglishNumbers';
import { createElement } from 'react';

export default function BisanInput({
  placeholder,
  label,
  value,
  onChange,
  items,
  type = 'input',
  style = {},
  inputMode = 'text',
}) {
  let input;
  switch (type) {
    case 'input':
      input = BisanInputTextField;
      break;
    case 'text-area':
      input = BisanInputTextArea;
      break;
    case 'select':
      input = BisanInputSelect;
      break;

    default:
      input = BisanInputTextField;
      break;
  }

  // switch (type) {
  //   case 'input':
  //     input = (
  //       <input
  //         placeholder={placeholder}
  //         value={value}
  //         onChange={e => onChange(e.target.value)}
  //         style={{
  //           width: '100%',
  //           outline: 'none',
  //           border: 'none',
  //           // border: '1px solid red',
  //           height: '100%',
  //           fontFamily: 'inherit',
  //           color: 'rgb(113, 113, 122)',
  //           padding: '8px 24px',
  //           // border: '1px solid red',
  //           borderRadius: '24px',
  //           ...style,
  //         }}
  //       />
  //     );
  //     break;

  //   case 'text-area':
  //     input = (
  //       <textarea
  //         value={value}
  //         onChange={e => onChange(e.target.value)}
  //         style={{
  //           width: '100%',
  //           outline: 'none',
  //           border: 'none',
  //           height: '100%',
  //           fontFamily: 'inherit',
  //           color: 'rgb(113, 113, 122)',
  //           resize: 'vertical',
  //           padding: '8px 24px',
  //           borderRadius: '24px',
  //           ...style,
  //         }}
  //       />
  //     );
  //     break;

  //   case 'select':
  //     input = (
  //       <select
  //         style={{
  //           width: '100%',
  //           outline: 'none',
  //           border: 'none',
  //           height: '100%',
  //           fontFamily: 'inherit',
  //           color: 'rgb(113, 113, 122)',
  //           resize: 'vertical',
  //           // padding: '8px 24px',
  //           borderRadius: '24px',
  //           // border: '1px solid red',
  //           ...style,
  //         }}
  //       >
  //         <option>test 2</option>
  //         <option>jalili</option>
  //       </select>
  //     );
  //     break;

  //   default:
  //     input = (
  //       <input
  //         placeholder={placeholder}
  //         value={value}
  //         onChange={e => onChange(e.target.value)}
  //         style={{
  //           width: '100%',
  //           outline: 'none',
  //           border: 'none',
  //           height: '100%',
  //           fontFamily: 'inherit',
  //           color: 'rgb(113, 113, 122)',
  //           padding: '8px 24px',
  //           // border: '1px solid red',
  //           borderRadius: '24px',
  //         }}
  //       />
  //     );
  //     break;
  // }

  return (
    <div
      style={{
        width: '100%',
        border: '1px solid rgb(229, 231, 235)',
        borderRadius: '24px',
        position: 'relative',
        padding: type === 'select' ? '8px 24px' : '0',
      }}
    >
      <label
        style={{
          fontSize: '12px',
          lineHeight: '16px',
          position: 'absolute',
          // border: '1px solid red',
          top: '0',
          right: '20px',
          // transform: 'matrix(1, 0, 0, 1, 0, -12)',
          transform: 'translateY(-12px)',
          padding: '4px',
          backgroundColor: '#fff',
        }}
      >
        {label}
      </label>
      {/* {input} */}
      {createDynamicComponent(input, {
        value,
        onChange,
        style,
        placeholder,
        items,
        inputMode,
      })}
    </div>
  );
}

function BisanInputTextField({
  value,
  onChange,
  style,
  placeholder,
  inputMode,
}) {
  const convertToEnglish = useEnglishNumbers();

  const handleInputChange = e => {
    const { value } = e.target;
    // onChange(value);
    if (inputMode === 'text') onChange(value);
    else if (inputMode === 'number') {
      if (/^[0-9۰-۹,]*$/.test(value))
        onChange(convertToEnglish(value.split(',').join('')));
    }
  };
  return (
    <input
      placeholder={placeholder}
      value={value}
      onChange={handleInputChange}
      // type={inputMode}
      // inputMode={inputMode}
      style={{
        width: '100%',
        outline: 'none',
        border: 'none',
        height: '100%',
        fontFamily: 'inherit',
        color: 'rgb(113, 113, 122)',
        padding: '8px 24px',
        // border: '1px solid red',
        borderRadius: '24px',
        ...style,
      }}
    />
  );
}

function BisanInputTextArea({ value, onChange, style }) {
  return (
    <textarea
      value={value}
      onChange={e => onChange(e.target.value)}
      style={{
        width: '100%',
        outline: 'none',
        border: 'none',
        height: '100%',
        fontFamily: 'inherit',
        color: 'rgb(113, 113, 122)',
        resize: 'vertical',
        padding: '8px 24px',
        borderRadius: '24px',
        ...style,
      }}
    />
  );
}

function BisanInputSelect({ value, onChange, style, items }) {
  function handleInputChange(e) {
    console.log('🚀 ~ handleInputChange ~ e:', e.target.value);
  }
  return (
    <select
      style={{
        width: '100%',
        outline: 'none',
        border: 'none',
        height: '100%',
        fontFamily: 'inherit',
        color: 'rgb(113, 113, 122)',
        resize: 'vertical',
        borderRadius: '24px',
        ...style,
      }}
      onChange={e => onChange(e.target.value)}
      value={value}
    >
      {items.map(({ optionValue, optionText }) => (
        <option
          key={optionValue}
          value={optionValue}
          style={{ fontSize: '16px', padding: '0 2px 1px' }}
        >
          {optionText}
        </option>
      ))}
    </select>
  );
}

const createDynamicComponent = (component, props) => {
  return createElement(component, props);
};

// function child1() {
//   return <div>1</div>;
// }
// function child2() {
//   return <div>2</div>;
// }
// function child3() {
//   return <div>3</div>;
// }

// function parent() {
//   return (
//     <>
//       {[1, 2, 3].map(item => {
//         createDynamicComponent('child' + item, { style: {} });
//         // if (item === 1) return <child1 style={{}} />;
//         // if (item === 2) return <child2 style={{}} />;
//         // if (item === 3) return <child3 style={{}} />;

//         // return <div>wrong component</div>;
//       })}
//     </>
//   );
// }
