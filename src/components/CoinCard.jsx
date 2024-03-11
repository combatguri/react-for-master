import { PropTypes } from "prop-types";

function CoinCard({ coin }) {
  return (
    <li>
      {coin.name} {coin.symbol} ${coin.quotes.USD.price}
    </li>
  );
}

CoinCard.prototype = {
  coin: PropTypes.object.isRequired,
};

export default CoinCard;
