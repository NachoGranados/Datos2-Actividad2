import './App.css';
import StarWarsPeople from './StarWarsPeople';
import React from 'react'
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
          <div>Star Wars Characters</div>
          <StarWarsPeople/>
        </header>
      </div>
    );
  }
}