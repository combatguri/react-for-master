import styled from "styled-components";

const Loader = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  align-items: center;
  justify-content: center;

  @keyframes rotation {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }

  > span {
    width: 48px;
    height: 48px;
    border: 5px solid ${(props) => props.theme.colors.white};
    border-bottom-color: transparent;
    border-radius: 50%;
    display: inline-block;
    box-sizing: border-box;
    animation: rotation 1s linear infinite;
  }
`;

function Loading() {
  return (
    <Loader>
      <span />
    </Loader>
  );
}

export default Loading;
