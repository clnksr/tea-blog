import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ADMIN_PASSWORD } from '.';
import ArticleForm from './ArticleForm';
import { IArticle } from './types/article';

const ArticleEdit = () => {
    const { articleId } = useParams();
    const [article, setArticle] = useState<IArticle>();

    const navigate = useNavigate();

    const getArticle = async () => {
        const response: Response = await fetch("http://localhost:8080/api/articles/" + articleId);
        const data: IArticle = await response.json();

        setArticle(data);
    }

    const handleArticleSubmit = async (updatedArticle: IArticle) => {
        if (prompt("Please enter admin password: ") === ADMIN_PASSWORD) {
            await fetch("http://localhost:8080/api/articles/" + articleId,
                {
                    method: "PUT", body: JSON.stringify(updatedArticle), headers: {
                        "Content-Type": "application/json"
                    }
                });
            navigate("/articles/" + articleId);
        } else {
            alert("Wrong password 🙅‍♀️")
        }
    }

    useEffect(() => {
        getArticle();

    }, [])

    return (
        <>
            {article && <ArticleForm article={article} onSubmit={handleArticleSubmit} />}
        </>
    )
}

export default ArticleEdit