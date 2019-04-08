var React = require('react');
var TogleBtns = require('./toggleBtns.jsx');
var SearchResults = require('./searchResultString.jsx');
var ErrorBoundary = require('./errorBoundary.jsx');

class SearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            searchValue: ""
        };
                           
        this.performSearch = this.performSearch.bind(this);
     }

    performSearch(searchValue){
        this.props.onSearch(searchValue);
    }

    onTextChanged(e){
        this.setState({
            searchValue: e.target.value
          });
          this.performSearch(e.target.value);
    }

    onChangeSearchParam(searchParam){
        this.props.onChangeSearchParam(searchParam);
    }
               
    render() {
        return(
            <ErrorBoundary>         
                <h2>Find your movie</h2>
                    <input placeholder="Search" onChange={this.onTextChanged.bind(this)} className="search-field"/>
                    <button onClick={this.performSearch.bind(this, this.state.searchValue)}>
                    <i className="fa fa-search" aria-hidden="true"></i>
                    </button>
                <div className = "under-search">
                    <div className="inline">
                        <span>Search by</span>
                        <TogleBtns titleLeft="Title" titleRight="Genre" className="inline" changeActive={this.onChangeSearchParam.bind(this)}/>
                    </div>
                </div>
                <div className="search-result">
                    <SearchResults moviesFound={this.props.moviesFound}/>
                </div>
            </ErrorBoundary>
            );
    }
}
 
module.exports = SearchContainer;