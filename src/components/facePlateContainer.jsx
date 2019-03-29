var React = require('react');
var MovieFacePlate = require('./movieFacePlate.jsx');
var TogleBtns = require('./toggleBtns.jsx');
var ErrorBoundary = require('./errorBoundary.jsx');

class FacePlateContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            sorting:"left",
            movies :[]
        }
    }

    onChangeSorting(newSorting){
        this.setState({
            sorting: newSorting
        })
    }

    changeSorting(){
        if (this.state.sorting === "left")
        {
                return function(a, b){
                    return a.movieYear - b.movieYear
            }
        }
        else
        {
                return function(a, b){
                    return b.rating - a.rating
            }
        }
    }

    render() {
            return (
                    <ErrorBoundary>
                        <div className="right">
                                Sort by
                            <TogleBtns titleLeft="Release date" titleRight="Rating" changeActive={this.onChangeSorting.bind(this)}/>
                        </div>
                        <div className ="movies-container">
                            {this.props.movies.sort(this.changeSorting()).map((video,i) => 
                                <div className = "movie-face-plate" key={i}>
                                    <MovieFacePlate 
                                    imgSrc={video.imgSrc} 
                                    movieName={video.movieName} 
                                    movieYear={video.movieYear} 
                                    movieGenre={video.movieGenre}/>
                                </div>
                                )   
                            }
                        </div>
                    </ErrorBoundary>
            )
        }
}

module.exports = FacePlateContainer;