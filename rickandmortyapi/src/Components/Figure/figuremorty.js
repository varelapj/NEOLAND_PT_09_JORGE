import "./figuremorty.css"
 


const template = (imageFigure, nameFigure) => `
<figure>
    <img src=${imageFigure} alt=${nameFigure}/>
    <h3>${nameFigure}</h3>
</figure>
`;

export const PrintFigureMorty = (name, image) =>{
console.log(document.getElementById("RickandmortyPage"));
  (document.getElementById("RickandmortyPage").innerHTML += template(
    image,
    name
  ))};

