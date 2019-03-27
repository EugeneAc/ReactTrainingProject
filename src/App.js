import React from "react";
import ReactDOM from "react-dom";
var SearchContainer = require('./components/SearchContainer.jsx');
var FacePlateContainer = require('./components/facePlateContainer.jsx');

const sampleMovie =
{
    imgSrc: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSJjJ0oj9DdOyVjYyDREytOES2pKEDgUtXDvNeaDnflAoXfg6I4",
    movieName: "Kill Bill",
    movieYear: "2000",
    movieGenre: "Action"
}

const movies = 
    [
            sampleMovie 
    ]


ReactDOM.render(<SearchContainer />, document.getElementById("search"));

ReactDOM.render(<FacePlateContainer movies={movies} />, document.getElementById("facePlate"));