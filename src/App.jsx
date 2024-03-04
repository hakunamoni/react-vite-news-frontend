import React, { useState } from 'react'
import MenuArticle from './components/MenuArticle'
import ContentArticle from './components/ContentArticle'
import './App.css'

function App() {
  console.log("start");
  
  console.log(React.version);
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
      <div className="flex w-screen bg-[#f2f2f2]">
        <MenuArticle onAriticlesFetched={handleArticlesFetched} onMenuArticleSelect = {handleArticleSelection} />
        <ContentArticle articles = {articles} selectedArticle = {selectedArticle} />
      </div>
    </>
  )
}

export default App
