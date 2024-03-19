/**
 * 스타일드 컴포넌트 css 스타일 적용
 */

import React from "react";
import styled, { keyframes } from "styled-components";

interface styledProps {
  $fontSize: string;
}

const animationRotate = keyframes`
  from {
    transform: rotate(0deg);
    border-radius: 0%;
  }
  50% {
    border-radius: 50%;
  }
  to {
    transform: rotate(360deg);
    border-radius: 0%;
  }
`;

const Emoji = styled.div<styledProps>`
  font-size: ${(props) => props.$fontSize};
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  height: 200px;
  width: 200px;
  background-color: red;
  animation: ${animationRotate} 1s linear infinite;

  span {
    font-size: 36px;
    &:hover {
      font-size: 64px;
    }
  }

  ${Emoji} {
    &:hover {
      font-size: 100px;
    }
  }

  &:hover {
    span,
    ${Emoji} {
      opacity: 0.6;
    }
  }
`;

function StyledStyle() {
  return (
    <>
      <Box>
        <span>😈</span>
        <Emoji $fontSize="10px">🤑</Emoji>
      </Box>
    </>
  );
}

export default StyledStyle;
