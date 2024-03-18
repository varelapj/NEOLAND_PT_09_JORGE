
const App = () => {

  const x =[
    {firstName : "Susan", lastName: "Steward"},
    {firstName : "Daniel", lastName: "Longbottom"},
    {firstName : "Jacob", lastName: "Black"}
  ];


   return (
     <>
   {  x.map((element)=>{
   return `${element.firstName} ${element.lastName} / `
})}
     </>
   )
}

export default App;