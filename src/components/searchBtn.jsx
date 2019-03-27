var React = require('react');

class SearchBtn extends React.Component {
    render() {
        return <button className={this.props.class}>{this.props.title}</button>;
    }
}

module.exports = SearchBtn;