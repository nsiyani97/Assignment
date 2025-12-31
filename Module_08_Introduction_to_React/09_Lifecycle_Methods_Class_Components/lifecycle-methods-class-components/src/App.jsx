import React, { Component } from "react";
import DataFetcherTask1 from "./components/DataFetcherTask1";
import DataFetcherTask2 from "./components/DataFetcherTask2";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showTask2: true,
    };
  }

  toggleTask2 = () => {
    this.setState({ showTask2: !this.state.showTask2 });
  };

  render() {
    return (
      <div>
        <DataFetcherTask1 />

        <button onClick={this.toggleTask2}>Toggle Task 2 Component</button>

        {this.state.showTask2 && <DataFetcherTask2 />}
      </div>
    );
  }
}

export default App;
