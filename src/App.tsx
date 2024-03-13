import React from "react";
import styled from "styled-components";

// import StyledProps from "./samples/StyledProps";
import StyledStyle from "./samples/StyledStyle";

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
  align-items: center;
  justify-content: center;

  color: ${(props) => props.theme.textColor};
  background-color: ${(props) => props.theme.bgColor};

  a {
    color: ${(props) => props.theme.textColor};
  }
`;

function App() {
  return (
    <Wrapper>
      {/* <StyledProps /> */}
      <StyledStyle />
    </Wrapper>
  );
}

export default App;
