var React = require('react');

var ListItem = React.createClass({
  getInitialState: function(){
    return ({checked:false})
  },
  onChange: function(e){
    if(this.state.checked){
      e.target.parentNode.querySelector("label").className="";
      this.setState({checked:false});
    }
    else{
      e.target.parentNode.querySelector("label").className="checked";
      this.setState({checked:true});
    }
  },
  render: function(){ 
    return (
      <li>
        <input type="checkbox" onChange={this.onChange} />
        <label>{this.props.text}</label>
      </li>
    );
  }
});

module.exports = ListItem;
