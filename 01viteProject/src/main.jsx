import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'


// function MyApp(){
//   return(
//     <div>
//       <h2>MyApp Welcome</h2>
//     </div>
//   )
// }

// const reactElement = {
//   type: "a",
//   props:{
//       href: "https://google.com",
//       target:"_blank"
//   },
//   children:"click me to visit google"
// }

// const anotherElement =  (
//   <a href="http://google.com">visit Google</a>
// )

const reactElement = React.createElement(
  "a",
  {
    href:"https://google.com",
    target:"_blank"
  },
  "click to visit google"
)


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,

  
  
)
