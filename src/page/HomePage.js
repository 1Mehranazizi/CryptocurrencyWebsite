import React, { useState, useEffect } from "react";
import axios from "axios";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//Components
import Coin from "../components/shared/Coin";

const HomePage = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fecthCoin = async () => {
      const response = await axios.get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=10&page=1&sparkline=false"
      );
      setData(response.data);
    };
    fecthCoin();
  }, []);

  return (
    <div className="home-page">
      <div className="search-box">
        <input type="text" placeholder="Search..." />
      </div>
      {data.length > 0 ? (
        <table className="table">
          <thead className="header-table">
            <tr>
              <td>#</td>
              <td>Name</td>
              <td>Price</td>
              <td>24h %</td>
              <td>MarketCap</td>
            </tr>
          </thead>
          <tbody>
            {data.map((coin) => (
              <Coin key={coin.name} coinData={coin} />
            ))}
          </tbody>
        </table>
      ) : (
        <SkeletonTheme baseColor="#262A2F" highlightColor="#566066">
          <Skeleton height={50} count={10} style={{ margin: ".5rem" }} />
        </SkeletonTheme>
      )}
    </div>
  );
};

export default HomePage;
