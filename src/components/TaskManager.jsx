var React = require('react');
var Task = require('./Task.jsx');
var InputBox = require('./InputBox.jsx');
var Button = require('./Button.jsx');

var TaskManager = React.createClass({
  getInitialState:function(){
    return ({tasks:[], newTaskTitle:''});
  },
  onChange: function(e){
    this.setState({newTaskTitle:e.target.value});
  },
  handleSubmit: function(e){
    e.preventDefault();
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
          <InputBox className="input-add-task" onChange={this.onChange} value={this.state.newTaskTitle} placeholder="Enter New Task" />
          <Button className="btn-add-task" text="Add New Task" />
        </form>

        <Task tasks={this.state.tasks} />
      </div>
    )
  }
});

module.exports = TaskManager;
