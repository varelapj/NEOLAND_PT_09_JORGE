
  import { PrintFigureMorty } from "../../Components/Figure/figuremorty";
  import { MapeoData } from "../../Utils/MapeodataRickandmorty";  
  import "./Rickandmorty.css/";

  const template = () => `<div id="RickandmortyPage">
  </div>`;
  
  const GetData = async () => {
    const Data = await MapeoData();
    PrintGallery(Data);
  };
  
  const PrintGallery = (Data) => {
    console.log(Data);
    Data.map((item) => PrintFigureMorty(item.name, item.image));
  };
  
  export const PrintRickandmortyPage = () => {
    document.querySelector("main").innerHTML = template();
    GetData();
  };
