import React, { useEffect, useState } from 'react'
import { Link, useNavigate, useParams } from 'react-router-dom';
import { ADMIN_PASSWORD } from '.';
import { IArticle } from './types/article';
import './css/ArticleView.css';


const ArticleView = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState<IArticle>();
    const navigate = useNavigate();

    const getArticle = async () => {
        const response: Response = await fetch("http://localhost:8080/api/articles/" + articleId);
        const data: IArticle = await response.json();

        setArticle(data);
        console.log("THE DATA IS HERE " + data)
    }

    useEffect(() => {
        getArticle();

    }, [])


    const handleDelete = async (e: any) => {
        e.preventDefault();
        if (prompt("Please enter admin password: ") === ADMIN_PASSWORD) {
            await fetch("http://localhost:8080/api/articles/" + articleId, { method: "DELETE" });
            navigate("/");
        } else {
            alert("Wrong password 🙅‍♀️")
        }
    }

    return (
        <>
            <div className="full-article-container">
                <h1>{article?.title}</h1>
                <h3>{article?.intro}</h3>
                <p>{article?.body}</p>
                <div className="action-buttons-view">
                    <button onClick={handleDelete}>Delete article</button>
                    <Link to={'/articles/' + articleId + '/edit'}><button>Edit article</button></Link>
                </div>
            </div>



        </>
    )
}

export default ArticleView