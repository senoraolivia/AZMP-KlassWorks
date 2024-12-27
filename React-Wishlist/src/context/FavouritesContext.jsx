import React, { createContext, useState } from 'react';

export const FavouritesContext = createContext();

const FavouritesContextProvider = ({ children }) => {
  const [favourites, setFavourites] = useState([]);

  const addToFavourites = (id) => {
    setFavourites([...favourites, id]);
  };

  const removeFromFavourites = (id) => {
    setFavourites(favourites.filter((productId) => productId !== id));
  };

  return (
    <FavouritesContext.Provider value={{ favourites, addToFavourites, removeFromFavourites }}>
      {children}
    </FavouritesContext.Provider>
  );
};

export default FavouritesContextProvider;
