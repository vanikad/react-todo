var React = require('react');
var TodoList = require('TodoList');
var AddTodo = require('AddTodo');

var TodoApp = React.createClass({
  getInitialState: function(){
    return {
      todos: [
        {
          id: 1,
          text: 'Walk the dog'
        },
        {
          id: 2,
          text: 'Clean the yard'
        },
        {
          id: 3,
          text: 'Learn ReactJS'
        },
        {
          id: 4,
          text: 'Finish Speech recognition app'
        }
      ]
    };
  },
  handleAddTodo: function(text) {
    alert('new todo: ' + text);
  },
  render: function(){
    var {todos} = this.state;
    return (
      <div>
        TodoApp
        <TodoList todos={todos}/>
        <AddTodo onAddTodo = {this.handleAddTodo} />
      </div>
    )
  }
});

module.exports = TodoApp;
