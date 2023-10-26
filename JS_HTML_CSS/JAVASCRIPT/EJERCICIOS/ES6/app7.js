/*7.1 Dado el siguiente array, haz una suma de todos las notas de los examenes de 
los alumnos usando la función .reduce().*/

const exams = [
    {name: 'Yuyu Cabeza Crack', score: 5}, 
    {name: 'Maria Aranda Jimenez', score: 1}, 
    {name: 'Cristóbal Martínez Lorenzo', score: 6}, 
    {name: 'Mercedez Regrera Brito', score: 7},
    {name: 'Pamela Anderson', score: 3},
    {name: 'Enrique Perez Lijó', score: 6},
    {name: 'Pedro Benitez Pacheco', score: 8},
    {name: 'Ayumi Hamasaki', score: 4},
    {name: 'Robert Kiyosaki', score: 2},
    {name: 'Keanu Reeves', score: 10}
];

const examsScore =[]

for (let valor of exams){
   examsScore.push(valor.score)
}
const sum = examsScore.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum)



/*7.2 Dado el mismo array, haz una suma de todos las notas de los examenes de los 
alumnos que esten aprobados usando la función .reduce().*/

const examsScore2 =[]

for (let valor of exams){
   if(valor.score>4) examsScore2.push(valor.score)
}
const sum2 = examsScore2.reduce((accumulator, currentValue) => accumulator + currentValue)
console.log(sum2)



/*7.3 Dado el mismo array, haz la media de las notas de todos los examenes .reduce().*/
console.log(sum/examsScore.length)
