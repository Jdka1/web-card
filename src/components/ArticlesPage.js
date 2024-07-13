import React from 'react';
import { Link } from 'react-router-dom';
import './Articles.css';
import articles from './articlesData'; // Import articles data

const ArticlesPage = () => {
  return (
    <div className="articles-container">
      <h1>My Writing and Thoughts</h1> {/* Centered header */}
      {articles.map((article) => (
        <Link to={`/articles/${article.id}`} className="read-more">
          <div key={article.id} className="article-card">
            <h2 className="article-title">{article.title}</h2>
            <p className="article-summary">{article.summary}</p>
            <p className="article-card-meta">Published on {article.date}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default ArticlesPage;
