import React, { Component } from "react";
import axios from 'axios';
import SwitchList from './SwitchList';

class TodoItems extends Component {
    constructor(props) {
    super(props);
    this.state = {
      listId: props.listId
    }

    this.createTasks = this.createTasks.bind(this);
    // Need to get ListId from parent
    // this.listId = this.state.list;
  }

  // Need to create a list if it doesn't exist //
  createList(item) {

  }

  createTasks(item) {
    axios.post('http://localhost:8000/api/todos/' + this.state.listId)
      .then(res => {
        console.log(res);
        console.log(res.data);
      })

    return <li onClick={() => this.delete(item.key)}
                key={item.key}>{item.text}</li>
    }

  delete(key) {
    this.props.delete(key);
  }

  onHandleChange(event){
    this.setState({
      listId: event.target.value
    })
  }

  render() {
    console.log("list id in todoItems " + this.state.listId);
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <div>
      <ul className="theList">
          {listItems}
      </ul>
      </div>
    );
  }
};

export default TodoItems;
