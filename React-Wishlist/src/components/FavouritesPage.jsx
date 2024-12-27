import React, { useContext } from 'react';
import ProductCard from './ProductCard';
import { FavouritesContext } from '../context/FavouritesContext';
import productsData from '../data/productsData';

const FavouritesPage = () => {
  const { favourites, addToFavourites, removeFromFavourites } = useContext(FavouritesContext);

  return (
    <div>
      <h1>Favourites Page</h1>
      <div className="product-cards">
        {productsData.filter(product => favourites.includes(product.id)).map((product) => (
          <ProductCard 
            key={product.id} 
            product={product}
            isFavourite={true}
            addToFavourites={addToFavourites}
            removeFromFavourites={removeFromFavourites}
          />
        ))}
      </div>
    </div>
  );
};

export default FavouritesPage;
