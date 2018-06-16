import React, { Component } from "react";
import TodoItems from "./TodoItems";
import TodoParent from './TodoParent';
import "./TodoList.css";
import axios from 'axios';

class TodoList extends Component {

  constructor(props) {
    super(props);

    this.state = {
      items: [],
      activeList: 1
    };

    this.addItem = this.addItem.bind(this);
    this.deleteItem = this.deleteItem.bind(this);

  }

  addItem(todoItem) {
    if (this.inputElement.value !== "") {
      var newItem = {
        text: this.inputElement.value,
        key: Date.now()
      };

      this.setState((prevState) => {
        return {
          items: prevState.items.concat(newItem)
        };
      });

      this.inputElement.value = "";
    }

    console.log(this.state.items);
    todoItem.preventDefault();
  }

  deleteItem(key) {
    var filteredItems = this.state.items.filter(function (item) {
      return (item.key !== key);
    });

    this.setState({
      items: filteredItems
    });
  }

  // Test out hitting the API //
  componentDidMount(){
    this.viewList();
  }

  viewList() {
    axios.get(`http://localhost:8000/api/8`)
    .then(res => {
            const listItem = res.data;
            this.setState({ listItem });
          })
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .then(console.log("list item " + this.listItem))
    .catch(error => console.log(error))
  }

  render() {
    return (
      <div className="todoListMain">
        <div className="header">
          <form onSubmit={this.addItem}>
            <input ref={(a) => this.inputElement = a}  placeholder="Enter Task">
            </input>
            <button type="submit">Add Item</button>
            <br />
            <TodoParent />
          </form>
        </div>
        <TodoItems entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
