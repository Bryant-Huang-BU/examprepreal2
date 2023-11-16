package com.example.exam_two_backend.movies_backend;

import jakarta.persistence.*;
import lombok.Data;

@Data
@Entity
@Table(name= Movie.TABLE_NAME)
public class Movie {

    public static final String TABLE_NAME = "MOVIE";
    @Id
    @GeneratedValue(generator = TABLE_NAME + "_GENERATOR")
    @SequenceGenerator(
            name = TABLE_NAME + "_GENERATOR",
            sequenceName = TABLE_NAME + "_SEQUENCE"
    )
    long id;
    @Column(name = "TITLE")
    String title;
    @Column(name = "GENRES")
    String genres;

    public long getId() {
        return id;
    }

    public void setId(long id) {
        this.id = id;
    }

    public String getTitle() {
        return title;
    }

    public void setTitle(String title) {
        this.title = title;
    }

    public String getGenres() {
        return genres;
    }

    public void setGenres(String genres) {
        this.genres = genres;
    }

    public String getMovieYear() {
        return movieYear;
    }

    public void setMovieYear(String movieYear) {
        this.movieYear = movieYear;
    }

    public String getRottenTomatoesScore() {
        return rottenTomatoesScore;
    }

    public void setRottenTomatoesScore(String rottenTomatoesScore) {
        this.rottenTomatoesScore = rottenTomatoesScore;
    }

    public String getLeadStudio() {
        return leadStudio;
    }

    public void setLeadStudio(String leadStudio) {
        this.leadStudio = leadStudio;
    }

    @Column(name = "MOVIEYEAR")
    String movieYear;
    @Column(name = "ROTTENTOMATOESSCORE")
    String rottenTomatoesScore;
    @Column(name = "LEADSTUDIO")
    String leadStudio;
    public Movie(String title, String genres, String movieYear, String score, String leadStudio) {
        this.title = title;
        this.genres = genres;
        this.movieYear = movieYear;
        this.rottenTomatoesScore = score;
        this.leadStudio = leadStudio;
    }

    public Movie() {

    }
}
