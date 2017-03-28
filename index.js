var pageCounter = 1;
var animalContainer = document.getElementById("movie-info");
var btn = document.getElementById("btn");

btn.addEventListener("click", function(){
  var ourRequest = new XMLHttpRequest();
  ourRequest.open('GET', 'https://learnwebcode.github.io/json-example/animals-' + pageCounter + '.json')
  ourRequest.onload = function() {
   var ourData = JSON.parse(ourRequest.responseText);
   renderHTML(ourData);
  };
  ourRequest.send();
  pageCounter++;
  if (pageCounter > 3) {
    btn.classList.add("hide-me");
  }
})

function renderHTML (data){
  var htmlString = ""

  for (i = 0; i < data.length; i++){
    htmlString += "<p>" + data[i].name + " is a " + data[i].species + ".</p>";
  }
  animalContainer.insertAdjacentHTML('beforeend', htmlString)
}

// var request = new
// Request('https://api.github.com/users/andersontr15');
// console.log(request.method)
//
// fetch(request).then(function(response){
//   return response;
// }).then(function(json){
//   console.log("JSON" :json);
// });
