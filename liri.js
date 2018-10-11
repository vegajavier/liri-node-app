require("dotenv").config();
let keys = require("./keys.js");
let Spotify = require('node-spotify-api');
let request = require("request");

request("http://www.omdbapi.com/?i=tt3896198&apikey=79176496", function(error,response,body){

})


function spotifyMe(){
	console.log("Music for DAYS!");
}

function spotifyMe(music)
	this.concert = true;
	this.spotifyThisSong = true;
	this.movieThis = true;
	this.doWhatItSays = true;
	
	let spotify = new Spotify(keys.spotify);