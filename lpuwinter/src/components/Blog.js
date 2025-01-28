import React from 'react'

function Blog(props) {
    console.log(props)
  return (
    <div>
      <h1>i Am a Blog component</h1>
      <ul>
        {props.skills.map((item,index)=>{
            return (
                <li>{item}</li>
            )
        })}
      </ul>
      {/* <h1>I am {props.fname} and my age {props.age} </h1>
      {props.salary && <h1>My salary is {props.salary}</h1>} */}
    </div>
  )
}

export default Blog
