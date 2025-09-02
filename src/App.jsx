import { useEffect, useState} from 'react'
//import UserContextProvider from './Context/UserContextProvider'
import { Login, Profile, Card, Themebtn } from './Components'
import './App.css'
import { Themeprovider } from './Context/Theme'

function App() {
  const [thememode, setThememode] = useState("light")
  const lighttheme = ()=>{
    setThememode("light")
  }
  const darktheme = ()=>{
    setThememode("dark")
  }
  /*<UserContextProvider>
      <h1 className='bg-green-600 rounded-lg'>Toggle Theme!</h1>
      <Login/>
      <Profile/>
      </UserContextProvider> 
  */
  useEffect(()=>{
    const ele = document.querySelector('html')
    ele.classList.remove("light","dark")
    ele.classList.add(thememode)
  },[thememode])
  return (
    <Themeprovider value={{thememode, lighttheme, darktheme}}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <Themebtn />
          </div>
          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </Themeprovider>
  )
}

export default App
