var React = require('react');
var MovieFacePlate = require('./movieFacePlate.jsx');
var ErrorBoundary = require('./errorBoundary.jsx');

class FacePlateContainer extends React.Component {
    constructor(props){
        super(props);

    }

    render() {
            return (
                <ErrorBoundary>
                    <MovieFacePlate movies={this.props.movies} onChangeSorting={this.props.onChangeSorting}/>
                    </ErrorBoundary>
            )
        }
}

module.exports = FacePlateContainer;