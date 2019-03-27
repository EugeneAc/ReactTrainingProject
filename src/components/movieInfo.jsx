var React = require('react');

class MovieInfo extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.imgSrc}></img>
                <div className = "movie-name-info">
                    {this.props.movieName}
                </div>
                <div className = "movie-length-info">
                    {this.props.movieLength}
                </div>
                <div className = "movie-year-info">
                    {this.props.movieYear}
                </div>
                <div className = "movie-decs-info">
                    {this.props.movieDesc}
                </div>
            </div>
        );
    }
}

module.exports = MovieInfo;