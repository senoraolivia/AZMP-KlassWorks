import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import FavouritesPage from './components/FavouritesPage';
import AboutPage from './components/AboutPage';
import DetailsPage from './components/DetailsPage';
import AdminPage from './components/AdminPage';
import BasketPage from './components/BasketPage'; 
import FavouritesContextProvider from './context/FavouritesContext';
import ProductsContextProvider from './context/ProductsContext';

function App() {
  return (
    <ProductsContextProvider> {/* Ensure this is wrapping the app */}
      <FavouritesContextProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/favourites" element={<FavouritesPage />} />
            <Route path="/about" element={<AboutPage />} />
            <Route path="/product/:id" element={<DetailsPage />} />
            <Route path="/admin" element={<AdminPage />} />
            <Route path="/basket" element={<BasketPage />} /> {/* Add the Basket page route */}
          </Routes>
        </div>
      </FavouritesContextProvider>
    </ProductsContextProvider>
  );
}

export default App;
