/***Iteración #2: Mix Fors**

Dado el siguiente javascript usa forof y forin para hacer 
la media del volumen de todos los sonidos favoritos que tienen los usuarios.*/

const users = [
    {name: 'Manolo el del bombo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 50},
            rain: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'Mortadelo',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 30},
            shower: {format: 'ogg', volume: 55},
            train: {format: 'mp3', volume: 60},
        }
    },
    {name: 'Super Lopez',
        favoritesSounds: {
            shower: {format: 'mp3', volume: 50},
            train: {format: 'ogg', volume: 60},
            firecamp: {format: 'mp3', volume: 80},
        }
    },
    {name: 'El culebra',
        favoritesSounds: {
            waves: {format: 'mp3', volume: 67},
            wind: {format: 'ogg', volume: 35},
            firecamp: {format: 'mp3', volume: 60},
        }
    },
]


const sonidosFavoritos =[]
const sonidosFavoritosTotal = 0

const sumaSonidos = (param) => 
{
    let sumaTotal = 0
    let cont = 0
    let  sonidosFavoritosTotal=[]
for (let valor of param) {

   sonidosFavoritos.push(valor.favoritesSounds)

}
for (let valor2 in sonidosFavoritos) {
    let sonidosFavoritos2 =sonidosFavoritos[valor2]
    for(let valor3 in sonidosFavoritos2){
       let  sonidosFavoritosTotal=[(sonidosFavoritos2[valor3].volume)]
      
       for(let k of sonidosFavoritosTotal) {
        sumaTotal+=k;
        cont++
    }   
    }   
} console.log(sumaTotal/cont) 
}


sumaSonidos(users)


