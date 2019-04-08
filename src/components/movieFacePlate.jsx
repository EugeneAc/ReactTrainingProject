var React = require('react');
var TogleBtns = require('./toggleBtns.jsx');
var ErrorBoundary = require('./errorBoundary.jsx');

var MovieFacePlate = (props) => {
        return (
            <ErrorBoundary>
                        <div className="alignRight sorting-panel">
                                Sort by
                            <TogleBtns titleLeft="Release date" titleRight="Rating" changeActive={props.onChangeSorting}/>
                        </div>
                        <div className ="movies-container">
                            {props.movies.map((video,i) => 
                            <div className="movie-face-plate" key={i} onClick={props.onChangeSelected.bind(this, video)}>
                                <img src={video.imgSrc}></img>
                                <div className = "movie-name inline">
                                    {video.movieName}
                                </div>
                                <div className = "movie-year alignRight">
                                    {video.movieYear}
                                </div>
                                <div className = "movie-genre">
                                    {video.movieGenre}
                                </div>
                            </div>
                                )   
                            }
                        </div>
            </ErrorBoundary>
        );
};

module.exports = MovieFacePlate;