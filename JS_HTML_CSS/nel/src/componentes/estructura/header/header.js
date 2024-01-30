 
import { changeColorRGB } from '../../../utils/cambioColor';
import { initControler } from '../../../utils/rutas';

import'./header.css'




//declaro el template y exporto la funcion que pinta 
 
const template = () => `
   <img
     src="https://res.cloudinary.com/dxvasvakp/image/upload/v1704553611/apps.19881.14247769038588514.16fb8346-aeb3-4939-8ef6-f5fefab5177f_qiaoyu.jpg"
     alt="title hub game website (app)"
     class="logo"
   />
   <nav>
     <img
       src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682684561/changeColor_tat29q.png"
       alt=" change to style mode page"
       id="changeColor"
     />
     <img
       src="https://res.cloudinary.com/dq186ej4c/image/upload/v1682685633/home_nekvs0.png"
       alt=" navigate to home app"
       id="buttonDashboard"
     />
     <img
       src="https://res.cloudinary.com/dxvasvakp/image/upload/v1703846704/53344360-signo-icono-salir-salir-bot%C3%B3n_nwcple.jpg"
       alt="logout"
       id="buttonLogout"
     />
   </nav>
 `;
 const Listener = () => {
    
    const changeColor = document.getElementById("changeColor");
      changeColor.addEventListener("click",()=>{
        const colorRGB= changeColorRGB();
        document.body.style.background = colorRGB;
    });

    const buttonDashboard= document.getElementById("buttonDashboard");
      buttonDashboard.addEventListener("click",() => { 
    
        initControler("dashboard");
    });

    const buttonLogout= document.getElementById("buttonLogout");
    buttonLogout.addEventListener("click",()=>{
        localStorage.removeItem("username");
      initControler();
    });
 };

  //funcion que exporta y pinta
  export const PrintTemplateHeader= () => {
        document.querySelector("header").innerHTML= template();
        Listener();
      };
      