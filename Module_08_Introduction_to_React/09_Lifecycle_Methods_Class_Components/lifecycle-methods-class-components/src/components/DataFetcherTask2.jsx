import React, { Component } from "react";

class DataFetcherTask2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      refreshCount: 0,
    };
  }

  componentDidMount() {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ users: data });
      });
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.refreshCount !== this.state.refreshCount) {
      console.log("Task 2 Component Updated");
    }
  }

  componentWillUnmount() {
    console.log("Task 2 Component Will Unmount");
  }

  refreshData = () => {
    this.setState({ refreshCount: this.state.refreshCount + 1 });
  };

  render() {
    return (
      <div>
        <h3>Task 2: User List with Lifecycle Logs</h3>
        <button onClick={this.refreshData}>Refresh</button>
        <ul>
          {this.state.users.map((user) => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default DataFetcherTask2;
