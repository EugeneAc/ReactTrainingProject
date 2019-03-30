var React = require('react');

class ToggleBtns extends React.Component {
            
    constructor(props) {
        super(props);
        this.state = {
            classLeft: "active",
            classRight: "",
        };
          
        this.pressLeft = this.pressLeft.bind(this);
        this.pressRight = this.pressRight.bind(this);
    }

    pressLeft(){
        if (!(this.state.classLeft === "active"))
        this.setState({
            classLeft: "active",
            classRight: "",
          });
          this.activeChaned("left");
    }

    pressRight(){
        if (!(this.state.classRight === "active"))
        this.setState({
            classRight: "active",
            classLeft: "",
          });
          this.activeChaned("right");
    }

    activeChaned(active){
            console.warn(active)
        
        this.props.changeActive(active);
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