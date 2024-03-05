import React, { useState } from 'react'
import MenuArticle from '../components/MenuArticle'
import ContentArticle from '../components/ContentArticle'

const ArticlesPage = () => {
  const [articles, setArticles] = useState([]);
  const [selectedArticle, setSelectedArticle] = useState(null);

  const handleArticlesFetched = (fetchedArticles) => {
    setArticles(fetchedArticles);
  }

  const handleArticleSelection = (article) => {
    setSelectedArticle(article);
  }

  return (
    <>
      <MenuArticle onAriticlesFetched={handleArticlesFetched} onMenuArticleSelect = {handleArticleSelection} />
      <ContentArticle articles = {articles} selectedArticle = {selectedArticle} />
    </>
  )
}

export default ArticlesPage
