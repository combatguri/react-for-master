import styled from "styled-components";

export function hexToRgb(hex: string) {
  // hex 값이 #으로 시작하는 경우 # 제거
  hex = hex.replace(/^#/, "");

  // hex 값을 6자리로 만들기 위해 앞에 0 붙이기
  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, "$1$1");
  }

  // 각 색상 채널 추출
  var r = parseInt(hex.substring(0, 2), 16);
  var g = parseInt(hex.substring(2, 4), 16);
  var b = parseInt(hex.substring(4, 6), 16);

  // RGB 문자열 반환
  return r + ", " + g + ", " + b;
}
console.log(hexToRgb("#FFF"));

export const CoinTitle = styled.h1`
  display: flex;
  justify-content: center;
  font-size: 48px;
  color: ${(props) => props.theme.colors.teal};
  margin-top: 0.5em;
  margin-bottom: 0.725em;
`;

export const CoinOverview = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 10px 20px;
  border-radius: 10px;
`;

export const CoinOverviewItem = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  span:first-child {
    font-size: 10px;
    font-weight: 400;
    text-transform: uppercase;
    margin-bottom: 5px;
  }
`;

export const CoinDescription = styled.p`
  margin: 20px 0px;
`;

export const CoinTabs = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  margin: 25px 0px;
  gap: 10px;
`;

export const CoinTab = styled.span<{ $isActive: boolean }>`
  text-align: center;
  text-transform: uppercase;
  font-size: 12px;
  font-weight: 600;
  background-color: ${(p) =>
    p.$isActive
      ? `rgba(${hexToRgb(p.theme.colors.orange)}, 1)`
      : `rgba(${hexToRgb(p.theme.colors.gray100)}, 0.4)`};
  padding: 0.7em 0;
  border-radius: 10px;
  color: ${(props) =>
    props.$isActive ? props.theme.colors.white : props.theme.colors.black};

  a {
    display: flex;
    align-items: center;
    justify-content: center;
    svg {
      margin-left: 4px;
      font-size: 2em;
    }
  }
`;
