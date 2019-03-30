var React = require('react');
var MovieFacePlate = require('./movieFacePlate.jsx');
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
                    <MovieFacePlate movies={this.props.movies.sort(this.changeSorting())} onChangeSorting={this.onChangeSorting.bind(this)}/>
                    </ErrorBoundary>
            )
        }
}

module.exports = FacePlateContainer;