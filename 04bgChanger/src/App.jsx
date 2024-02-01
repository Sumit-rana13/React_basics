import { useState } from "react"

function App() {
  const [color,setColor] = useState("olive")
  return (
    <>
      <div className="border-2 border-red-500 w-full h-screen"
      style={{backgroundColor:color}}>
        <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2 ">
          <div className="flex flex-wrap bg-white px-4 py-2 rounded-full gap-2">
            <button 
            onClick={()=>setColor("red")}
            className="outline-none px-4 rounded-full text-white  shadow-2xl" style={{backgroundColor:"red"}}>Red</button>
            <button onClick={()=>setColor("green")} className="outline-none px-4 rounded-full text-white  shadow-2xl" style={{backgroundColor:"green"}}>Green</button>
            <button onClick={()=>setColor("blue")} className="outline-none px-4 rounded-full text-white  shadow-2xl" style={{backgroundColor:"blue"}}>Blue</button>
            <button onClick={()=>setColor("orange")} className="outline-none px-4 rounded-full text-white  shadow-2xl" style={{backgroundColor:"orange"}}>Orange</button>
            
          </div>
        </div>
        
      </div>
    </>
  )
}

export default App
