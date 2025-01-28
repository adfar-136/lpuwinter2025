import React, { Component } from 'react'

export default class Lifecycle extends Component {
    constructor(){
        super()
        console.log("constructor called")
        this.state ={
            fname:"Adfar",
            color:"blue",
            // timer :new Date(),
            count:0,
            text:""
        }
    }
    shouldComponentUpdate(nextProps,nextState){
        console.log("shouldComponentUpdate called")
        console.log(nextState)
        if(nextState.count === 15){
            return false
        }
        return true
    }
    static getDerivedStateFromProps(props,state){
        console.log("getDerivedStateFromProps called")
        // console.log("props :",props)
        // console.log("state :",state)
        // return {color:props.color}
    }
    // componentDidMount(){
    //     // setInterval(()=>{
    //     //     console.log("adfar")
    //     // },1000)
    //     setInterval(()=>{
    //         this.setState({timer:new Date()})
    //     },1000)
    // }
    componentDidUpdate(prevProps,prevState){
        console.log("componentDidUpdate called")
        console.log(prevState)
        if(prevState.count === 10){
            this.setState({text:"Congratulations you won"})
        }
    }
  render() {
    console.log("rednder called")
    return (
      <div>
        {/* <h1>My name is {this.state.fname}</h1> */}
        <h1>{this.state.count}</h1>
        <button onClick={()=>this.setState({count:this.state.count+1})}>++++</button>
        <h1>{this.state.text}</h1>
        {/* <h1>My name is {this.state.fname}</h1>
        <h1>My name is {this.state.fname}</h1>
         */}
        {/* <h1>{this.state.timer.toLocaleString()}</h1> */}
      </div>
    )
  }
}
