var React = require('react');

class ToggleBtns extends React.Component {
            
    constructor(props) {
        super(props);
        this.state = {
            className: "left"
        };
    }

    onPress(e){
        this.setState({
            className: e
          });

            this.props.changeActive(e);
          
          
    }

    render() {
        return (
            <div className="toggle-btms inline">
                <button onClick={this.onPress.bind(this, "left")} className={this.state.className} >{this.props.titleLeft}</button>
                <button onClick={this.onPress.bind(this, "right")} className={this.state.className} >{this.props.titleRight}</button>
            </div>
        );
    }
}

    module.exports = ToggleBtns;