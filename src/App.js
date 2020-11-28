import './App.css';
import Alert from './Alert';
import StarWarsPeople from './StarWarsPeople';
import React from 'react'
import logo from './logo.svg';
export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

      counter: 0
    }
  }
  componentDidMount() {
    setInterval(() => {
      this.setState({
        counter: this.state.counter + 1
      });
    }, 1000)
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          
          <div>{this.state.counter}</div>
          <StarWarsPeople/>
        </header>
      </div>
    );
  }
}