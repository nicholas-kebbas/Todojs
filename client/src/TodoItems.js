import React, { Component } from "react";

class TodoItems extends Component {
  constructor(props) {
    super(props);

    this.createTasks = this.createTasks.bind(this);
  }

  createTasks(item) {
    fetch('http://localhost:8000/api/1/')
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log(error))
    return <li onClick={() => this.delete(item.key)}
                key={item.key}>{item.text}</li>
  }

  delete(key) {
    this.props.delete(key);
  }

  // Test out hitting the API //
  componentDidMount(){
    this.fetchData();
  }

  fetchData() {
    fetch('http://localhost:8000/')
    .then(response => response.json())
    .then(parsedJSON => console.log(parsedJSON.results))
    .catch(error => console.log(error))
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
