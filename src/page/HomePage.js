import React, { useState, useEffect } from "react";
import axios from "axios";

import Skeleton, { SkeletonTheme } from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

//Components
import Coin from "../components/shared/Coin";

//Images
import crImage from "../assets/img/image.png";

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
      <div className="banner">
        <div className="text-banner">
          <h2>Jump start your crypto portfolio</h2>
          <p>
            Coinbase is the easiest place to buy and sell cryptocurrency. Sign
            up and get started today.
          </p>
          <div className="email-received">
            <input type="text" placeholder="Email Address" />
            <button>Get Started</button>
          </div>
        </div>
        <div className="img-banner">
          <img src={crImage} alt="cr" />
        </div>
      </div>
      {data.length > 0 ? (
        <div className="table-container">
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
                <Coin key={coin.id} coinData={coin} />
              ))}
            </tbody>
          </table>
        </div>
      ) : (
        <SkeletonTheme baseColor="#262A2F" highlightColor="#566066">
          <Skeleton height={50} count={10} style={{ margin: ".5rem" }} />
        </SkeletonTheme>
      )}
    </div>
  );
};

export default HomePage;
