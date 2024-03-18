


const App = () => {
  const x =Math.round(Math.random()*(24 - 0)+0);
  console.log(x)

  const time = <p>
    {x < 13 ? "Buenos días" : x < 20 ? "Buenas tardes":"Buenas Noches"}
    
    </p>
 
   return (
     <>
     <h1> {time} </h1>
     </>
   )
}

export default App;