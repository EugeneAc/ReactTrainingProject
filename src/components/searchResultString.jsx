var React = require('react');

var SearchResultString = (props) =>  {
        return (
            <div className="inline">
                <span>{props.moviesFound} Movies found</span>
            </div>
        );
}

module.exports = SearchResultString;