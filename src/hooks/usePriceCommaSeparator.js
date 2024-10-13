import usePersianNumber from './usePersianNumber';

export default function usePriceCommaSeparator() {
  const convertToPersian = usePersianNumber();

  function addCommaSeparator(price) {
    return convertToPersian(
      price.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
    );
  }

  return addCommaSeparator;
}
