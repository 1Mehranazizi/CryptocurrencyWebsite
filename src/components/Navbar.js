import React, { useState } from "react";

//Icons
import { IoCloseOutline, IoMenuOutline } from "react-icons/io5";

const Navbar = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="navbar">
      <div className="logo">
        <h3>
          <span>Coin</span>MarketCap
        </h3>
      </div>
      <ul className={`${open ? "nav nav-open" : "nav"}`}>
        <div className="hamburger" onClick={() => setOpen(false)}>
          <IoCloseOutline size={30} color="#fff" />
        </div>
        <li className="nav-item active">Cryptocurrencies</li>
        <li className="nav-item">Exchabge</li>
        <li className="nav-item">NFT</li>
        <li className="nav-item">Learn</li>
      </ul>
      <div className="nav-link">
        <button className="login-btn">Login</button>
        <button className="signup-btn">Sign up</button>
      </div>
      <div className="hamburger" onClick={() => setOpen(true)}>
        <IoMenuOutline size={30} color="#fff" />
      </div>
    </div>
  );
};

export default Navbar;
