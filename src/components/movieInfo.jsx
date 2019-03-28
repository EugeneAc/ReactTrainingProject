var React = require('react');

class MovieInfo extends React.Component {
    render() {
        return (
            <div className = "movie-info">
                <img src={this.props.movie.imgSrc}></img>
                <div className = "movie-desc">
                <div className = "movie-name-info inline">
                    {this.props.movie.movieName}
                </div>
                <div className = "movie-length-info inline">
                    {this.props.movie.movieLength}
                </div>
                <div className = "movie-year-info inline">
                    {this.props.movie.movieYear}
                </div>
                <div className = "movie-decs-info inline">
                    {this.props.movie.movieDesc}
                </div>
                </div>
            </div>
        );
    }
}

module.exports = MovieInfo;