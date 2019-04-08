var React = require('react');
var TogleBtns = require('./toggleBtns.jsx');
var SearchResults = require('./searchResultString.jsx');
var SearchContainerDummy = require('./serchContainerDummy.jsx');

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
            <SearchContainerDummy 
                onInputChange={this.onTextChanged.bind(this)}
                onSearchButtonClick={this.performSearch.bind(this, this.state.searchValue)} 
                onChangeSearchParam={this.onChangeSearchParam.bind(this)}
                moviesFound = {this.props.moviesFound} />
            );
    }
}
 
module.exports = SearchContainer;