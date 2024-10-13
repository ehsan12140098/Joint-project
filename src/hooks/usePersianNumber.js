export default function usePersianNumber() {
  function convertToPersianNumber(englishNum) {
    const persianDigits = ['۰', '۱', '۲', '۳', '۴', '۵', '۶', '۷', '۸', '۹'];
    const str = String(englishNum);
    return str.replace(/\d/g, m => persianDigits[parseInt(m)]);
  }

  return convertToPersianNumber;
}
