import { useState } from "react";
import { randomColorGenerator } from "Util/randomColorGenerator";

export const useRandomColor = () => {
  const [tabColor, setTabColor] = useState(randomColorGenerator());

  console.log(setTabColor)
  return tabColor;
};
