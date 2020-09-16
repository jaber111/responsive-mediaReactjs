export const breakpoints = {
  sm: "320px",
  md: "480px",
  lg: "720px",
  xl: "960px",
  pg: "0px"
};

export const mediaQueries = (key) => {
  return (style) => `@media (min-width: ${breakpoints[key]}) { ${style} }`;
};
