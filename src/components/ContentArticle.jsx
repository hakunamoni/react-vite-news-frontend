import React from 'react';
import ContentArticleContents from './articles/Contents/ContentArticleContents';

const ContentArticle = ({articles, selectedArticle}) => {
    return (
        <ContentArticleContents articles = {articles} selectedArticle = {selectedArticle} />
    );
};

export default ContentArticle;