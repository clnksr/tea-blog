import React, { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom';
import { ADMIN_PASSWORD } from '.';
import ArticleForm from './ArticleForm';
import { IArticle } from './types/article';

const ArticleCreate = () => {


    const navigate = useNavigate();

    const handleNewArticle = async (newArticle: IArticle) => {
        if (prompt("Please enter admin password: ") === ADMIN_PASSWORD) {

            const createdArticle: IArticle = await fetch("http://localhost:8080/api/articles/",
                {
                    method: "POST", mode: 'no-cors', body: JSON.stringify(newArticle), headers: {
                        "Content-Type": "application/json"
                    }
                }).then(a => a.json()).catch(error => { console.log(error) });


            navigate("/articles/" + createdArticle.id);
        } else {
            alert("Wrong password 🙅‍♀️")
        }

    }



    return (
        <>
            <ArticleForm article={{}} onSubmit={handleNewArticle} />
        </>
    )
}

export default ArticleCreate