import React from "react";
import styled from "styled-components";

const P = styled.p`
  text-align: center;
  font-size: 1.5rem;
  color:${({color}) => color ? color : "#a8a8a8" };
  padding: 3px 8px;
`;

export default P;