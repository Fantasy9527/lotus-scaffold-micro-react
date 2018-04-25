import React, { Component } from 'react';
import logo from '../../asserts/logo.svg';
import './App.css';
import { observable, action, autorun } from 'mobx';
import {observer} from 'mobx-react';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props){
    super(props)
    console.log(props)
  }
  increment = () => {
    this.props.dispatch({ type: 'INCREMENT' });
  };

  decrement = () => {
    this.props.dispatch({ type: 'DECREMENT' });
  };

  globalIncrement = () => {
    this.props.globalEventDistributor.dispatch({ type: 'INCREMENT' });
  };

  globalDecrement = () => {
    this.props.globalEventDistributor.dispatch({ type: 'DECREMENT' });
  };
  render() {
    // let store = this.store.store
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <button onClick={this.increment}>本地 +</button> 
        {this.props.count}
        <button onClick={this.decrement}>本地 -</button>

        <div>
          <button onClick={this.globalIncrement}>本地 +</button>
          {this.props.count}
          <button onClick={this.globalDecrement}>本地 -</button>
        </div>
      </div>
    );
  }
}

function mapStateToProps(state) {
  return {
    count: state.count
  };
}
export default connect(mapStateToProps)(App)
