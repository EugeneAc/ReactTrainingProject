var React = require('react');
 
class SearchString extends React.Component{
              
    constructor(props){
        super(props);
        this.state = { 
            inputValue: ""
        };
        this.onTextChanged = this.onTextChanged.bind(this);
    }
              
    onTextChanged(e){
        this.setState({
            inputValue: e.target.value
          });
        console.log(this.state.inputValue);
    }
              
    render() {
        return <input placeholder="Search" onChange={this.onTextChanged}/>;
    }
}
 
module.exports = SearchString;