/**
 * 스타일드 컴포넌트 ts 인터페이스 설정
 */

import styled from "styled-components";

interface styledPropsInterface {
  $size?: string;
  $bgColor?: string;
  $length?: string;
}

const Father = styled.div`
  display: flex;
`;

const Box = styled.div<styledPropsInterface>`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.$bgColor};
`;

// const Circle = styled(Box)`
//   border-radius: 50%;
// `;

// const Input = styled.input`
//   background-color: red;
// `;

// const InputAttrs = styled.input.attrs({ required: true, minLength: 20 })`
//   background-color: blue;
// `;

// const InputAttrsProps = styled.input.attrs<styledPropsInterface>(
//   (props): styledPropsInterface => ({
//     type: "text",
//     size: props.$length || "1em",
//   })
// )`
//   color: violet;
//   height: ${(props) => props.$size};
// `;

function StyledProps() {
  return (
    <>
      <Father as="header">
        <Box $bgColor="red" />
      </Father>

      {/* <InputAttrsProps $size="10em" /> */}
    </>
  );
}

export default StyledProps;
