import React, { Component } from "react";
import TodoItems from "./TodoItems";
import SwitchList from './SwitchList';
import "../TodoList.css";
import axios from 'axios';

class TodoList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      listId: 1
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

// this updates listId, and  need to update listId in TodoItems
  onChangeList(newList) {
    this.setState({
      listId: newList
    });
  }

  render() {
    console.log("List Id in TodoList: " + this.state.listId);
    return (
      <div className="todoListMain row">
        <div className="col-lg-6">
          <form onSubmit={this.addItem}>
            <div className="input-group">
                  <input className="form-control" ref={(a) => this.inputElement = a}  placeholder="Enter Task">
                  </input>
                  <span className="input-group-btn">
                    <button type="submit" className="btn btn-primary Button">Add Item</button>
                  </span>
            </div>
          </form>
          </div>
        <div>
            <SwitchList initialList={this.state.listId} changeList={this.onChangeList.bind(this)}/>
        </div>
        <TodoItems listId={this.state.listId} entries={this.state.items} delete={this.deleteItem} />
      </div>
    );
  }
}

export default TodoList;
