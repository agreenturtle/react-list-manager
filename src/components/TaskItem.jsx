var React = require('react');
var List = require('./List.jsx');

var TaskItem = React.createClass({
  getInitialState: function(){
    return {items:[], newItemText:''};
  },
  onChange: function(e){
    this.setState({newItemText: e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    if(this.state.newItemText.trim()){
      var currentItems = this.state.items;
      currentItems.push(this.state.newItemText);
      this.setState({items: currentItems, newItemText:''});
    }
  },
  render: function(){
      return(
        <div className="box">
          <h3>{this.props.title}</h3>
          <form onSubmit={this.handleSubmit}>
            <input onChange={this.onChange} value={this.state.newItemText} />
            <button> Add </button>
          </form>

          <List items={this.state.items} />
        </div>
      );
  }
});

module.exports = TaskItem;
