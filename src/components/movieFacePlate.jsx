var React = require('react');

class MovieFacePlate extends React.Component {
    render() {
        return (
            <div className="">
                <img src={this.props.imgSrc}></img>
                <div className = "movie-name inline">
                    {this.props.movieName}
                </div>
                <div className = "movie-year right">
                    {this.props.movieYear}
                </div>
                <div className = "movie-genre">
                    {this.props.movieGenre}
                </div>
            </div>
        );
    }
}

module.exports = MovieFacePlate;