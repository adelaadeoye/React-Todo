import React from "react";
import TodoList from "./components/TodoComponents/TodoList";
import TodoForm from "./components/TodoComponents/TodoForm";
import "./components/TodoComponents/Todo.css";

const todoData = [
  {
    task: "Organize Garage",
    id: 1528817077286,
    completed: false
  },
  {
    task: "Bake Cookies",
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  constructor() {
    super();
    if (JSON.parse(window.localStorage.getItem("data"))) {
      this.state = {
        todoData: JSON.parse(window.localStorage.getItem("data")),
        list: ""
      };
    }
    else { this.state = {
      todoData: todoData,
      list: ""
    };}
  }
  toggleList = id => {
    this.setState({
      todoData: this.state.todoData.map(item => {
        if (item.id === id) {
          return {
            ...item,
            completed: !item.completed
          };
        } else {
          return item;
        }
      })
    });
  };

  addItem = itemName => {
    const newItem = {
      task: itemName,
      id: Date.now(),
      completed: false
    };
    this.setState({
      todoData: [...this.state.todoData, newItem]
    });
  };

  clearCompletedTodos = e => {
    e.preventDefault();
    let todoData = this.state.todoData.filter(todo => !todo.completed);
    this.setState({ todoData });
  };
  handleChanges = e => {
    this.setState({
      [e.target.name]: e.target.value
    });
  };

  submitTodo = e => {
    e.preventDefault();
    this.addItem(this.state.list);
  };

  render() {
    window.localStorage.setItem("data", JSON.stringify(this.state.todoData));

    return (
      <div className="container">
        <h2>Welcome to your Todo App!</h2>
        <TodoList todos={this.state.todoData} toggleList={this.toggleList} />
        <TodoForm
          addItem={this.addItem}
          clearCompletedTodos={this.clearCompletedTodos}
          submitTodo={this.submitTodo}
          handleChanges={this.handleChanges}
        />
      </div>
    );
  }
}

export default App;
