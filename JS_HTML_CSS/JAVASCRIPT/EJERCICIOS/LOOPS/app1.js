const placesToTravel2 = 
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