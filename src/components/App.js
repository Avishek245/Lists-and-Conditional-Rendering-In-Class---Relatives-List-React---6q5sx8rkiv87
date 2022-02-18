import React, { Component, useState } from "react";
import "../styles/App.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      names: ["Anuj", "Gaurav", "Tushar", "Deepak"]
    };
  }
  render() {
    return (
      <div id="main">
        <ol key="relativeList">
          {this.state.names &&
            this.state.names.map((item, index) => {
              let temp = "relativeListItem" + { index };
              return <li key={temp}>{item}</li>;
            })}
        </ol>
      </div>
    );
  }
}

export default App;
