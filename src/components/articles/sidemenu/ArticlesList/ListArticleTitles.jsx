import React from 'react';
import HTMLReactParser from 'html-react-parser';

const ListArticleTitles = ({articles, onMenuArticleSelect}) => {
    return (
        <ul>
            { articles.map((article) => (
                <li key = {article.id}>
                    <button onClick={() => onMenuArticleSelect(article)} className="w-full text-left">
                        <div>{HTMLReactParser(article.title.replace(/<img[^>]*>/g, ''))}</div>
                        {/* <div dangerouslySetInnerHTML={{__html: article.title}}/> */}
                    </button>
                </li>
            ))}
        </ul>
    );
};

export default ListArticleTitles;