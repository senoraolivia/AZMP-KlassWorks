import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavouritesContext } from '../context/FavouritesContext';
import styles from "./index.module.scss"

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { favourites } = useContext(FavouritesContext);

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/details">Details</Link></li>
          <li>
            <Link to="/favourites">
              Favourites
              <span className={styles.favouriteCount}>({favourites.length})</span>
            </Link>
          </li>
        </ul>
      </nav>
      <div className={styles.searchBar}>
        <input
          type="text"
          placeholder="Search products..."
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </div>
    </header>
  );
};

export default Navbar;

