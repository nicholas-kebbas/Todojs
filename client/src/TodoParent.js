import React, { Component } from "react";
import axios from 'axios';

class TodoParent extends Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.list = 1
  }

  handleClick () {
    const currentList = this.activeList.value;
    axios.get('https://localhost:8000/api/' + currentList)
      .then(response => console.log(response))
      this.setState({
        activeList: currentList
      });
  };

    render() {
      return (
        <div>
          <input ref={(a) => this.activeList = a}  placeholder="Active List"></input>
          <button className='Button' onClick={this.handleClick}>Switch List</button>
        </div>
      );
    }

}

export default TodoParent;
