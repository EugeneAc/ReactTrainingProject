var React = require('react');
var MovieFacePlate = require('./movieFacePlate.jsx');

class FacePlateContainer extends React.Component {
    render() {
            return (
                   this.props.movies.map(function(item ,i){
                   console.log(item);
                    return (
                    <div className = "movie-face-plate">
                        <MovieFacePlate 
                        key={i}
                        imgSrc={item.imgSrc} 
                        movieName={item.movieName} 
                        movieYear={item.movieYear} 
                        movieGenre={item.movieGenre}/>
                    </div>)
                })
            )
    }
}

module.exports = FacePlateContainer;