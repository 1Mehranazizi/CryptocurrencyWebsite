import React from "react";
import { Link } from "react-router-dom";

//Icons
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";

const Coin = ({ coinData }) => {
  return (
    <tr className="row">
      <td>
        <span className="rank">{coinData.market_cap_rank}</span>
      </td>
      <td>
        <Link to={coinData.symbol.toUpperCase()} className="name">
          <img src={coinData.image} alt={coinData.name} />
          <p className="allname">{coinData.name}</p>
          <p className="symbolname">{coinData.symbol.toUpperCase()}</p>
        </Link>
      </td>
      <td>
        <p className="price">${coinData.current_price.toLocaleString()}</p>
      </td>
      <td>
        <p className="change-price">
          {coinData.price_change_percentage_24h > 0 ? (
            <IoCaretUpOutline className="increase-price" />
          ) : (
            <IoCaretDownOutline className="decrease-price" />
          )}
          {coinData.price_change_percentage_24h.toFixed(2)}
        </p>
      </td>
      <td className="coinMarketCap">
        <p className="price">${coinData.market_cap.toLocaleString()}</p>
      </td>
      <td>
        <Link to={coinData.symbol.toUpperCase()} className="buy">
          More
        </Link>
      </td>
    </tr>
  );
};

export default Coin;
