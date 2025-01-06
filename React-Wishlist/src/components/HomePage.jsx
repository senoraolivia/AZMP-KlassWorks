import React, { useContext, useMemo, useState } from 'react';
import ProductCard from './ProductCard';
import { FavouritesContext } from '../context/FavouritesContext';
import productsData from '../data/productsData';
import styles from './index.module.scss';


const HomePage = ({ searchTerm = '' }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);
  const [sortOrder, setSortOrder] = useState('none'); 

  const filteredProducts = useMemo(() => {
    let products = productsData.filter((product) => {
      const title = product.title?.toLowerCase() || '';
      const description = product.description?.toLowerCase() || '';
      return title.includes(searchTerm.toLowerCase()) || description.includes(searchTerm.toLowerCase());
    });

    if (sortOrder === 'asc') {
      products = products.sort((a, b) => a.price - b.price);
    } else if (sortOrder === 'desc') {
      products = products.sort((a, b) => b.price - a.price);
    }

    return products;
  }, [searchTerm, sortOrder]);

  return (
    <div className={styles.homePage}>
      <h1>Home Page</h1>
      <div className={styles.sortContainer}>
        <label htmlFor="sort" className={styles.sortLabel}>
          Sort by Price:
        </label>
        <select
          id="sort"
          value={sortOrder}
          onChange={(e) => setSortOrder(e.target.value)}
          className={styles.sortSelect}
        >
          <option value="none">None</option>
          <option value="asc">ASC</option>
          <option value="desc">DESC</option>
        </select>
      </div>
      <div className={styles.productGrid}>
        {filteredProducts.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            isFavourite={favourites.includes(product.id)}
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
          />
        ))}
      </div>
    </div>
  );
};

export default HomePage;
