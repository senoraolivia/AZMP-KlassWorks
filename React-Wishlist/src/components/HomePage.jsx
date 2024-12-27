import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { FavouritesContext } from '../context/FavouritesContext';
import productsData from '../data/productsData';

const HomePage = () => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);

  return (
    <div>
      <h1>Home Page</h1>
      <div className="product-cards">
        {productsData.map((product) => (
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
