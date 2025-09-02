import React, { useContext, useState } from 'react'
import UserContext from '../Context/UserContext'

function Login() {

    const [name,setName] = useState("")
    const [pass,setPass] = useState("")
    const {setUser} = useContext(UserContext)

    const HandleSubmit = (e)=>{
        e.preventDefault()
        setUser({name,pass})
    }

  return (
    <div>
      <h2>Login</h2>
      <input type='text'value={name} onChange={(e)=>setName(e.target.value)} placeholder='Username'  />
      <input type='password' value={pass} onChange={(e)=>setPass(e.target.value)} placeholder='Password'/>
      <button onClick={HandleSubmit}>Submit</button>
    </div>
  )
}

export default Login
