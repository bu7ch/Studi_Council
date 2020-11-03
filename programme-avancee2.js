//Global Scope ( portée globale) varOne

// Local Scope (portée dans le bloc) vartwo & varThree

let varOne = 'varOne' 

if(true){
  console.log(varOne);
  let varTwo = 'varTwo'
  console.log(varTwo);
  if(true){
    let varFour = 'varFour'
  
  }
}
if(true){
  let varThree = 'varThree'
}
console.log(varTwo);

