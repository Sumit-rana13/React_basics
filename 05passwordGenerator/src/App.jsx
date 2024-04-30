import { useCallback, useEffect, useState, useRef } from "react"

function App() {
  const [length , setLength] = useState(6);
  const [numAllowed, setNumAllowed] = useState(false);
  const [charAllowed, setCharAllowed] = useState(false);
  const [useUpperCase , setUseUpperCase] = useState(false);
  const [useLowerCase, setUseLowerCase] = useState(true)
  const [password , setPassword] = useState("");

  // useRef hook
  const passwordRef = useRef(null)

  const passwordGenerator = useCallback(()=>{
    let newPassword="";
    let str="";

    if (numAllowed) str += "0123456789";
    if (charAllowed) str +="!@#$%^&*()";
    if (useLowerCase) str += "abcdefghijklmnopqrstuvwxyz";
    if (useUpperCase) str += "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

    for (let i = 1; i <= length; i++) {
      newPassword += str.charAt(Math.floor(Math.random() * str.length + 1));
    }
   
    setPassword(newPassword)

  },[length,numAllowed,charAllowed,setPassword])

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select();
    window.navigator.clipboard.writeText(password)
  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numAllowed,charAllowed,useUpperCase,useLowerCase, passwordGenerator])




  return (
    <>
    <div className=" w-[70%] bg-[url('https://img.freepik.com/free-photo/blue-smooth-wall-textured-background_53876-106133.jpg?w=996&t=st=1706892291~exp=1706892891~hmac=b3313fac4fd8f149a5c35ad2a67657f4452c187cf72ad2009da32acf1161f0e6')] mx-auto mt-[20%] rounded-xl">
      <h2 className="text-white text-3xl font-semibold py-4 text-center">Random Password Generator</h2>
      <div className="flex justify-center mx-8 overflow-hidden rounded-2xl">
        <input type="text"
          placeholder="password"
          value={password}
          className="outline-none w-full py-2 px-3 "
          readOnly
          ref={passwordRef}
        />
        <button 
        onClick={()=>{
          copyPasswordToClipboard()
        }}
        className="bg-blue-700 text-white px-5 text-xl">copy</button>
      </div>

      <div className="text-white ml-10 py-3 flex justify-center gap-6 text-xl">
          <input 
            type="range"  
            min={6}
            max={32}
            value={length}
            className="cursor-pointer"
            onChange={(e)=>{setLength(e.target.value)}}
          />
          <label>Length: {length}</label>         
      </div>

      <div className="text-white p-3 ml-3 flex flex-wrap justify-center gap-x-3 text-xl ">       
        <div className="flex items-center">
          <input type="checkbox" 
            checked = {numAllowed}
            id="numberInput"
            onChange={()=>{
              setNumAllowed((prev)=>!prev);
            }}
          />
        </div>
        <label htmlFor="numberInput">Number</label>

        <div className="flex items-center">
          <input type="checkbox"
            checked = {charAllowed}
            id="characterInput"
            onChange={()=>{
              setCharAllowed((prev)=> !prev)
            }}
           />
        </div>
        <label >Character</label>

        <div className="flex items-center">
          <input type="checkbox"
            checked = {useUpperCase}           
            onChange={()=>{
              setUseUpperCase((prev)=> !prev)
            }}
           />
        </div>
        <label >UpperCase</label>

        <div className="flex items-center">
          <input type="checkbox"
            defaultChecked = {useLowerCase}
            onChange={()=>{
              setUseLowerCase((prev)=> !prev)
            }}
           />
        </div>
        <label >LowerCase</label>
      </div>

    </div>
    </>
  )
}

export default App
