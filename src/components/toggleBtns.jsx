var React = require('react');

class ToggleBtns extends React.Component {
             
    constructor(props) {
        super(props);
        this.state = {
            classLeft: "active",
            classRight: ""
        };
          
        this.pressLeft = this.pressLeft.bind(this);
        this.pressRight = this.pressRight.bind(this);
    }
    
    pressLeft(){
        console.log(!(this.state.classLeft === "active"));
        if (!(this.state.classLeft === "active"))
        this.setState({
            classLeft: "active",
            classRight: ""
          });
    }

    pressRight(){
        console.log(!(this.state.classRight === "active"));
        if (!(this.state.classRight === "active"))
        this.setState({
            classRight: "active",
            classLeft: ""
          });
    }
    
    render() {
        return (
            <div className="toggle-btms inline">
                <button onClick={this.pressLeft} className={this.state.classLeft} >{this.props.titleLeft}</button>
                <button onClick={this.pressRight} className={this.state.classRight} >{this.props.titleRight}</button>
            </div>
        );
    }
}

module.exports = ToggleBtns;