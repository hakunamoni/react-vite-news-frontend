import React, {useState} from 'react';
import FetchArticlesByDate from './articles/sidemenu/DateSelect/FetchArticlesByDate'
import ListArticleTitles from './articles/sidemenu/ArticlesList/ListArticleTitles';

const MenuArticle = ({onAriticlesFetched, onMenuArticleSelect}) => {
    const [articles, setArticles] = useState([]);
   
    const handleArticlesFetched = (fechedArticles) => {
        setArticles(fechedArticles);
        onAriticlesFetched(fechedArticles);
    }
    
    const handleArticleSelection = (article) => {
        onMenuArticleSelect(article);
    }

    return (
        <div className="w-1/4 p-4 border-r overflow-y-auto h-dvh scrollable-content">
            <FetchArticlesByDate onAriticlesFetched={handleArticlesFetched} />
            <ListArticleTitles articles = {articles} onMenuArticleSelect = {handleArticleSelection}/>
        </div>
    )
};

export default MenuArticle;