var React = require('react');
var Task = require('./Task.jsx');

var TaskManager = React.createClass({
  getInitialState:function(){
    return ({tasks:[], newTaskTitle:''});
  },
  onChange: function(e){
    this.setState({newTaskTitle:e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
    console.log("TaskManager-handleSubmit: (", this.state.newTaskTitle, ")");
    if(this.state.newTaskTitle.trim()){
      var currentTask = this.state.tasks;
      currentTask.push(this.state.newTaskTitle);
      this.setState({tasks: currentTask, newTaskTitle:''});
    }
  },
  render: function(){
    return(
      <div className="main-box">
        <h3>{this.props.title}</h3>
        <form onSubmit={this.handleSubmit}>
          <input onChange={this.onChange} value={this.state.newTaskTitle} />
          <button> Add a New Task </button>
        </form>

        <Task tasks={this.state.tasks} />
      </div>
    )
  }
});

module.exports = TaskManager;
