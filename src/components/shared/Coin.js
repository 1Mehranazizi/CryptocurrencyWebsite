import React from "react";

//Icons
import { IoCaretDownOutline, IoCaretUpOutline } from "react-icons/io5";

const Coin = ({ coinData }) => {
  return (
    <tr className="row">
      <td>
        <span className="rank">{coinData.market_cap_rank}</span>
      </td>
      <td className="name">
        <img src={coinData.image} alt={coinData.name} />
        <p className="allname">{coinData.name}</p>
        <p className="symbolname">{coinData.symbol.toUpperCase()}</p>
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
          <button className="buy">More</button>
      </td>
    </tr>
  );
};

export default Coin;
