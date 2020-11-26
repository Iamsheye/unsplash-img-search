import React from "react";
import styled, { keyframes } from "styled-components";

const spin = keyframes`
  to {
    transform: rotate(360deg);
  }
`;

const StyledLoading = styled.div`
  border: 8px solid #e8e8e8;
  border-top: ${({color}) => `8px solid ${color}`};
  border-radius: 50%;
  width: 60px;
  height: 60px;
  animation: ${spin} 1s linear infinite;
`;

const Centre = styled.div`
  height: 75vh;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Loading = ({color}) => {
  return (
    <Centre>
      <StyledLoading color={color}/>
    </Centre>
  )
}
export default Loading;