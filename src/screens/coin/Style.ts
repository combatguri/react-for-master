import styled from "styled-components";

/**
 * hex 값을 rgb 값으로 변환
 * USE: hexToRgb("#FFF")
 * @param hex
 * @return string
 */
export function hexToRgb(hex: string) {
  hex = hex.replace(/^#/, "");
  if (hex.length === 3) {
    hex = hex.replace(/(.)/g, "$1$1");
  }
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);
  return r + ", " + g + ", " + b;
}

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
