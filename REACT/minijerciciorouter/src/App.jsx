import './App.css'
import React from "react";
import {use} from "react"
import {Image, Paragraph, Title, Subtitle, Header, Main, Footer} from "./components"
import { Outlet } from "react-router-dom";
function App() {
 
//    <img src="https://reactjs.org/logo-og.png" alt="React Image" /> 
  return (
    <>
     <Image source="https://reactjs.org/logo-og.png" FreeTextalt="React Image"/>
     <Paragraph FreeText="Free Text"/>
     <Header> 
        <Title FreeText={"Titulo"} />
      </Header>
<Main>
<Subtitle FreeText={"Subtitulo"}/>
</Main>
     <Subtitle FreeText="Subtitulo"/>
     <Subtitle FreeText="Subtitulo"/>
     <Subtitle FreeText="Subtitulo"/>
     <Paragraph FreeText="Free Text"/>
<Footer>
<Paragraph FreeText={"Final Text"}/>   
</Footer>
<Outlet />
    

    </>
  )
}

export default App
// import React from "react";
// import "./App.css";
// import { Outlet } from "react-router-dom";
// import { Header } from "./components/Header/Header";

// const App = () => {
//   return (
//     <>
//       <Header />
//       <Outlet />
//     </>
//   );
// };

// export default App;
