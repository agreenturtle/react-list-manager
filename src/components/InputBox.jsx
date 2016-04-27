var React = require('react');

var InputBox = React.createClass({
  render: function(){
    return (<input className={this.props.className} onChange={this.props.onChange} value={this.props.value} placeholder={this.props.placeholder} />)
  }
});

module.exports = InputBox
