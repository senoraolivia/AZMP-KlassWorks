import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import FavouritesPage from './components/FavouritesPage';
import AboutPage from './components/AboutPage';
import DetailsPage from './components/DetailsPage';
import FavouritesContextProvider from './context/FavouritesContext';
import AdminPage from './components/AdminPage';

function App() {
  const [searchTerm, setSearchTerm] = useState('');

  return (
    <FavouritesContextProvider>
      <div>
        <Navbar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<HomePage searchTerm={searchTerm} />} />
          <Route path="/favourites" element={<FavouritesPage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/details" element={<DetailsPage />} />
          <Route path="/admin" element={<AdminPage/>} />
        </Routes>
      </div>
    </FavouritesContextProvider>
  );
}

export default App;

