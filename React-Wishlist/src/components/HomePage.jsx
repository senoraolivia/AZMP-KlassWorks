import React, { useContext, useMemo } from 'react';
import ProductCard from './ProductCard';
import { FavouritesContext } from '../context/FavouritesContext';
import productsData from '../data/productsData';
import styles from "./index.module.scss";

const HomePage = ({ searchTerm }) => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);

  const filteredProducts = useMemo(() => {
    return productsData.filter(product => 
      product.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      product.description.toLowerCase().includes(searchTerm.toLowerCase())
    );
  }, [searchTerm]);

  return (
    <div className={styles.homePage}>
      <h1>Home Page</h1>
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

