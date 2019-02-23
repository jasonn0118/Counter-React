import React, { Component } from 'react';
import Button from './Button';
import Display from './Display';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      number:0
    }
    // this.onClickHandler=this.onClickHandler.bind(this);
  }
  onClickHandler=(payload)=>{
    this.setState({number: this.state.number+payload});//Reload State.
  }
  render() {
    return (
      <div className="App">
        <Display value = {this.state.number}/>
        <Button ClickHandler={()=>this.onClickHandler(1)}>Up</Button>
        <Button ClickHandler={()=>this.onClickHandler(-1)}>Down</Button>
      </div>
    );
  }
}



export default App;
