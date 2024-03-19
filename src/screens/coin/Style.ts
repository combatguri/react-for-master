import styled from "styled-components";

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
  font-weight: 400;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 7px 0px;
  border-radius: 10px;
  color: ${(props) =>
    props.$isActive ? props.theme.colors.cyan : props.theme.colors.gray100};
  a {
    display: block;
  }
`;
