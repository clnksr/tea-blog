package com.example.teablog;

import jakarta.persistence.*;
import org.springframework.beans.factory.annotation.Value;

@Entity
@Table(name = "articles")
public class Article {
    @Id
    @GeneratedValue
    private Long id;
    private String title;
    private String intro;
    @Column(columnDefinition="TEXT")
    private String body;
    private String author;
    private String createdOn;

    public Article() {
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getIntro() {
        return intro;
    }

    public void setIntro(String intro) {
        this.intro = intro;
    }

    public String getBody() {
        return body;
    }

    public void setBody(String body) {
        this.body = body;
    }

    public String getAuthor() {
        return author;
    }

    public void setAuthor(String author) {
        this.author = author;
    }

    public String getCreatedOn() {
        return createdOn;
    }

    public void setCreatedOn(String createdOn) {
        this.createdOn = createdOn;
    }


    public void setId(Long id) {
        this.id = id;
    }

    public Long getId() {
        return id;
    }
}
