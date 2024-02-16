
import { useEffect, useState } from 'react'
import './App.css'
import { ThemeProvider } from './context/theme'
import Card from './components/Card'
import ThemeBtn from './components/ThemeBtn'

function App() {
  const [themeMode , setThemeMode] = useState("light")
  
  const darkTheme = ()=>{
    setThemeMode("dark")
  }
  const lightTheme = ()=>{
    setThemeMode("light")
  }

  //actual chaneg in theme 
  useEffect(()=>{
    document.querySelector("html").classList.remove("light" , "dark")
    document.querySelector("html").classList.add(themeMode)
    // let changeMode = document.querySelector("html")
    // changeMode += changeMode.classList.remove("light")
    // changeMode +=changeMode.classList.add(themeMode)
  },[themeMode])

   return (
    <ThemeProvider value={{themeMode, darkTheme, lightTheme}}>
      
        <div className="flex flex-wrap min-h-screen items-center">
              <div className="w-full">
                      <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
                          <ThemeBtn />
                      </div>

                      <div className="w-full max-w-sm mx-auto">
                        <Card />
                      </div>
              </div>
        </div>

    </ThemeProvider>
  )
}

export default App
