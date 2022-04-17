// App.js

import React, { Component } from "react";
import uniqid from "uniqid";
import Overview from "./components/Overview";

class App extends Component {
  constructor() {
    super();

    this.state = {
      task: { text: '' },
      tasks: [],
      id: uniqid()
    };
  }
// functions go between the constructor and render method
  handleChange = (e) => {
    this.setState({
      task : {
        text: e.target.value,
        id: this.state.task.id,
      },
    });
  };

  onSubmitTask = (e) => {
    e.preventDefault();
    this.setState({
      tasks: this.state.tasks.concat(this.state.task),
      task: {
      text: '',
      id: uniqid()
      },
    });
  };


  render() {
    const { tasks, task } = this.state;


    return(
      <div>
      <form  onSubmit={this.onSubmitTask}>
        <label htmlFor="taskInput">Enter task</label>
        <input
          onChange={this.handleChange}
          value={task.text}
          type="text"
          id="taskInput"
        />
        <button type="submit">
          Add Task
        </button>
      </form>
      <Overview tasks={tasks} />
    </div>
    )
  }
}

export default App;