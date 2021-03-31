import logo from './logo.svg';
import './App.css';
import React from 'react';
import { render } from '@testing-library/react';

// const app = App(props)
// app.render()

// const x = 1
// x++; // -> x = x + 1;

// with react router
// if you visit website.com/hello -> website.com/ -> goes through logic of switch to determine component to be rendered
// and it will leave the url which is displayed as website.com/hello.

/**
 * website.com/post1 -> hits flask server -> server performs logic (like db lookup) -> server uses a html templating engine to render an html webpage (which then attaches js scripts to make it dynamic)
 * website.com/post2 -> hit js server -> server performs logic and also pre-renders react into html -> sends pre-rendered html to browser for faster first load -> react will begin to run in the browser
 * static rendering -> at build time pre-render react into html -> then do the same as Server side rendering
 * etc
 */

class App extends React.Component {
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
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <div onClick={this.handleClick}>
            {this.state.counter}
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
        </header>
      </div>
    );
  }
}

//function App() {
  //return (
    //<div className="App">
      //<header className="App-header">
        //<img src={logo} className="App-logo" alt="logo" />
        //<p>
          //Edit <code>src/App.js</code> and save to reload.
        //</p>
        //<a
          //className="App-link"
          //href="https://reactjs.org"
          //target="_blank"
          //rel="noopener noreferrer"
        //>
          //Learn React
        //</a>
      //</header>
    //</div>
  //);
//}

export default App;
