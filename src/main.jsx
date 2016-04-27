 var React = require('react');
 var ReactDOM = require('react-dom');
 var TaskManager = require('./components/TaskManager.jsx');
 var Navbar = require('./components/Navbar.jsx')

ReactDOM.render(<Navbar />, document.getElementById('header'));
ReactDOM.render(<TaskManager title="" />, document.getElementById('app'));
