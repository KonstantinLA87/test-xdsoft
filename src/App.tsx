import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { MovieDetailsPage } from './pages/MovieDetailsPage';
import { Navbar } from './components/Navbar/Navbar';

function App() {
  return (
    <div className="app bg-gray-100">
      <Navbar />
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/details/:id' element={<MovieDetailsPage />} />
      </Routes>
    </div>
  );
}

export default App;
