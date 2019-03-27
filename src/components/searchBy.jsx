var React = require('react');

class SearchBy extends React.Component {
             
    constructor(props) {
        super(props);
        this.state = {class: "active"};
          
        this.press = this.press.bind(this);
    }
    
    press(){
        var className = (this.state.class==="active")?"":"active";
        this.setState({class: className});
    }
    render() {
        return <button onClick={this.press} className={this.state.class}>{this.props.title}</button>;
    }
}

module.exports = SearchBy;