import { useState } from "react"
// import "./index.css"

function App() {
  const [color, setcolor] = useState("olive")
  
  return (
    <>
      <div className="w-full h-screen duration-200" style={{backgroundColor:color}}>
        <div className="flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
        text
        </div> 

      </div>
    </>
  )
}

export default App
