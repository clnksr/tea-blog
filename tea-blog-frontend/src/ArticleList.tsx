import React, { useEffect, useState } from 'react'
import Article from './Article';
import { IArticle } from './types/article';
import './css/ArticleList.css';
import image from './matcha-hand.png';
import { Link, useNavigate } from 'react-router-dom';


const ArticleList = () => {
    const [articles, setArticles] = useState<IArticle[]>([]);

    const getArticles = async () => {
        const response: Response = await fetch("http://localhost:8080/api/articles");
        const data: IArticle[] = await response.json();

        setArticles(data);
        console.log("THE DATA IS HERE " + data)
    }

    useEffect(() => {
        getArticles();

    }, [])



    return (
        <>
            <div className="title-text-box">
                <h1 className='first-title'>Welcome to the magic world of<br />leaves and hot water!</h1>
                <h2 className='second-title'>I'm glad you're here. Start with this:</h2>
                <img src={image} alt="a hand holding a cup of matcha tea" />
            </div>

            <div className="article-container">
                {articles.length === 0 && "Loading ..."}
                {articles.map(a => <Article
                    key={a.id}
                    article={a} />)}

            </div>

            {/* <Link to={'/articles/new'}><button>Submit new article</button></Link> */}



        </>
    )
}

export default ArticleList