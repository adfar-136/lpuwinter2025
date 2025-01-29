import React, { Component } from 'react'
import { increment,decrement } from './reduxclass/action'
import { connect } from 'react-redux'
 class CounterClass extends Component {
  render() {
    const {count,increment,decrement} = this.props

    return (
      <div>
        <h1>count : {count}</h1>
        <button onClick={()=>increment()}>Increment</button>
        <button onClick={()=>decrement()}>Decrement</button>
      </div>
    )
  }
}
const mapStateToProps =(state)=>({
    count:state
})

const mapDispatchToProps =(dispatch)=>({
    increment:()=>dispatch(increment()),
    decrement:()=>dispatch(decrement())
})

export default connect(mapStateToProps,mapDispatchToProps)(CounterClass)