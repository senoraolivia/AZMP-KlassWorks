import React from 'react';
import { Link } from 'react-router-dom';
import styles from "./index.module.scss"

const Navbar = () => {
  return (
    <header>
        <div className={styles.header}>
        <nav>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/details">Details</Link></li>
        <li><Link to="/favourites">Favourites</Link></li>
      </ul>
    </nav>
        </div>
    </header>
  );
};

export default Navbar;
