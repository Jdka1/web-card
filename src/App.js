import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ArticleDetail from './components/ArticleDetail';
import Articles from './components/ArticlesPage';
import PhotographyPortfolio from './components/PhotographyPortfolio'

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/articles" element={<Articles />} />
        <Route path="/articles/:id" element={<ArticleDetail />} />
        <Route path="/gallery_room" element={<PhotographyPortfolio />} />
      </Routes>
    </Router>
  );
}

export default App;
