import React from "react";
import ReactDOM from "react-dom";
import styled from "styled-components";
import { mediaQueries } from "./mediaQueries";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.css";

const Box = styled.div`
  /* background-color: red; */
  /* width: 200px; */
  height: 200px;
    /* ${mediaQueries("lg")`
   min-width:1000px;
  `}; */
    ${mediaQueries("md")`
   max-width:10px;
   display:flex;
  `};
    ${mediaQueries("sm")`
   max-width:10px;
   display:flex;
  `};
      ${mediaQueries("pg")`
   max-width:10px;
   display:flex;
  `};
  /* ${(props) => mediaQueries("md")(`width: ${props.width}px;`)} */
  ${(props) => ` background-color: ${props.color};`}
  ${(props) => ` height: ${props.height}px;`}

`;

function App() {
  return (
    <Row className="border border-dark">
      <Col md={6} className="center-block">
        <Box color={"red"} height={300} />
      </Col>
      <Col md={6} className="center-block">
        <Box color={"blue"} height={300} />
      </Col>
    </Row>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
