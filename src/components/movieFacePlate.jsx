var React = require('react');
var TogleBtns = require('./toggleBtns.jsx');

var MovieFacePlate = (props) => {
        return (
            <div className = "">
                        <div className="alignRight sorting-panel">
                                Sort by
                            <TogleBtns titleLeft="Release date" titleRight="Rating" changeActive={props.onChangeSorting}/>
                        </div>
                        <div className ="movies-container">
                            {props.movies.map((video,i) => 
                            <div className="movie-face-plate" onClick={props.onChangeSelected.bind(this, video)} data="aaa">
                                <img src={video.imgSrc} data="123"></img>
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
                        </div>
        );
};

module.exports = MovieFacePlate;