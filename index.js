// what is the total budget of the ten most popular movies in the db?
//
// which genre has the highest average popularity for its top 25 movies?
//
// which of the top 25 horror movies have no spoken language besides English?
//
// who had the most starring roles in the top 25 comedies?
//
// how many movies have the stars of the most popular movie of last year appeared in? (list each star's name with the number of movies)



function getData (url, params) {
     let key = "81599007ff214265c13a0888da791d0c";
     return fetch(`https://api.themoviedb.org/3/${url}?api_key=${key}&${params}`)
       .then(response => response.json())

   }
   getData('movie/popular').then(json => console.log(json));

   function getMovie (movieData) {
     console.log('working with ', movieData.title);
   }
   getData('movie/popular').then(json => json.results.map(getMovie));





   function getData (url, params) {
     let key = "1922c66ebaed294ac65a15f52834a49b";
     return fetch(`https://api.themoviedb.org/3/${url}?api_key=${key}&${params}`)
       .then(response => response.json())

   }
   function getMovie (movieData) {
     return getData(`movie/${movieData.id}`)
   }
   function combineBudget (total, movie) {
     console.log('current movie budget', movie.budget);
     return total + movie.budget;
   }
   function showCombinedBudget (movies) {
     let allTheMonies = movies.reduce(combineBudget, 0);
     console.log('these things cost ', allTheMonies);
   }
   getData('movie/popular')
     .then(json => {
       let topTen = json.results.slice(0, 10);
       return topTen.map(getMovie)
     })
     .then(moviePromises => Promise.all(moviePromises))
     .then(showCombinedBudget);


     //

     <script>
   function getData (url, params) {
     let key = "1922c66ebaed294ac65a15f52834a49b";
     return fetch(`https://api.themoviedb.org/3/${url}?api_key=${key}&${params}`)
       .then(response => response.json())

   }
   function getMovie (movieData) {
     return getData(`movie/${movieData.id}`)
   }
   function combineBudget (total, movie) {
     console.log('current movie budget', movie.budget);
     return total + movie.budget;
   }
   function showCombinedBudget (movies) {
     let allTheMonies = movies.reduce(combineBudget, 0);
     console.log('these things cost ', allTheMonies);
   }
   getData('movie/popular')
     .then(json => {
       let topTen = json.results.slice(0, 10);
       return topTen.map(getMovie)
     })
     .then(moviePromises => Promise.all(moviePromises))
     .then(showCombinedBudget);

   function getActorCredits (actor) {
     console.log('working with ', actor.name);
     return getData(`person/${actor.id}/movie_credits`)
   }
   getData('discover/movie', 'primary_release_year=2016')
     .then(json => getData(`movie/${json.results[0].id}/credits`))
     .then(json => json.cast.map(getActorCredits))
     .then(wtf => console.log(wtf));
