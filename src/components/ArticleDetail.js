import React from 'react';
import { useParams } from 'react-router-dom';
import './ArticleDetail.css'; // Create a separate CSS file for detailed view styles
import articles from './articlesData'; // Import articles data

const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));

  if (!article) {
    return <div>Article not found</div>;
  }

  return (
    <div className="article-detail-container">
      <h1>{article.title}</h1>
      <p className="article-meta">Published on {article.date}</p>
      <div className="article-content">{article.content}</div>
    </div>
  );
};

export default ArticleDetail;