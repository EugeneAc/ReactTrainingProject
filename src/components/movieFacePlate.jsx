var React = require('react');

class MovieFacePlate extends React.Component {
    render() {
        return (
            <div>
                <img src={this.props.imgSrc}></img>
                <div className = "movie-name">
                    {this.props.movieName}
                </div>
                <div className = "movie-year">
                    {this.props.movieYear}
                </div>
                <div className = "movie-jenre">
                    {this.props.movieJenre}
                </div>
            </div>
        );
    }
}

module.exports = MovieFacePlate;