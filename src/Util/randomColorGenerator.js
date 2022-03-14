export const randomColorGenerator = (format = "hex") => {
  switch (format) {
    case "hsl":
      return "(,,)";
    case "rgb":
      return "(,,)";
    case "hex":
    default:
      let maxColorVal = 0xffffff;
      let randColor = Math.floor(Math.random() * maxColorVal)
        .toString(16)
        .padStart(6, "0")
        .toUpperCase();
      return `#${randColor}`;
  }
};
