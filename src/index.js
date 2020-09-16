import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";

const Box = styled.div`
  background-color: red;
  width: 200px;
  height: 200px;
  ${mediaQueries("md")`
    background-color: green;
  `};
  ${props => mediaQueries("md")(`width: ${props.width}px;`)}
`;

function App() {
  return <Box width={400} />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
