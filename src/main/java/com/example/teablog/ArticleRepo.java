package com.example.teablog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Repository;

import java.util.List;
import java.util.Optional;

@Repository
public class ArticleRepo {

    @Autowired
    IArticleRepo repo;


    public List<Article> getAllArticles(){
        return (List<Article>) repo.findAll();
    }

    public Article getArticleById(String id) {
        Optional<Article> byId = repo.findById(id);
        return byId.orElse(null);
    }




    public void deleteArticleById(String id){
        repo.deleteById(id);
    }

    public Article updateArticle(Article updatedArticle){
    return repo.save(updatedArticle);
    }

    public Article saveArticle(Article newArticle){
        return repo.save(newArticle);
    }


}
