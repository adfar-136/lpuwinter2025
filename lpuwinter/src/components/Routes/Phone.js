import React from 'react'
import { useParams } from 'react-router-dom'

export default function Phone() {
    const {id,no} = useParams()
    console.log(id,no)
  return (
    <div>
      {id==="user1" && no==="1" && <h1>My name is Adfar and my number is 7006525041</h1>}
      {id==="user1" && no==="2" && <h1>My name is Adfar and my number is 7006123456</h1>}
      {id==="user2" && no==="1" && <h1>My name is Rohan and my number is 1234567890</h1>}
      {id==="user3" && no==="2" && <h1>My name is Rohan and my number is 9876543210</h1>}
    </div>
  )
}
