import React from 'react';

class Clicker extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      counter: 0
    };

    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    // this.state[counter]++; // bad
    this.setState({
      counter: this.state.counter + 1
    })
  }

  render() {
    console.log(this.state.counter);
    return (
      <div onClick={this.handleClick}>
        {this.state.counter}
      </div>
    )
  }
}

export default Clicker