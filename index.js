// what is the total budget of the ten most popular movies in the db?
//
// which genre has the highest average popularity for its top 25 movies?
//
// which of the top 25 horror movies have no spoken language besides English?
//
// who had the most starring roles in the top 25 comedies?
//
// how many movies have the stars of the most popular movie of last year appeared in? (list each star's name with the number of movies)

var imgUrl = 'https://image.tmdb.org/t/p/'

function getData (url, params) {
     let key = "81599007ff214265c13a0888da791d0c";
     return fetch(`https://api.themoviedb.org/3/${url}?api_key=${key}&query=${params}`)
     .then(response => response.json())
   }

// Hard Coded into the page.

// function spiderman (movie)

function spiderMan(spidey){
  let spideyTitle = spidey.title;
  let spideyPic = spidey.poster_path;
  //console.log();
  let enterName = document.querySelector('.name');
  let enterPic = document.querySelector('.pic')
  enterName.innerText = spideyTitle;
  extraSpideyInfo(spidey)
  // enterPic.innerHTML = This was supposed to be the picture.
}

function extraSpideyInfo (info) {
  let spideyOverview = document.querySelector('.overview')
  let spideyPopularity = document.querySelector('.popularity')
  let spideyVotes = document.querySelector('.votes')
  let spideyRelease = document.querySelector('.released')
   spideyOverview.innerText = info.overview
   spideyPopularity.innerText = info.popularity
   spideyVotes.innerText = info.vote_average
   spideyRelease.innerText = info.release_date
}



getData('search/movie',' spider man').then(json => json.results[0]).then(spiderMan);

function handleFormSubmit(event) {
  if(event) {
    event.preventDefault()
  }
  var textInput = document.getElementById('text-field').value;
  console.log(textInput)
  getData('search/movie',textInput).then(json => json.results[0]).then(spiderMan);
  return false;
}

var form = document.getElementById('the-form');
if (form.attachEvent) {
    form.attachEvent("submit", handleFormSubmit);
} else {
    form.addEventListener("submit", handleFormSubmit);
}


// Question Number Two. which genre has the highest average popularity for its top 25 movies?
// I know how to use the ID's.
//

// function discover(movies) {
//   console.log('This is the movie names ' , movies.title)
// }
//
//
// getData('discover/movie').then( json => json.results.map(discover));
//
//   // Genres Names and the Genres ID's
//
//    function getMovie (movieData) {
//      console.log('The Genres Name' , movieData.name)
//      console.log('The Genres ID' , movieData.id);
//       // Horror Id 27
//     }


  //  getData('genre/movie/list').then(json => json.genres.map(getMovie)).then();


  //  Question Number Three. which of the top 25 horror movies have no spoken language besides English?
  //  I've gotten the top 25 movies but I do not have all the spoken languages unless I go to each and everyone of them and get them.
  // Do not know if that is what he wants us to do to get that answer.

  // function horrorMovies (movies){
  //   console.log('The Horror Movie' , movies.title);
  // }
  //
  // getData( 'genre/27/movies').then(json => json.results.map(horrorMovies));



  // Question Number 4.  Who had the most starring roles in the top 25 comedies?


  // function comedies (movies) {
  //   Console.log('The ')
  // }
  //
  // getData('genre/movie/list').then(json => json.map(comedies))
