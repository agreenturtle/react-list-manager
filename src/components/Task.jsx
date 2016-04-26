var React = require('react');
var TaskItem = require('./TaskItem.jsx');

var Task = React.createClass({
  render: function(){
    var createTask = function(title, index){
      return <TaskItem key={index+title} title={title} />
    }

    return (<div> {this.props.tasks.map(createTask)} </div>);
  }
});

module.exports = Task;
