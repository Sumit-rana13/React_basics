import { useCallback, useEffect, useState, useRef } from "react"

function App() {
  const [length , setLength] = useState("6");
  const [numAllowed, setNumAllowed] = useState("false");
  const [charAllowed, setCharAllowed] = useState("false")
  const [password , setPassword] =useState("")

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let pass=""
    
    let str="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if(numAllowed) str+= "0123456789"
    if(charAllowed) str+="!#$%&'()*+,-./:;<=>?@[\]^_`{|}~"

    for (let i = 1; i <= length; i++) {
    let char = Math.floor(Math.random() * str.length + 1)
    pass += str.charAt(char)
    }
   
    setPassword(pass)

  },[length,numAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,passwordGenerator])




  return (
    <>
    <div className="border-2 border-red-500 w-[80%] bg-slate-800 mx-auto mt-6 rounded-lg">
      <h2 className="text-white text-2xl py-4 text-center">Password Generator</h2>
      <div className="flex justify-center m-3 overflow-hidden rounded-2xl">
        <input type="text"
          placeholder="password"
          value={password}
          className="outline-none w-full py-1 px-3 "
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={()=>{
          copyPasswordToClipboard()
        }}
        className="bg-blue-700 text-white px-4 text-lg">copy</button>
      </div>

      <div className="m-3 text-white flex gap-x-2">
        <div className="flex items-center gap-x-2">
          <input type="range"  
            min={6}
            max={100}
            // value={length}
            className="cursor-pointer"
            onClick={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>         
        </div>

        <div className="flex items-center gap-x-2 ">
          <input type="checkbox" 
            defaultChecked = {numAllowed}
            id="numberInput"
            onChange={()=>{
              setNumAllowed((prev)=>{!prev})
            }}
          />
        </div>
        <label htmlFor="numberInput">Number</label>

        <div className="flex items-center gap-x-2 ">
          <input type="checkbox"
            defaultChecked = {charAllowed}
            id="characterInput"
            onChange={()=>{
              setCharAllowed((prev)=>{!prev})
            }}
           />
        </div>
        <label >Character</label>
      </div>

    </div>
    </>
  )
}

export default App
