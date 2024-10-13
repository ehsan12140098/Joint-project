import React from "react";
import { digitsEnToFa } from "persian-tools";

export const PersianNumberComponent = ({ number }) => {
  const persianNumber = digitsEnToFa(number);

  return <span>{persianNumber}</span>;
};
