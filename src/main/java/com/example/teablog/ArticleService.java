package com.example.teablog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleService {

    @Autowired
    ArticleRepo repo;

    public List<Article> getAllArticles() {
        return repo.getAllArticles();
    }

    public Article getArticleById(String id){
        return repo.getArticleById(id);
    }

    public void deleteArticleById(String id){
        repo.deleteArticleById(id);
    }

    public Article updateArticle(Article updatedArticle){
        return repo.updateArticle(updatedArticle);
    }

    public Article saveArticle(Article newArticle){
        return repo.saveArticle(newArticle);
    }
}
