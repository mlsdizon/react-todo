import React, { Component } from "react";
import TodoItem from "./TodoItem";
import PropType from "prop-types";

class Todos extends Component {
  render() {
    const { todos, markComplete, delTodo } = this.props;
    return todos.map(todo => (
      <TodoItem
        key={todo.id}
        todo={todo}
        markComplete={markComplete}
        delTodo={delTodo}
      />
    ));
  }
}

//prop types
Todos.PropType = {
  todos: PropType.array.isRequired,
  markComplete: PropType.func.isRequired,
  delTodo: PropType.func.isRequired
};

export default Todos;
