import axios from "axios";
import React from "react";

const movieBaseUrl = "https://api.themoviedb.org/3";
const apiKey = "579dc0119a4a8a8c786e157f507bd961";
const movieByGenreBaseURL='https://api.themoviedb.org/3/discover/movie?api_key=579dc0119a4a8a8c786e157f507bd961';
// https://api.themoviedb.org/3/trending/all/day?api_key=579dc0119a4a8a8c786e157f507bd961

const getTrendingVideos = axios.get(
  movieBaseUrl + "/trending/all/day?api_key=" + apiKey
);
const getMovieByGenreId=(id)=>
    axios.get(movieByGenreBaseURL+"&with_genres="+id)

export default { getTrendingVideos,getMovieByGenreId };
