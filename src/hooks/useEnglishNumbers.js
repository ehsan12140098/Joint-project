export default function useEnglishNumbers() {
  function convertToEnglishNumber(persianNum) {
    const map = {
      '۰': '0',
      '۱': '1',
      '۲': '2',
      '۳': '3',
      '۴': '4',
      '۵': '5',
      '۶': '6',
      '۷': '7',
      '۸': '8',
      '۹': '9',
    };
    const str = String(persianNum);
    return str.replace(/[۰-۹]/g, m => map[m]);
  }

  return convertToEnglishNumber;
}
