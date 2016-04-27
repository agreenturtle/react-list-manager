var React = require('react');

var Navbar = React.createClass({
  render: function(){
    return(
      <header>
        <a className="header-title" href="#"> Task Manager </a>
      </header>
    )
  }
});

module.exports = Navbar;
