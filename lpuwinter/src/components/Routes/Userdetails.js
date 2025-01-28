import React from 'react'
import { useParams } from 'react-router-dom'

export default function Userdetails() {
    const dynamic = useParams()
    console.log(dynamic)
  return (
    <div>
      {dynamic.id === "user1" && <h1>My name is Adfar And I am an instructor</h1>}
      {dynamic.id === "user2" && <h1>My name is Rohan And I am not an instructor</h1>}
      {dynamic.id === "user3" && <h1>My name is Akshay And I am  Dancer</h1>}
      {dynamic.id === "user4" && <h1>My name is Hello And I am  welcome</h1>}
    </div>
  )
}
