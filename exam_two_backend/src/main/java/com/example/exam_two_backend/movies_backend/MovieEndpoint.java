package com.example.exam_two_backend.movies_backend;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.Optional;

@RestController
public class MovieEndpoint {
    @Autowired
    private MovieService mS;

    /* @GetMapping(value = "/initialize")
     public List<DTO> initialize() throws FileNotFoundException, URISyntaxException {
         Scanner sc = new Scanner(new File("src/main/resources/movies.csv"));
         sc.nextLine();
         sc.useDelimiter(",");   //sets the delimiter pattern
         String line = "";
         String splitBy = ",";
         String ph1,ph2,ph3,ph4,ph5;
         /*while (sc.hasNext()) {
             if (sc.hasNext()) {
                 ph1 = sc.next();
             }
             ph2 = sc.next();
             if (ph2 == null) {
                 ph2 = "";
             }
             ph3 = sc.next();
             if (ph3 == null) {
                 ph3 = "";
             }
             ph4 = sc.next();
             if (ph4 == null) {
                 ph4 = "";
             }
             ph5 = sc.next();
             if (ph5 == null) {
                 ph5 = "";
             }
             mS.addMovie(ph1, ph2, ph3, ph4, ph5);
         }
    URL resource = getClass().getClassLoader().getResource("movies.csv");
    File f = new File(resource.toURI());
        try

    {
        BufferedReader br = new BufferedReader(new FileReader(f));
        br.readLine();
        while ((line = br.readLine()) != null)   //returns a Boolean value
        {
            String[] m = line.split(splitBy, -1);    // use comma as separator
            mS.addMovie(m[1], m[2], Integer.parseInt(m[3]), Integer.parseInt(m[4]), m[5]);
        }
    }
        catch(
    IOException e)

    {
        e.printStackTrace();
    }
        sc.close();
    }*/


/*
    @PostMapping("update_movie_rating")
    public DTSearch updateMovieRating (@RequestParam String title, @RequestParam int score) {
        return mS.updateScore(title, score);
    }

    @GetMapping("top_movies")
    public List<DTO> topMovies() {
        return mS.topMovies();
    }*/
@PostMapping("/movie/create")
@CrossOrigin(origins = {"http://localhost:3000"})

public Movie addMovie(@RequestParam String title, @RequestParam String genre, @RequestParam String year, @RequestParam String score, @RequestParam String studio) {
    System.out.println("Add ");
    Movie m = new Movie(title, genre, year, score, studio);
    return mS.addMovie(m);
}
    @GetMapping("movies")
    @CrossOrigin(origins = {"http://localhost:3000"})

    public List<Movie> movies() {
        System.out.println("getAll");
        return mS.getAll();
    }
    @DeleteMapping("/movie/{id}")
    @CrossOrigin(origins = {"http://localhost:3000"})
    public void delete_student (@PathVariable Long id) {
        System.out.println("Delete " + id);
        mS.deleteMovie(id);
    }
    @GetMapping("/movie/{id}")
    @CrossOrigin(origins = {"http://localhost:3000"})
    public Optional<Movie> getMovie (@PathVariable Long id) {
        System.out.println("Get " + id);
        return mS.getMovie(id);
    }

    @PutMapping("/movie/update/{id}")
    @CrossOrigin(origins = {"http://localhost:3000"})
    public Movie updateMovie (@PathVariable Long id, @RequestParam String title, @RequestParam String genre, @RequestParam String year, @RequestParam String score, @RequestParam String studio) {
        System.out.println("Update " + id);
        return mS.updateMovie(id, title, genre, year, score, studio);
    }


}
