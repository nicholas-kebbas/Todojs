import React, { Component } from "react";
import axios from 'axios';
import TodoItems from "./TodoItems";


// need to merge this into parent (todolist)
class SwitchList extends Component {

  constructor(props) {
    super(props);
    this.state = {
      listId: props.initialList
    };
  }


  // get data from whatever the input is
  onChangeListId() {
    this.props.changeList(this.state.listId),
    axios.get('http://localhost:8000/api/todos/' + this.state.listId, {
      // can add params here
    })
      .then(response => console.log(response))
      // need to change state to force react to re-render
  }

  // get current value from input field
  onHandleChange(event){
    this.setState({
      listId: event.target.value
    })
  }

  // input is set by user here
  render() {
    return (
      <div>
        <input type="text" value={this.state.listId}
          onChange={(event) => this.onHandleChange(event)}></input>
        <button className='btn btn-primary Button' onClick={this.onChangeListId.bind(this)}>Switch List</button>
        <p>Current List: {this.state.listId}</p>
      </div>
    );
  }
}

export default SwitchList;
