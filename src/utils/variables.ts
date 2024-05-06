export const adaptiveValue = (
  property: string,
  startSize: number,
  minSize: number
) => {
  const addSize = startSize - minSize;
  return `
		${property}: ${startSize}px;
		@media (max-width: 1440px) {
			${property}: calc(${minSize}px + ${addSize} * ((100vw - 420px) / (1440 - 420)));
		}
`;
};

const green = "#8BC34A";
const darkGreen = "#388E3C";
const sky = "#F2F9F1";
const greenLayer = "#DDEEDF";
const gray = "#616161";
const red = "#FC6767";
const white = "#fff";
const asphalt = "#D3CDCD";

export const colors = {
  green,
  darkGreen,
  sky,
  greenLayer,
  gray,
  red,
  white,
  asphalt,
};
