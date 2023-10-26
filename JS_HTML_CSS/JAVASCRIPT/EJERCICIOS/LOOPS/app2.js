const alumns = [
    {name: 'Pepe Viruela', T1: false, T2: false, T3: true}, 
		{name: 'Lucia Aranda', T1: true, T2: false, T3: true},
		{name: 'Juan Miranda', T1: false, T2: true, T3: true},
		{name: 'Alfredo Blanco', T1: false, T2: false, T3: false},
		{name: 'Raquel Benito', T1: true, T2: true, T3: true}
]

/*for (let valor of alumns){
  console.log(alumns)

    for (let valor2 in valor)
   {
     console.log(valor2)   
 }
}*/

alumns.forEach(
    function(element,index) {console.log(alumns[index].T3)}
    )


   /*
   
   
   [] FOR OF Array SIN INDICE
    {ejemplo: ejemplo} FOR IN objeto clave valor SIN INDICE


    */