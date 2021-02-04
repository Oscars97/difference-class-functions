import React, { Component } from "react";

class SayHiClass extends Component {
  handleClick = () => {
    setTimeout(this.showAlert, 4000);
  };

  showAlert = () => {
    alert(`Hello ${this.props.name}!`);
  };

  render() {
    return (
      <div>
        <button onClick={this.handleClick}>Say Hi with Class</button>
      </div>
    );
  }
}

export default SayHiClass;
