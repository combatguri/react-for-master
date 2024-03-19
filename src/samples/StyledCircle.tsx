/**
 * 타입스크립트 적용 styled-components props
 */

import styled from "styled-components";

interface ContainerProps {
  $bgColor?: string;
  $borderColor: string;
}
const Container = styled.div<ContainerProps>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background-color: ${(props) => props.$bgColor};
  border: 1px solid ${(props) => props.$borderColor};
`;

interface StyledCircleProps {
  bgColor: string;
  borderColor?: string;
  text?: string;
}

function StyledCircle({
  bgColor,
  borderColor = "white",
  text = "텍스트를 입력해 주세요.",
}: StyledCircleProps) {
  return (
    <Container $bgColor={bgColor} $borderColor={borderColor ?? "white"}>
      {text}
    </Container>
  );
}

export default StyledCircle;
