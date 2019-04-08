var React = require('react');
var TogleBtns = require('./toggleBtns.jsx');
var SearchResults = require('./searchResultString.jsx');
var ErrorBoundary = require('./errorBoundary.jsx');

var SearchContainerDummy = (props) =>  {
        return (
            <ErrorBoundary>         
                <h2>Find your movie</h2>
                    <input placeholder="Search" onChange={props.onInputChange} className="search-field"/>
                    <button onClick={props.onSearchButtonClick}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                <div className = "under-search">
                    <div className="inline">
                        <span>Search by</span>
                        <TogleBtns titleLeft="Title" titleRight="Genre" className="inline" changeActive={props.onChangeSearchParam}/>
                    </div>
                </div>
                <div className="search-result">
                    <SearchResults moviesFound={props.moviesFound}/>
                </div>
            </ErrorBoundary>
        );
}

module.exports = SearchContainerDummy;