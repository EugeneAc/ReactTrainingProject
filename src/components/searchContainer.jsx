var React = require('react');
var TogleBtns = require('./toggleBtns.jsx');
var SearchResults = require('./searchResultString.jsx');

class SearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            searchValue: "",
        };
                           
        this.performSearch = this.performSearch.bind(this);
        this.onTextChanged = this.onTextChanged.bind(this);
     }
              
    performSearch(){
        console.log(this.state.searchValue);
    }

    onTextChanged(e){
        this.setState({
            searchValue: e.target.value
          });
        console.log(this.state.searchValue);
    }
               
    render() {
        return(
            <section>         
                <h2>Find your movie</h2>
                    <input placeholder="Search" onChange={this.onTextChanged} className="search-field"/>
                    <button onClick={this.performSearch} className="">
                        <span className="glyphicon glyphicon-share-alt"></span>
                    </button>
                <div className = "under-search">
                    <div className="inline">
                        <span>Search by</span>
                        <TogleBtns titleLeft="Title" titleRight="Genre" className="inline"/>
                    </div>
                    <div className="right">
                        <button onClick={this.performSearch}>Search</button>
                    </div>
                </div>
                <div className="search-result">
                    <SearchResults moviesFound="7"/>
                    <div className="right">
                        Sort by
                    <TogleBtns titleLeft="Release date" titleRight="Rating"/>
                    </div>
                </div>
            </section>
            );
    }
}
 
module.exports = SearchContainer;