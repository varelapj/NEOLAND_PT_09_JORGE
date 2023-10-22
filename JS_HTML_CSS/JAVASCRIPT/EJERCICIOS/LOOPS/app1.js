/*const placesToTravel2 = 
[{id: 5, name: 'Japan'}, 
{id: 11, name: 'Venecia'}, 
{id: 23, name: 'Murcia'}, 
{id: 40, name: 'Santander'}, 
{id: 44, name: 'Filipinas'},
{id: 59, name: 'Madagascar'}]

for (let aa = 0; aa<placesToTravel2.length; aa++){
    console.log(aa)
 if(placesToTravel2[aa].id==11 || placesToTravel2[aa].id==40 ) {
 placesToTravel2.splice(aa,1)}
}

console.log(placesToTravel2)

const products = ['Camiseta de Pokemon','Pantalón coquinero','Gorra de gansta','Camiseta de Basket','Cinrurón de Orión','AC/DC Camiseta'] 


products.forEach((element) => {

    if(element.includes('Camiseta'))
    {console.log(element)}
 })

*/ const products = ['Camiseta de Pokemon','Pantalón coquinero','Gorra de gansta','Camiseta de Basket','Cinrurón de Orión','AC/DC Camiseta'] 


       function encuentraArray (param, string2) {
   
        for (let palabras of param){
            (palabras.includes(string2))?
            console.log(palabras):
           ""
        
        
        }}
        encuentraArray(products,'Camiseta')

        const counterWords = [         'code',         'repeat',         'eat',         'sleep',         'code',         'enjoy',         'sleep',         'code',         'enjoy',         'upgrade',         'code'       ];
       



/*
         repeatCounter = (param) =>
         {        
              const wordCount={};          counterWords.forEach((word)=>
              {if (wordCount[word]){           wordCount[word]++;          } 
              else{        
                 wordCount[word] = 1;          }           });    
            console.log(wordCount);
        }   
  repeatCounter(counterWords);*/



