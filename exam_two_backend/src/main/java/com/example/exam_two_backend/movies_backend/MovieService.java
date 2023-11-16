package com.example.exam_two_backend.movies_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

@Service
public class MovieService {
    @Autowired
    private MovieRepository mR;

    public Movie addMovie(String title, String genres, String movieYear, String rottenTomatoesScore, String leadStudio) {
        Movie m = new Movie(title, genres, movieYear, rottenTomatoesScore, leadStudio);
        return mR.save(m);
    }

    public Movie addMovie(Movie m) {
        return mR.save(m);
    }

    /*public DTSearch updateScore(String title, int score) {
        Movie m = mR.findFirstByTitle(title);
        m.setRottenTomatoesScore(score);
        DTSearch d = new DTSearch(m);
        return d;
    }

    public List<DTO> topMovies() {
        List<Movie> m = mR.findTop20ByOrderByMovieYearDesc();
        List<DTO> d = new ArrayList<>();
        for (int i = 0; i < m.size(); i++) {
            d.add(new DTO(m.get(i)));
        }
        return d;
    }*/

    public List<Movie> getAll() {
        return mR.findAll();
    }

    public void deleteMovie(Long id) {
        mR.deleteById(id);
    }
    public Optional<Movie> getMovie(Long id) {
        return mR.findById(id);
    }

    public Movie updateMovie(Long id, String title, String genre, String year, String score, String studio) {
        Optional<Movie> ph1 = mR.findById(id);
        Movie ph = null;
        if (ph1 != null) {
            ph = ph1.get();
            if (!title.isEmpty()) {
                ph.setTitle(title);
            }
            if (!genre.isEmpty()) {
                ph.setGenres(genre);
            }
            if (!year.isEmpty()) {
                ph.setMovieYear(year);
            }
            if (!score.isEmpty()) {
                ph.setRottenTomatoesScore(score);
            }
            if (!studio.isEmpty()) {
                ph.setLeadStudio(studio);
            }
        }
        return mR.save(ph);
    }
}
