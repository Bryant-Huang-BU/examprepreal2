package com.example.exam_two_backend.movies_backend;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface MovieRepository extends JpaRepository<Movie, Long> {

    Movie findFirstByTitle(String title);
    List<Movie> findTop20ByOrderByMovieYearDesc();
    List<Movie> findByTitleContainingOrderByMovieYearDesc(String title);

    Movie findFirstByTitleContaining(String title);
}
