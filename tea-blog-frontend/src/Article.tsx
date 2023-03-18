import React from 'react'
import { Link } from 'react-router-dom';
import './css/Article.css'
import { IArticle } from './types/article';


interface ArticleAttrs {
    article: IArticle;
}

const Article = ({ article }: ArticleAttrs) => {
    return (
        <>
            <div className="article-box">
                <h1>{article.title}</h1>
                <h2>{article.intro}</h2>
                <Link to={'/articles/' + article.id}>Read more</Link>
                <p>by: {article.author}</p>
                <p>created on: {article.createdOn}</p>

            </div>

        </>
    )
}

export default Article