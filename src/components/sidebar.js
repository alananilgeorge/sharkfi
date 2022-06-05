import React from "react";
import { slide as Menu } from "react-burger-menu";
import "./sidebar.css";

export default (props) => {
  return (
    <Menu>
      <a className="menu-item" href="/">
        Home
      </a>
      <a className="menu-item" href="/loan">
        Loan
      </a>
      <a className="menu-item" href="/liquidity">
        Liquidity
      </a>
      <a className="menu-item" href="/createtoken">
        Create Token
      </a>
    </Menu>
  );
};
