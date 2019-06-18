import React from 'react';
import './App.css';

class Clicker extends React.Component{

  state={
    counter:0
  }

  buttonOnClickPlus = () => {
    this.setState({counter:this.state.counter+1})
  }

  buttonOnClickMinus = () => {
    this.setState({counter:this.state.counter-1})
  }

  buttonOnClickRefresh = () => {
    this.setState({counter:0})
  }

  render(){
    return (
      <div>
        <div className="number">{this.state.counter}</div>
        <div className="buttons">
          <button className="plus" onClick = {this.buttonOnClickPlus}>
            <i className="fas fa-plus" />
          </button>
          <button className="refresh" onClick = {this.buttonOnClickRefresh}>
            <i className="fas fa-sync" />
          </button>
          <button className="minus" onClick = {this.buttonOnClickMinus}>
            <i className="fas fa-minus" />
          </button>
        </div>
      </div>
    );
  }
}

class App extends React.Component{
  render(){
    return(
      <div className="main">
        <div className="clickers"><Clicker /></div>
        <div className="clickers"><Clicker /></div>
      </div>
    )
  }
}

export default App;
