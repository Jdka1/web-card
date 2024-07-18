import React, { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ArticleDetail.css'; // Create a separate CSS file for detailed view styles
import articles from './articlesData';
import Header from "./Header.js";


const ArticleDetail = () => {
  const { id } = useParams();
  const article = articles.find(article => article.id === parseInt(id));
  
  useEffect(() => {
    document.title = `${article.title}`;
  }, []);

  if (!article) {
    return <div>Article not found</div>;
  }
  

  return (
    <div className="article-detail-container">
      <h1>{article.title}</h1>
      <div className="back"><p className="article-meta">Published on {article.date} | <a href="/reflections">back to reflections</a></p></div>
      <div className="article-content">{article.content}</div>
    </div>
  );
};

export default ArticleDetail;
