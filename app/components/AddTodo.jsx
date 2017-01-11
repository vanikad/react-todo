var React = require('react');

var AddTodo = React.createClass({

  handleSubmit: function(e){
    e.preventDefault();

    var text = this.refs.todoText.value;
    this.refs.todoText.value = "";
    if(text.trim().length > 0){
      this.props.onAddTodo(text);
    } else {
      this.refs.todoText.focus();
    }
  },

  render: function () {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" ref="todoText" placeholder="Enter todo"></input>
          <button className="button expanded">Send</button>
        </form>
      </div>
    );
  }
});

module.exports = AddTodo;
