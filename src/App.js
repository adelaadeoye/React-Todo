import React from 'react';
import TodoList from './components/TodoComponents/TodoList'
import TodoForm from './components/TodoComponents/TodoForm'
import './components/TodoComponents/Todo.css'


const todoData=[
  {
    task: 'Organize Garage',
    id: 1528817077286,
    completed: false
  },
  {
    task: 'Bake Cookies',
    id: 1528817084358,
    completed: false
  }
];
class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
 constructor (){
super();
this.state={
  todoData: todoData,
  list:""
}}
toggleList = id => {
  this.setState({
    todoData: this.state.todoData.map(item => {
      if (item.id === id) {
        return {
          ...item,
          // Same as:
          // name: item.name,
          // id: item.id,
          // purchased: item.purchased,
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
    return (
      <div className="container">
        <h2>Welcome to your Todo App!</h2>
        <TodoList 
        todos={this.state.todoData}
        toggleList={this.toggleList}
        
        />
        <TodoForm addItem={this.addItem}
        clearCompletedTodos={this.clearCompletedTodos}
        submitTodo={this.submitTodo}
        handleChanges={this.handleChanges}/>
      </div>
    );
  }
}

export default App;
