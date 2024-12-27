import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import FavouritesPage from './components/FavouritesPage';
import AboutPage from './components/AboutPage';
import DetailsPage from './components/DetailsPage';
import FavouritesContextProvider from './context/FavouritesContext';

function App() {
  return (
    <FavouritesContextProvider>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details" element={<DetailsPage />} />
        </Routes>
      </div>
    </FavouritesContextProvider>
  );
}

export default App;
