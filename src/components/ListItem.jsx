var React = require('react');
var ReactDOM = require('react-dom');

var ListItem = React.createClass({
  getInitialState: function(){
    return ({checked:false, showItem:true})
  },
  removeItem: function(e){
    this.setState({showItem:false});
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
    if(this.state.showItem){
      return (
        <li className="list-item">
          <input type="checkbox" onChange={this.onChange} />
          <label>{this.props.text}</label>
          <span className="delete-list-item" onClick={this.removeItem}> x </span>
        </li>
      );
    }
    else{
      return (<li></li>);
    }
  }
});

module.exports = ListItem;
