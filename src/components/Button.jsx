var React = require('react');

var Button = React.createClass({
  render: function(){
    return (<button className={this.props.className}> {this.props.text} </button>)
  }
});

module.exports = Button;
