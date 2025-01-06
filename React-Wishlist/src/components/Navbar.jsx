import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { FavouritesContext } from '../context/FavouritesContext';
import { ProductsContext } from '../context/ProductsContext';
import styles from './index.module.scss';

const Navbar = ({ searchTerm, setSearchTerm }) => {
  const { favourites } = useContext(FavouritesContext);
  const { basket } = useContext(ProductsContext); // Access the basket from the context

  const totalQuantity = basket.reduce((total, item) => total + item.quantity, 0); // Calculate total quantity in the basket

  return (
    <header className={styles.header}>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/details">Details</Link></li>
          <li>
            <Link to="/favourites">
              Favourites<sup>{favourites.length}</sup>
            </Link>
          </li>
          <li>
            <Link to="/basket">
              Basket<sup>{totalQuantity}</sup>
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
