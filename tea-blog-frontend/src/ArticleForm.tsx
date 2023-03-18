import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom';
import { ADMIN_PASSWORD } from '.';
import { IArticle } from './types/article';
import './css/ArticleForm.css'

interface ArticleFormAttrs {
    article: Partial<IArticle>;
    onSubmit: (updatedArticle: IArticle) => any;
}


const ArticleForm = ({ article, onSubmit }: ArticleFormAttrs) => {
    const [title, setTitle] = useState<string>(article.title || "");
    const [intro, setIntro] = useState<string>(article.intro || "");
    const [body, setBody] = useState<string>(article.body || "");


    const onFormSubmit = async (e: any) => {
        e.preventDefault();

        const updatedArticle: IArticle = { ...article, title, body, intro } as IArticle;
        onSubmit(updatedArticle);

    }

    return (
        <>
            <div className="form-box">
                <form onSubmit={onFormSubmit} className="article-form">
                    <label>Title: </label>
                    <input type="text" value={title} onChange={e => setTitle(e.target.value)} />
                    <label>Intro: </label>
                    <input type="text" value={intro} onChange={e => setIntro(e.target.value)} />
                    <label>Body: </label>
                    {/* <textarea
                    className='body-input-box'
                    value={body}
                    onChange={e => setBody(e.target.value)}
                    rows={30}
                    /> */}

                    <input className='body-input-box' type="text" value={body} onChange={e => setBody(e.target.value)} />

                    <div className="form-submit-button">
                        <button type='submit'>Submit changes</button>
                    </div>
                </form>
            </div>
        </>
    )
}

export default ArticleForm