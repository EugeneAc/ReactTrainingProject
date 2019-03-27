var React = require('react');
var SearchString = require('./searchString.jsx');
var SearchBy = require('./searchBy.jsx');
var SearchBtn = require('./searchBtn.jsx');

class SearchContainer extends React.Component {
    constructor(props){
        super(props);
        this.state = { 
            searchValue: "",
        };
                           
        this.performSearch = this.performSearch.bind(this);
     }
              
    performSearch(){
        console.log(this.state.searchValue);
    }
               
    render() {
        return(
            <section>         
                <h2>{this.props.data.title}</h2>
                    <SearchString inputValue={this.state.searchValue}/>
                    <SearchBtn title="Search"  onClick={this.performSearch} />
                    <button  onClick={this.performSearch}>test</button>;
                <div>
                    <span>Search by</span>
                    <SearchBy title="Title"/>
                    <SearchBy title="Genre"/>
                    
                </div>
                <div>
                    <SearchBtn title="Search" onClick={this.performSearch}/>
                </div>
            </section>);
    }
}
 
module.exports = SearchContainer;