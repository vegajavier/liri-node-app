require("dotenv").config();

let keys = require("./keys.js");
let  fs = require('fs');
let Spotify = require('node-spotify-api');
let spotify = new Spotify(keys.spotify);
let request = require("request");
let liri = process.argv[2];
let name = process.argv[3];
console.log(keys);

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
	let queryURL = "http://www.omdbapi.com/?i=" + name + "tt3896198&apikey=79176496";
		request (queryURL, function(err, response, body){
			let movie = JSON.parse(body);
			if(!err && response.statusCode === 200){
				let movieInfo =
				"----------------------------" + "\n" +
				"Title: " + movie.Title + "\n" +
				"Release: " + movie.Year + "\n" +
				"Ratings: " + movie.imdbRating + " \n" +
				"Rotten Tomatoes Rating: " + movie.Ratings[1].Value + "\n" +
				"Country:  " + movie.Country + "\n" +
				"Language: " + movie.Language + "\n" +
				"Plot: " + movie.Plot + "\n" +
				"Actors: " + movie.Actors + "\n" +
				"-----------------------------" + "\n"
					console.log(movieInfo);
		}})
}