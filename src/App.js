import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ArticleDetail from './components/ArticleDetail';
import Articles from './components/ArticlesPage';
import PhotographyPortfolio from './components/PhotographyPortfolio'
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/reflections" element={<Articles />} />
        <Route path="/reflection/:id" element={<ArticleDetail />} />
        <Route path="/gallery_room" element={<PhotographyPortfolio />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
