import React, { Component } from "react";
import PropType from "prop-types";

export class TodoItem extends Component {
  getStyle = () => {
    const { todo } = this.props;
    return {
      background: "#f4f4f4",
      padding: "10px",
      borderBottom: "1px #ccc dotted",
      textDecoration: todo.completed ? "line-through" : "none"
    };
  };

  render() {
    const { todo, markComplete, delTodo } = this.props;
    const { id, title } = todo;
    return (
      <div style={this.getStyle()}>
        <p>
          <input type="checkbox" onChange={markComplete.bind(this, id)} />
          {title}
          <button style={btnStyle} onClick={delTodo.bind(this, id)}>
            x
          </button>
        </p>
      </div>
    );
  }
}

//prop types
TodoItem.PropType = {
  todo: PropType.object.isRequired,
  markComplete: PropType.func.isRequired,
  delTodo: PropType.func.isRequired
};

//Styles
const btnStyle = {
  background: "#ff0000",
  color: "#fff",
  border: "none",
  padding: "5px 9px",
  borderRadius: "50%",
  cursor: "pointer",
  float: "right"
};

export default TodoItem;
