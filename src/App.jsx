import { useState , createContext , useContext} from 'react'
import './App.css'
import UserContextProvider from './Context/UserContextProvider'
import { Login } from './Components'

function App() {
  const [theme, setTheme] = useState("Dark")

  return (
    <UserContextProvider>z
      <h1 className='bg-green-600 rounded-lg'>Toggle Theme!</h1>
    </UserContextProvider>
  )
}

export default App
