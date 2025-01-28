import React, { Component } from 'react'

export default class Comp1 extends Component {
 constructor(){
    super();
    this.state = {
        name: 'John',
        count:0
    }
    this.handleClick = this.handleClick.bind(this)
 }
 handleClick(){
    this.setState({count:this.state.count+1})
}  
render() {
    return (
      <div>
        <h1>Adfar Rasheed {this.props.fname}</h1>
        <h2>My name is {this.state.name}</h2>
        <h3>Count is {this.state.count}</h3>
        <button onClick={this.handleClick}>Increment</button>
      </div>
    )
  }
}
