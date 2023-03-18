package com.example.teablog;

import org.springframework.data.repository.CrudRepository;

public interface IArticleRepo extends CrudRepository<Article, String> {

}
