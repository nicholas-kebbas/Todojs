import React, { Component } from "react";
import axios from 'axios';
import TodoParent from './TodoParent';

class TodoItems extends Component {
    constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  // Need to create a list if it doesn't exist //
  createList(item) {

  }

  createTasks(item) {
    var state = {
      listId: '',
      taskContent: '',
    }

    var handleChange = event => {
      this.setState({ listId: event.target.value });
    }

    axios.post('http://localhost:8000/api/todos/' + state.listId)
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

  render() {
    var todoEntries = this.props.entries;
    var listItems = todoEntries.map(this.createTasks);

    return (
      <ul className="theList">
          {listItems}
      </ul>
    );
  }
};

export default TodoItems;
