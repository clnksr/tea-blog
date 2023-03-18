package com.example.teablog;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@CrossOrigin(origins = "http://localhost:3000")
@RequestMapping("api/articles")
public class ArticleController {

    @Autowired
    ArticleService service;

    @GetMapping
    ResponseEntity<List<Article>> getAllArticles() {
        List<Article> articles = service.getAllArticles();
        return ResponseEntity.ok(articles);
    }

    @GetMapping("/{id}")
    ResponseEntity<Article> getArticleById(@PathVariable String id){
        Article article = service.getArticleById(id);
        return ResponseEntity.ok(article);
    }

    @DeleteMapping("/{id}")
    ResponseEntity<Void> deleteArticle(@PathVariable String id){
        service.deleteArticleById(id);
        return ResponseEntity.noContent().build();
    }

    @PutMapping("/{id}")
    ResponseEntity<Article> updateArticle(@RequestBody Article updatedArticle, @PathVariable String id){
        if (service.getArticleById(id) == null) {
            return ResponseEntity.notFound().build();
        }
        Article newArticle = service.updateArticle(updatedArticle);

        return ResponseEntity.ok(newArticle);
    }

    @PostMapping
    ResponseEntity<Article> updateArticle(@RequestBody Article newArticle){

        Article article = service.updateArticle(newArticle);
        return ResponseEntity.ok(article);
    }
}
