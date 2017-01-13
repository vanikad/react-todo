var React = require('react');
var ReactDOM = require('react-dom');
var expect = require('expect');
var $ = require('jQuery');
var TestUtils = require('react-addons-test-utils');

var TodoApp = require('TodoApp');
// var Todo = require

describe('TodoApp', () =>{
  it('should exist', () => {
    expect(TodoApp).toExist();
  });

  it('Should add todo  to the todos on handleAddTodo', () => {
    var todoText = "Test text";
    var todoApp = TestUtils.renderIntoDocument(<TodoApp />);

    todoApp.setState({todos: []});
    todoApp.handleAddTodo(todoText);

    expect(todoApp.state.todos[0].text).toBe(todoText);
  });

  it('Should toggle completed value when handleToggle called', () => {
    var todoData = {
      id: 11,
      text: 'Test features',
      completed: false
    };
    var todoApp = TestUtils.renderIntoDocument(<TodoApp/>);
    todoApp.setState({todos: [todoData]});

    // Check that todos first item has completed value of false
    expect(todoApp.state.todos[0].completed).toBe(false);
    // Call handleToggle with 11
    todoApp.handleToggle(11);
    // Verifiy that value changed
    expect(todoApp.state.todos[0].completed).toBe(true);
  });
});
