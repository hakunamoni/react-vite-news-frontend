import React, {useEffect, useRef} from 'react';
import HTMLReactParser from 'html-react-parser';

const ContentArticleContents = ({articles, selectedArticle}) => {
    const contentRef = useRef();

    useEffect(() => {
        if (contentRef.current && selectedArticle) {
            const selectedElement = contentRef.current.querySelector(`#article-${selectedArticle.id}`);
            if (selectedElement) {
                selectedElement.scrollIntoView({behavior: "smooth"});
            }
        }
    }, [selectedArticle]);

    useEffect(() => {
        const extractFunc = (content) => {
            // console.log(content);
            const funcRegex = /<script\b[^>]*>[\s\S]*?<\/script>/gi;
            const matches = content.match(funcRegex);
            if (matches) {
                matches.forEach((match) => {
                    const scriptContent = match.replace(/<script\b[^>]*>/i, '').replace(/<\/script>/i, '');
                    const script = document.createElement('script');
                    // if (!window.$){
                    //     const jqueryScript = document.createElement('script');
                    //     jqueryScript.src = 'https://code.jquery.com/jquery-3.6.4.min.js';
                    //     document.body.appendChild(jqueryScript);
                    // }
                    script.innerHTML = scriptContent;
                    document.body.appendChild(script);
                });
            };
        }
        articles.map((article) => extractFunc(article.content));
    }, [articles]);

    // useEffect(() => {
    //     console.log('insert');
    //     const scriptElement = document.createElement('script');
    //     scriptElement.type = 'text/javascript';
    //     scriptElement.textContent = `
    //     $(document).ready(function () {
    //         $.fancybox.defaults.helpers = {
    //           overlay: {
    //               locked: false
    //           }
    //         };
    //       });    
    //     `;
    //     document.body.appendChild(scriptElement);

    //     return () => {
    //         document.body.removeChild(scriptElement);
    //     }
    // }, []);

    return (
        <div ref = {contentRef} className="w-3/4 p-4 overflow-y-auto h-dvh scrollable-content">
            <div className="max-w-5xl mx-auto">
                {articles.length ? (
                    articles.map((article) => (
                        <div key={article.id} id={`article-${article.id}`} className="mb-10 pt-10">{HTMLReactParser(article.content)} </div>
                        // <div key={article.id} id={`article-${article.id}`} className="mb-10 pt-10" dangerouslySetInnerHTML={{__html: article.content}}/>
                    ))
                ) : (
                    <p>No news data yet!</p>
                )}
            </div>
        </div>
    );
};

export default ContentArticleContents;