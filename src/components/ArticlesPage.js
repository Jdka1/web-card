import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';
import articles from './articlesData'; // Import articles data
import Header from "./Header.js";

const ArticlesPage = () => {

  useEffect(() => {
    document.title = 'Articles';
  }, []);

  return (
    <div className="articles-container">
      <h1>Reflections</h1> {/* Centered header */}
      <Header/>
      {articles.map((article) => (
        <Link to={`/reflection/${article.id}`} className="read-more">
          <div key={article.id} className="article-card">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">{article.summary}</p>
            <p className="article-card-meta">Published on {article.date}</p>
            <i><a>Read more...</a></i>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticlesPage;
