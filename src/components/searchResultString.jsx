var React = require('react');

class SearchResultString extends React.Component {
    render() {
        return (
            <div className="inline">
                <span>{this.props.moviesFound} Movies found</span>
            </div>
        );
    }
}

module.exports = SearchResultString;