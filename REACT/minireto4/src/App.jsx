import { useState } from 'react'

const App = () => {
  const [estadoPantalla, setEstadoPantalla] = useState("si")

return(
  <>
         <button onClick={() =>  
          
          setEstadoPantalla((valorAnterior) => {
            return valorAnterior == "si"? "no":"si" 
          }) 
          }>
           Estado es {estadoPantalla}
         </button>
    </>

    
)

}

 export default App;
// const App = () => {
//   const x =Math.round(Math.random()*(24 - 0)+0);
//   console.log(x)

//   const time = <p>
//     {x < 13 ? "Buenos días" : x < 20 ? "Buenas tardes":"Buenas Noches"}
    
//     </p>
 
//    return (
//      <>
//      <h1> {time} </h1>
//      </>
//    )
// }

// export default App;





// import { useState } from 'react'
// import reactLogo from './assets/react.svg'
// import viteLogo from '/vite.svg'
// import './App.css'

// function App() {
//   const [count, setCount] = useState(10)

//   return (
//     <>
//       <div>
//         <a href="https://vitejs.dev" target="_blank">
//           <img src={viteLogo} className="logo" alt="Vite logo" />
//         </a>
//         <a href="https://react.dev" target="_blank">
//           <img src={reactLogo} className="logo react" alt="React logo" />
//         </a>
//       </div>
//       <h1>Vite + React</h1>
//       <div className="card">
//         <button onClick={() => setCount((count) => count + 1)}>
//           count is {count}
//         </button>
//         <p>
//           Edit <code>src/App.jsx</code> and save to test HMR
//         </p>
//       </div>
//       <p className="read-the-docs">
//         Click on the Vite and React logos to learn more
//       </p>
//     </>
//   )
// }

// export default App
