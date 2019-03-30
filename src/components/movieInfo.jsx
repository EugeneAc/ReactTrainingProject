var React = require('react');

var MovieInfo = (props) => {
        return (
            <div className = "movie-info">
                <img src={props.movie.imgSrc}></img>
                <div className = "movie-desc">
                <div className = "movie-name-info inline">
                    {props.movie.movieName}
                </div>
                <div className = "movie-length-info inline">
                    {props.movie.movieLength}
                </div>
                <div className = "movie-year-info inline">
                    {props.movie.movieYear}
                </div>
                <div className = "movie-decs-info inline">
                    {props.movie.movieDesc}
                </div>
                </div>
            </div>
        );
}

module.exports = MovieInfo;