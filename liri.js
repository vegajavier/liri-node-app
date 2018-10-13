require("dotenv").config();

let keys = require("./keys.js");
console.log(keys);
let  fs = require('fs');
let Spotify = require("node-spotify-api");
let spotify = new Spotify(keys.spotify);
let request = require ("request");
let liri = process.argv[2];




//look up switch? case?  as a an expession switch instead of if else. MDN search..not sure how to use it in this APP //
//var expr = 'Papayas';
//switch (expr) {
//	case 'Oranges':
//	  console.log('Oranges are $0.59 a pound.');
//	  break;
//	case 'Mangoes':
//	case 'Papayas':
//	  console.log('Mangoes and papayas are $2.79 a pound.');
//	  // expected output: "Mangoes and papayas are $2.79 a pound."
//	  break;
//	default:
//	  console.log('Sorry, we are out of ' + expr + '.');
// }
  //// example from MDN LOOK OVER THE DOCS AGAIN!!!!///

if (liri === 'spotify-this-song'){
	spotifyThis();
} else if(liri === 'movie-this'){
    movieThis();
}else if(liri === 'concert-this'){
    concertThis();
} else if(liri === 'do-what-it-says'){
    doWhatItSays();
};

function movieThis() {
	let movies = process.argv[3];

	if(!movies){
		movies = "Mr.Nobody";
	};

	let queryURL = "http://www.omdbapi.com/?i=" + name + "tt3896198&apikey=79176496";
		request (queryURL, function(err, response, body){
			let movie = JSON.parse(body);
			if(!err && response.statusCode === 200){
				let movieInfo =
				"Title: " + movie.Title + "\n" +
				"Release: " + movie.Year + "\n" +
				"Ratings: " + movie.imdbRating + " \n" +
				"Rotten Tomatoes Rating: " + movie.Ratings[1].Value + "\n" +
				"Country:  " + movie.Country + "\n" +
				"Language: " + movie.Language + "\n" +
				"Plot: " + movie.Plot + "\n" +
				"Actors: " + movie.Actors + "\n" +
					console.log(movieInfo);
		}})
}

fs.appendFile("log.txt", "Title: ", "Release: ","Ratings: ", "Rotten Tomatoes Rating: ", "Country: ", "Language: ","Plot: ","Actors: ")
	if(err){
		return console.log("error: " + err);
	};



// inquirer? 
//function movieThis(){
//	inquirer.prompt([{
//		type: "input",
//		message: "What movie would you like to search?",
//	}])
// }