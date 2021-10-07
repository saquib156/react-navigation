import React from "react";
import { Link } from 'react-router-dom';

const navStyle = {
  color: "white",
};

const Nav = () => {

    return (
        <nav>
            <Link style={navStyle} to="/">
                <h3>Logo</h3>
            </Link>
            <ul className="nav-header">
                <Link style={navStyle} to="/about">
                <li>About</li>
                </Link>
                <Link style={navStyle} to="/shop">
                <li>Shop</li>
                </Link>
            </ul>
        </nav>
    );
};

export default Nav;