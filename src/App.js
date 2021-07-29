import React, { Component } from "react";
import moment from "moment";
import Form from "./components/Form";
import ClockLayout from "./components/ClockLayout";
import "./App.css";

class App extends Component {
  constructor() {
    super();

    this.state = {
      clocks: [],
      currentUTC: null
    };
  }

  componentDidMount() {
    this.loadTime();
  }

  loadTime = () => {
    setInterval(() => {
      this.setState({
        currentUTC: moment().utc()
      });
    }, 1000);
  };

  handleAdd = clock => {
    this.setState(prevState => ({
      clocks: [...prevState.clocks, clock]
    }));
  };

  handleRemove = id => {
    this.setState(prevState => ({
      clocks: prevState.clocks.filter(clock => clock.id !== id)
    }));
  };

  componentWillUnmount() {
    clearInterval(this.loadTime);
  }

  render() {
    return (
      <div className="App">
          <Form handleAdd={this.handleAdd} />
          <ClockLayout
            clocks={this.state.clocks}
            currentUTC={this.state.currentUTC}
            handleRemove={this.handleRemove}
          />
      </div>
    );
  }
}

export default App;
