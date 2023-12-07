const template = () => `<div id=”PokeApiPage”>

<img id="imagenpokeapi" src="https://th.bing.com/th/id/OIP.YiFjhgHvf6fINergjvZ6FgHaC7?rs=1&pid=ImgDetMain"></img>
</div>`;
export const PrintPokeApiPage = () =>{
document.querySelector("main").innerHTML = template();
}
