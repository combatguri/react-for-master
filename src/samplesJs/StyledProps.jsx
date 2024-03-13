import styled from "styled-components";

const Father = styled.div`
  display: flex;
`;

const Box = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${(props) => props.$bgColor};
`;

const Circle = styled(Box)`
  border-radius: 50%;
`;

const Input = styled.input`
  background-color: red;
`;

const InputAttrs = styled.input.attrs({ required: true, minLength: 20 })`
  background-color: blue;
`;

const InputAttrsProps = styled.input.attrs((props) => ({
  type: "text",
  size: props.size || "1em",
}))`
  color: violet;
  height: ${(props) => props.$size};
`;

const Button = styled.button`
  display: block;
  border: solid 1px red;
`;

function StyledProps() {
  return (
    <div>
      <Father as="header">
        <Box $bgColor="teal" />
        <Circle $bgColor="tomato" />
      </Father>

      <hr />

      <Input />
      <InputAttrs />
      <InputAttrsProps $size="10" />

      <hr />
      <Button>버튼</Button>
      <Button as="a" href="#">
        a 링크
      </Button>
      <Button as="span">span</Button>
    </div>
  );
}

export default StyledProps;
