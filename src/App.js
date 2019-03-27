import React from "react";
import ReactDOM from "react-dom";
var SearchContainer = require('./components/SearchContainer.jsx');
 
const propsValues = {
    title: "Find your movie",
};

ReactDOM.render(<SearchContainer data={propsValues} />, document.getElementById("search"));