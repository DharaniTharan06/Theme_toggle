import { useState} from 'react'
import UserContextProvider from './Context/UserContextProvider'
import { Login, Profile } from './Components'
import './App.css'

function App() {
  const [theme, setTheme] = useState("Dark")

  return (
    <UserContextProvider>
      <h1 className='bg-green-600 rounded-lg'>Toggle Theme!</h1>
      <Login />
      <Profile />
    </UserContextProvider>
  )
}

export default App
