import styled, { keyframes } from "styled-components";

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

const Emoji = styled.div`
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

function SampleTest() {
  return (
    <div>
      <Box>
        <span>😈</span>
        <Emoji $fontSize="10px">🤑</Emoji>
      </Box>
    </div>
  );
}

export default SampleTest;
